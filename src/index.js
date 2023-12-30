/* eslint-disable import/no-mutable-exports */
import "./styles.css";
// eslint-disable-next-line import/no-cycle
import DOMHandler from "./DOMHandler";
import GameboardModule from "./gameboard";
import { addDocumentEventListeners } from "./eventManager";
import Player from "./player";

let playerOneBoard = null;
let playerTwoBoard = null;
let playerOne = null;
let playerTwo = null;
// let currentPlayer = null;

function gameLoop() {
  const main = document.querySelector(".main");
  if (main) {
    main.remove();
  }
  playerOneBoard = GameboardModule();
  playerOneBoard.createBoard();
  playerOneBoard.createShips();
  playerOneBoard.positionShips();
  playerOneBoard.locked = false;
  playerOne = Player(playerOneBoard, "human");
  playerOneBoard.player = playerOne;
  // currentPlayer = playerOne;

  playerTwoBoard = GameboardModule();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();
  playerTwoBoard.locked = true;
  playerTwo = Player(playerTwoBoard, "computer");
  playerTwoBoard.player = playerTwo;

  DOMHandler.playerOneBoard = playerOneBoard.board.vertices;
  DOMHandler.playerOneShips = playerOneBoard.ships;

  DOMHandler.playerTwoBoard = playerTwoBoard.board.vertices;
  DOMHandler.playerTwoShips = playerTwoBoard.ships;

  DOMHandler.createDom();
}

gameLoop();
addDocumentEventListeners();

document.addEventListener("keydown", (event) => {
  if (event.key === "c" || event.key === "C") {
    console.log(playerOne);
    console.log(playerTwo);
  }
});

export default gameLoop;
export { playerOneBoard, playerTwoBoard };
