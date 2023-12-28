const ShipModule = (() => {
  // Creates a ship
  function createShip(shipLength, shipId) {
    const ship = {
      id: shipId,
      hitCount: 0,
      coordinates: [],
      length: shipLength,
      position: "h",

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

        // Determine if ship position is horizontal or vertical
        if (ship.coordinates.length === 1) {
          this.position = "h";
        } else if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
          this.position = "h";
        } else {
          this.position = "v";
        }
      },
    };

    return ship;
  }

  return {
    createShip,
  };
})();

export default ShipModule;
