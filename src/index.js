import "./styles.css";
import GameboardModule from "./gameboard";

const body = document.querySelector("body");
const test = document.createElement("div");
test.textContent = "Hello World!";
body.append(test);

GameboardModule.createShips();
console.log(GameboardModule.retrieveShips());

const ship = GameboardModule.retrieveShips()[1];
console.log(ship);

ship.hit();
ship.hit();
console.log(ship.getHitCount());
console.log(ship.isSunk());
