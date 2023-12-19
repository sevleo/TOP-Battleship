import ShipModule from "./ship";

const GameboardModule = (() => {
  const boardShips = [];

  function createShips(ships) {
    ships.forEach((element) => {
      const ship = ShipModule.createShip(element.shipLenght);
      boardShips.push(ship);
    });
  }

  function retrieveShips() {
    return boardShips;
  }

  return {
    createShips,
    retrieveShips,
  };
})();

export default GameboardModule;
