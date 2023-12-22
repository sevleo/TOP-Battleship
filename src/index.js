import "./styles.css";
import GameboardModule from "./gameboard";
import Player from "./player";
import DOMHandler from "./DOMHandler";

const ships = [
  {
    shipLength: 1,
  },
  {
    shipLength: 2,
  },
  {
    shipLength: 3,
  },
  {
    shipLength: 4,
  },
];

// Two-players script
const playerOneBoard = GameboardModule();
playerOneBoard.createBoard();
playerOneBoard.createShips(ships);

playerOneBoard.ships[0].assignCoordinates([3, 2]);
playerOneBoard.ships[1].assignCoordinates([5, 1], [5, 2]);
playerOneBoard.ships[2].assignCoordinates([8, 6], [8, 7], [8, 8]);
playerOneBoard.ships[3].assignCoordinates([4, 4], [5, 4], [6, 4], [7, 4]);

const playerTwoBoard = GameboardModule();
playerTwoBoard.createBoard();
playerTwoBoard.createShips(ships);

playerTwoBoard.ships[0].assignCoordinates([9, 5]);
playerTwoBoard.ships[1].assignCoordinates([4, 5], [4, 6]);
playerTwoBoard.ships[2].assignCoordinates([3, 3], [3, 2], [3, 1]);
playerTwoBoard.ships[3].assignCoordinates([7, 4], [7, 5], [7, 6], [7, 7]);

DOMHandler.playerOneBoard = playerOneBoard.board.vertices;
DOMHandler.playerOneShips = playerOneBoard.ships;

DOMHandler.playerTwoBoard = playerTwoBoard.board.vertices;
DOMHandler.playerTwoShips = playerTwoBoard.ships;

console.log(DOMHandler);

DOMHandler.createDom();

// Testing script
// GameboardModule.createBoard();
// GameboardModule.createShips(ships);

// GameboardModule.ships[0].assignCoordinates([1, 1]);
// GameboardModule.ships[1].assignCoordinates([4, 5], [4, 6]);
// GameboardModule.receiveAttack([4, 4]);

// console.log(JSON.stringify(GameboardModule.ships));

// GameboardModule.receiveAttack([4, 5]);

// console.log(GameboardModule.ships);

// console.log(GameboardModule.allShipsSunk());
