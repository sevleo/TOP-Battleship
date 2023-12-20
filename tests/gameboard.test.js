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

describe("find adjacent tiles", () => {
  GameboardModule.createBoard();

  test("check adjacent tiles of 1,1 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[0];

    expect(vertex.adjacencyList).toContainEqual([2, 1]);
    expect(vertex.adjacencyList).toContainEqual([1, 2]);
    expect(vertex.adjacencyList).toContainEqual([2, 2]);
  });

  test("check adjacent tiles of 4,4 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[33];
    expect(vertex.adjacencyList).toContainEqual([3, 3]);
    expect(vertex.adjacencyList).toContainEqual([3, 4]);
    expect(vertex.adjacencyList).toContainEqual([3, 5]);
    expect(vertex.adjacencyList).toContainEqual([4, 3]);
    expect(vertex.adjacencyList).toContainEqual([4, 5]);
    expect(vertex.adjacencyList).toContainEqual([5, 3]);
    expect(vertex.adjacencyList).toContainEqual([5, 4]);
    expect(vertex.adjacencyList).toContainEqual([5, 5]);
  });

  test("check adjacent tiles of 7,6 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[65];
    expect(vertex.adjacencyList).toContainEqual([6, 5]);
    expect(vertex.adjacencyList).toContainEqual([6, 6]);
    expect(vertex.adjacencyList).toContainEqual([6, 7]);
    expect(vertex.adjacencyList).toContainEqual([7, 5]);
    expect(vertex.adjacencyList).toContainEqual([7, 7]);
    expect(vertex.adjacencyList).toContainEqual([8, 5]);
    expect(vertex.adjacencyList).toContainEqual([8, 6]);
    expect(vertex.adjacencyList).toContainEqual([8, 7]);
  });

  test("check adjacent tiles of 10,10 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[99];
    expect(vertex.adjacencyList).toContainEqual([9, 9]);
    expect(vertex.adjacencyList).toContainEqual([9, 10]);
    expect(vertex.adjacencyList).toContainEqual([10, 9]);
  });
});
