import "./styles.css";
import GameboardModule from "./gameboard";

const body = document.querySelector("body");
const test = document.createElement("div");
test.textContent = "Hello World!";
body.append(test);

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

const board = GameboardModule.createBoard();
const boardShips = GameboardModule.createShips(ships);

console.log(board);

console.log(boardShips);

boardShips[0].hit();
console.log(boardShips);
