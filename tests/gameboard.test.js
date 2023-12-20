import GameboardModule from "../src/gameboard";

test("retrieve ships", () => {
  const ships = [
    {
      shipLength: 1,
    },
    {
      shipLength: 2,
    },
    {
      shipLength: 3,
    },
    {
      shipLength: 4,
    },
  ];
  const boardShips = GameboardModule.createShips(ships);
  expect(boardShips.length).toBe(ships.length);
});

describe("find adjacent tiles", () => {
  const board = GameboardModule.createBoard();

  test("check adjacent tiles of 1,1 vertex", () => {
    const vertex = board.vertices[0];

    expect(vertex.adjacencyList).toContainEqual(board.vertices[10]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[1]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[11]);
  });

  test("check adjacent tiles of 4,4 vertex", () => {
    const vertex = board.vertices[33];
    expect(vertex.adjacencyList).toContainEqual(board.vertices[22]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[23]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[24]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[32]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[34]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[42]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[43]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[43]);
  });

  test("check adjacent tiles of 10,10 vertex", () => {
    const vertex = board.vertices[99];
    expect(vertex.adjacencyList).toContainEqual(board.vertices[88]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[89]);
    expect(vertex.adjacencyList).toContainEqual(board.vertices[98]);
  });
});
