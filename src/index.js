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

GameboardModule.createBoard();
GameboardModule.createShips(ships);

console.log(GameboardModule.board);

console.log(JSON.stringify(GameboardModule.ships));

GameboardModule.ships[0].hit();

console.log(JSON.stringify(GameboardModule.ships));
