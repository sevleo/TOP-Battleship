import ShipModule from "./ship";

const GameboardModule = (() => {
  const board = [];
  const ships = [];

  function createBoard() {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        const cell = { y: i, x: j };
        board.push(cell);
      }
    }
    console.log(board);
  }

  function createShips(args) {
    args.forEach((element) => {
      const ship = ShipModule.createShip(element.shipLenght);
      ships.push(ship);
    });
  }

  function retrieveShips() {
    return ships;
  }

  return {
    createBoard,

    createShips,
    retrieveShips,
  };
})();

export default GameboardModule;
