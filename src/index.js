import "./styles.css";
import GameboardModule from "./gameboard";
import Player from "./player";
import DOMHandler from "./DOMHandler";

const ships = [
  {
    shipLength: 1,
  },
  {
    shipLength: 1,
  },
  {
    shipLength: 1,
  },
  {
    shipLength: 1,
  },
  {
    shipLength: 2,
  },
  {
    shipLength: 2,
  },
  {
    shipLength: 2,
  },
  {
    shipLength: 3,
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
playerOneBoard.positionShips();

const playerTwoBoard = GameboardModule();
playerTwoBoard.createBoard();
playerTwoBoard.createShips(ships);
playerTwoBoard.positionShips();

DOMHandler.playerOneBoard = playerOneBoard.board.vertices;
DOMHandler.playerOneShips = playerOneBoard.ships;

DOMHandler.playerTwoBoard = playerTwoBoard.board.vertices;
DOMHandler.playerTwoShips = playerTwoBoard.ships;

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
