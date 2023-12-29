import GameboardModule from "../src/gameboard";

jest.mock("../src/DOMHandler", () => ({
  updateSunkShips: jest.fn(),
}));

const ships = [
  {
    shipLength: 1,
    shipId: 0,
  },
  {
    shipLength: 2,
    shipId: 1,
  },
  {
    shipLength: 3,
    shipId: 2,
  },
  {
    shipLength: 4,
    shipId: 3,
  },
];

const board = GameboardModule();
board.createBoard();
board.createShips(ships);

test("number of ships", () => {
  expect(board.ships.length).toBe(ships.length);
});

describe("check adjacent tiles", () => {
  test("check adjacent tiles of 1,1 vertex", () => {
    const vertex = board.board.vertices[0];

    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[10]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[1]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[11]);
  });

  test("check adjacent tiles of 4,4 vertex", () => {
    const vertex = board.board.vertices[33];
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[22]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[23]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[24]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[32]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[34]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[42]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[43]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[43]);
  });

  test("check adjacent tiles of 10,10 vertex", () => {
    const vertex = board.board.vertices[99];
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[88]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[89]);
    expect(vertex.adjacencyList).toContainEqual(board.board.vertices[98]);
  });
});

describe("testing attack function", () => {
  describe("1 length ship", () => {
    board.ships[0].assignCoordinates([1, 1]);
    board.ships[0].setOrientation();
    test("test miss", () => {
      board.receiveAttack([1, 2]);
      expect(board.ships[0].isSunk()).toEqual(false);
    });
    test("test hit and sink", () => {
      board.receiveAttack([1, 1]);
      expect(board.ships[0].isSunk()).toEqual(true);
    });
  });

  describe("2 length ship", () => {
    board.ships[1].assignCoordinates([4, 5], [4, 6]);
    board.ships[1].setOrientation();
    test("test miss", () => {
      board.receiveAttack([4, 4]);
      expect(board.ships[1].isSunk()).toEqual(false);
      expect(board.ships[1].hitCount).toBe(0);
    });
    test("test hit", () => {
      board.receiveAttack([4, 5]);
      expect(board.ships[1].isSunk()).toEqual(false);
      expect(board.ships[1].hitCount).toBe(1);
    });
    test("test miss", () => {
      board.receiveAttack([5, 5]);
      expect(board.ships[1].isSunk()).toEqual(false);
      expect(board.ships[1].hitCount).toBe(1);
    });
    test("test hit and sink", () => {
      board.receiveAttack([4, 6]);
      expect(board.ships[1].isSunk()).toEqual(true);
      expect(board.ships[1].hitCount).toBe(2);
    });
  });

  describe("3 length ship", () => {
    console.log(board.ships[2]);
    board.ships[2].assignCoordinates([6, 1], [6, 2], [6, 3]);
    board.ships[2].setOrientation();
    test("test hit", () => {
      board.receiveAttack([6, 1]);
      expect(board.ships[2].isSunk()).toEqual(false);
      expect(board.ships[2].hitCount).toBe(1);
    });
    test("test hit", () => {
      board.receiveAttack([6, 2]);
      expect(board.ships[2].isSunk()).toEqual(false);
      expect(board.ships[2].hitCount).toBe(2);
    });
    test("test hit and sink", () => {
      board.receiveAttack([6, 3]);
      expect(board.ships[2].isSunk()).toEqual(true);
      expect(board.ships[2].hitCount).toBe(3);
    });

    test("all ships are not sink yet", () => {
      expect(board.allShipsSunk()).toBe(false);
    });
  });

  describe("4 length ship", () => {
    board.ships[3].assignCoordinates([8, 3], [8, 4], [8, 5], [8, 6]);
    board.ships[3].setOrientation();
    test("test hit", () => {
      board.receiveAttack([8, 4]);
      expect(board.ships[3].isSunk()).toEqual(false);
      expect(board.ships[3].hitCount).toBe(1);
    });
    test("test hit", () => {
      board.receiveAttack([8, 5]);
      expect(board.ships[3].isSunk()).toEqual(false);
      expect(board.ships[3].hitCount).toBe(2);
    });

    test("test hit", () => {
      board.receiveAttack([8, 3]);
      expect(board.ships[3].isSunk()).toEqual(false);
      expect(board.ships[3].hitCount).toBe(3);
    });

    test("test hit and sink", () => {
      board.receiveAttack([8, 6]);
      expect(board.ships[3].isSunk()).toEqual(true);
      expect(board.ships[3].hitCount).toBe(4);
    });

    test("all ships are sunk yet", () => {
      expect(board.allShipsSunk()).toBe(true);
    });
  });
});
