import GameboardModule from "../src/gameboard";

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

GameboardModule.createBoard();
GameboardModule.createShips(ships);

test("number of ships", () => {
  expect(GameboardModule.ships.length).toBe(ships.length);
});

describe("check adjacent tiles", () => {
  test("check adjacent tiles of 1,1 vertex", () => {
    const vertex = GameboardModule.board.vertices[0];

    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[10],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[1],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[11],
    );
  });

  test("check adjacent tiles of 4,4 vertex", () => {
    const vertex = GameboardModule.board.vertices[33];
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[22],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[23],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[24],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[32],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[34],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[42],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[43],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[43],
    );
  });

  test("check adjacent tiles of 10,10 vertex", () => {
    const vertex = GameboardModule.board.vertices[99];
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[88],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[89],
    );
    expect(vertex.adjacencyList).toContainEqual(
      GameboardModule.board.vertices[98],
    );
  });
});

describe("testing attack function", () => {
  describe("1 length ship", () => {
    GameboardModule.ships[0].assignCoordinates([1, 1]);
    test("test miss", () => {
      GameboardModule.receiveAttack([1, 2]);
      expect(GameboardModule.ships[0].isSunk()).toEqual(false);
    });
    test("test hit and sink", () => {
      GameboardModule.receiveAttack([1, 1]);
      expect(GameboardModule.ships[0].isSunk()).toEqual(true);
    });
  });

  describe("2 length ship", () => {
    GameboardModule.ships[1].assignCoordinates([4, 5], [4, 6]);
    test("test miss", () => {
      GameboardModule.receiveAttack([4, 4]);
      expect(GameboardModule.ships[1].isSunk()).toEqual(false);
      expect(GameboardModule.ships[1].hitCount).toBe(0);
    });
    test("test hit", () => {
      GameboardModule.receiveAttack([4, 5]);
      expect(GameboardModule.ships[1].isSunk()).toEqual(false);
      expect(GameboardModule.ships[1].hitCount).toBe(1);
    });
    test("test miss", () => {
      GameboardModule.receiveAttack([5, 5]);
      expect(GameboardModule.ships[1].isSunk()).toEqual(false);
      expect(GameboardModule.ships[1].hitCount).toBe(1);
    });
    test("test hit and sink", () => {
      GameboardModule.receiveAttack([4, 6]);
      expect(GameboardModule.ships[1].isSunk()).toEqual(true);
      expect(GameboardModule.ships[1].hitCount).toBe(2);
    });
  });

  describe("3 length ship", () => {
    GameboardModule.ships[2].assignCoordinates([6, 1], [6, 2], [6, 3]);
    test("test hit", () => {
      GameboardModule.receiveAttack([6, 1]);
      expect(GameboardModule.ships[2].isSunk()).toEqual(false);
      expect(GameboardModule.ships[2].hitCount).toBe(1);
    });
    test("test hit", () => {
      GameboardModule.receiveAttack([6, 2]);
      expect(GameboardModule.ships[2].isSunk()).toEqual(false);
      expect(GameboardModule.ships[2].hitCount).toBe(2);
    });
    test("test hit and sink", () => {
      GameboardModule.receiveAttack([6, 3]);
      expect(GameboardModule.ships[2].isSunk()).toEqual(true);
      expect(GameboardModule.ships[2].hitCount).toBe(3);
    });

    test("all ships are not sink yet", () => {
      expect(GameboardModule.allShipsSunk()).toBe(false);
    });
  });

  describe("4 length ship", () => {
    GameboardModule.ships[3].assignCoordinates([8, 3], [8, 4], [8, 5], [8, 6]);
    test("test hit", () => {
      GameboardModule.receiveAttack([8, 4]);
      expect(GameboardModule.ships[3].isSunk()).toEqual(false);
      expect(GameboardModule.ships[3].hitCount).toBe(1);
    });
    test("test hit", () => {
      GameboardModule.receiveAttack([8, 5]);
      expect(GameboardModule.ships[3].isSunk()).toEqual(false);
      expect(GameboardModule.ships[3].hitCount).toBe(2);
    });

    test("test hit", () => {
      GameboardModule.receiveAttack([8, 3]);
      expect(GameboardModule.ships[3].isSunk()).toEqual(false);
      expect(GameboardModule.ships[3].hitCount).toBe(3);
    });

    test("test hit and sink", () => {
      GameboardModule.receiveAttack([8, 6]);
      expect(GameboardModule.ships[3].isSunk()).toEqual(true);
      expect(GameboardModule.ships[3].hitCount).toBe(4);
    });

    test("all ships are sunk yet", () => {
      expect(GameboardModule.allShipsSunk()).toBe(true);
    });
  });
});
