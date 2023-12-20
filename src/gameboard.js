import ShipModule from "./ship";
import Graph from "./DS_Graph";

const GameboardModule = (() => {
  const board = new Graph();
  const ships = [];

  // Create 10x10 cells as graph vertexes
  function createCells() {
    for (let i = 1; i < 11; i += 1) {
      for (let j = 1; j < 11; j += 1) {
        board.addVertex(i, j);
      }
    }
  }

  // Fill out adjacencyList for a vertex
  function addCellAdjacencies(vertex) {
    const y = vertex.coordinates[0];
    const x = vertex.coordinates[1];
    const potentialAdjacencies = [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y, x - 1],
      [y, x + 1],
      [y + 1, x - 1],
      [y + 1, x],
      [y + 1, x + 1],
    ];
    const adjacencies = [];
    potentialAdjacencies.forEach((adjacency) => {
      if (
        adjacency[0] > 0 &&
        adjacency[0] <= 10 &&
        adjacency[1] > 0 &&
        adjacency[1] <= 10
      ) {
        adjacencies.push(adjacency);
      }
    });
    return adjacencies;
  }

  // Fill out adjacencyList for each cell vertex
  function createAdjacencies() {
    board.vertices.forEach((vertex) => {
      // eslint-disable-next-line no-param-reassign
      vertex.adjacencyList = addCellAdjacencies(vertex);
    });
  }

  function createBoard() {
    createCells();
    createAdjacencies();
  }

  function createShips(args) {
    args.forEach((element) => {
      const ship = ShipModule.createShip(element.shipLenght);
      ships.push(ship);
    });
  }

  function retrieveShips() {
    return ships;
  }

  function retrieveBoard() {
    console.log(board);
    return board;
  }

  return {
    createBoard,
    createShips,
    retrieveShips,
    retrieveBoard,
  };
})();

export default GameboardModule;
