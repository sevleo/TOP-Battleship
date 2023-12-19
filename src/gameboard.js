import ShipModule from "./ship";

const GameboardModule = (() => {
  const boardShips = [];
  function createShips() {
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
