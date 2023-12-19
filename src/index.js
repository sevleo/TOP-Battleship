import "./styles.css";
import ShipModule from "./ship";

const body = document.querySelector("body");
const test = document.createElement("div");
test.textContent = "Hello World!";
body.append(test);

const ship1 = ShipModule.createShip(5);

ship1.hit();
console.log(ship1.getHitCount());
