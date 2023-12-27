import "./styles.css";
// eslint-disable-next-line import/no-cycle
import DOMHandler from "./DOMHandler";
import GameboardModule from "./gameboard";

let playerOneBoard = null;

function gameLoop() {
  const main = document.querySelector(".main");
  if (main) {
    main.remove();
  }
  playerOneBoard = GameboardModule();
  playerOneBoard.createBoard();
  playerOneBoard.createShips();
  playerOneBoard.positionShips();

  const playerTwoBoard = GameboardModule();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();

  DOMHandler.playerOneBoard = playerOneBoard.board.vertices;
  DOMHandler.playerOneShips = playerOneBoard.ships;

  DOMHandler.playerTwoBoard = playerTwoBoard.board.vertices;
  DOMHandler.playerTwoShips = playerTwoBoard.ships;

  DOMHandler.createDom();
  console.log(playerOneBoard);
}

gameLoop();

export default gameLoop;
export { playerOneBoard };
