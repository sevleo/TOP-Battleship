// Module responsible for managing ships
const ShipModule = (() => {
  // Creates a ship
  function createShip(length) {
    let hitCount = 0;
    let coordinates = [];

    return {
      length,
      hitCount,
      coordinates,
      hit() {
        hitCount += 1;
      },
      getHitCount() {
        return hitCount;
      },
      isSunk() {
        if (this.getHitCount() === length) {
          return true;
        }
        return false;
      },
      assignCoordinates(...args) {
        coordinates = args;
      },
      getCoordinates() {
        return coordinates;
      },
      getLength() {
        return length;
      },
    };
  }

  return {
    createShip,
  };
})();

export default ShipModule;
