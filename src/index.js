import "./styles.css";
import GameboardModule from "./gameboard";

const body = document.querySelector("body");
const test = document.createElement("div");
test.textContent = "Hello World!";
body.append(test);

const ships = [
  {
    shipLenght: 1,
  },
  {
    shipLenght: 2,
  },
  {
    shipLenght: 3,
  },
  {
    shipLenght: 4,
  },
];

GameboardModule.createShips(ships);
GameboardModule.createBoard();
GameboardModule.retrieveBoard();
