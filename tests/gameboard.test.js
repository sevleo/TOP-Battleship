import GameboardModule from "../src/gameboard";

test("retrieve ships", () => {
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
  GameboardModule.createShips(ships);
  expect(GameboardModule.retrieveShips().length).toBe(ships.length);
});
