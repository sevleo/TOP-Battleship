const ShipModule = (() => {
  // Creates a ship
  function createShip(shipLength) {
    const ship = {
      hitCount: 0,
      coordinates: [],
      length: shipLength,
      hit() {
        ship.hitCount += 1;
      },
      isSunk() {
        if (ship.hitCount === ship.length) {
          return true;
        }
        return false;
      },
      assignCoordinates(...args) {
        ship.coordinates = args;
      },
      getCoordinates() {
        return ship.coordinates;
      },
    };

    return ship;
  }

  return {
    createShip,
  };
})();

export default ShipModule;
