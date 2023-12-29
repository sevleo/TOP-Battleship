import "./styles.css";
// eslint-disable-next-line import/no-cycle
import DOMHandler from "./DOMHandler";
import GameboardModule from "./gameboard";
import { addDocumentEventListeners } from "./eventManager";

let playerOneBoard = null;
let playerTwoBoard = null;

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

  playerTwoBoard = GameboardModule();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();
  playerTwoBoard.locked = true;

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
    console.log(playerOneBoard);
    console.log(playerTwoBoard);
  }
});

export default gameLoop;
export { playerOneBoard, playerTwoBoard };
