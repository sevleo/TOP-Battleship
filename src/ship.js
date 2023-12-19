const ShipModule = (() => {
  function createShip(length) {
    let hitCount = 0;

    return {
      length,
      hitCount,
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
    };
  }

  return {
    createShip,
  };
})();

export default ShipModule;
