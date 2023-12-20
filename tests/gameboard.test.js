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

    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[10],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[1],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[11],
    );
  });

  test("check adjacent tiles of 4,4 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[33];
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[22],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[23],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[24],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[32],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[34],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[42],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[43],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[43],
    );
  });

  test("check adjacent tiles of 10,10 vertex", () => {
    const vertex = GameboardModule.retrieveBoard().vertices[99];
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[88],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[89],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.retrieveBoard().vertices[98],
    );
  });
});
