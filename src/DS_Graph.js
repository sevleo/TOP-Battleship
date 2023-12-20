/* eslint-disable max-classes-per-file */

class Vertex {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.adjacencyList = [];
  }

  addNeighbor(vertex) {
    if (!this.adjacencyList.includes(vertex)) {
      this.adjacencyList.push(vertex);
    }
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(x, y) {
    const vertex = new Vertex([x, y]);
    this.vertices.push(vertex);
  }

  addEdge(vertex1, vertex2) {
    vertex1.addNeighbor(vertex2);
    vertex2.addNeighbor(vertex1);
  }
}

export default Graph;
