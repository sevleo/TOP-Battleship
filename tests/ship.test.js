import ShipModule from "../src/ship";

describe("counting hits", () => {
  const ship = ShipModule.createShip(4);
  test("0 hits", () => {
    expect(ship.getHitCount()).toBe(0);
  });

  test("1 hit", () => {
    ship.hit();
    expect(ship.getHitCount()).toBe(1);
  });

  test("2 hits", () => {
    ship.hit();
    expect(ship.getHitCount()).toEqual(2);
  });
});

describe("checking if is sunk", () => {
  const ship = ShipModule.createShip(1);
  test("0 hits", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("1 hit", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

describe("assign & retrieve coordinates", () => {
  test("1 length ship returns 1 length coordinates", () => {
    const ship = ShipModule.createShip(1);
    ship.assignCoordinates([1, 1]);
    expect(ship.getCoordinates().length).toBe(ship.length);
  });

  test("2 length ship returns 2 length coordinates", () => {
    const ship = ShipModule.createShip(2);
    ship.assignCoordinates([1, 1], [1, 2]);
    expect(ship.getCoordinates().length).toBe(ship.length);
  });

  test("coordinates retrieve are same as coordinates assigned", () => {
    const ship = ShipModule.createShip(2);
    ship.assignCoordinates([1, 1], [1, 2]);
    expect(ship.getCoordinates()).toEqual([
      [1, 1],
      [1, 2],
    ]);
  });
});
