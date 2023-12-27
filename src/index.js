import "./styles.css";
// eslint-disable-next-line import/no-cycle
import DOMHandler from "./DOMHandler";
import GameboardModule from "./gameboard";

let playerOneBoard = null;

function gameLoop() {
  const main = document.querySelector(".main");
  if (main) {
    main.remove();
  }
  playerOneBoard = GameboardModule();
  playerOneBoard.createBoard();
  playerOneBoard.createShips();
  playerOneBoard.positionShips();

  const playerTwoBoard = GameboardModule();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();

  DOMHandler.playerOneBoard = playerOneBoard.board.vertices;
  DOMHandler.playerOneShips = playerOneBoard.ships;

  DOMHandler.playerTwoBoard = playerTwoBoard.board.vertices;
  DOMHandler.playerTwoShips = playerTwoBoard.ships;

  DOMHandler.createDom();
  console.log(playerOneBoard);
}

gameLoop();

export default gameLoop;

const draggableElements = document.getElementsByClassName("draggable");
const draggableElement = draggableElements[0];
const draggableElementRect = draggableElement.getBoundingClientRect();

let isDragging = false;
let offSetX;
let offSetY;
let mouseDownOffsetHor = 0;
let mouseDownOffsetVer = 0;
let originalElementBelow = null;
let elementBelow = null;

// Mouse down
draggableElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  draggableElement.style.left = 0;
  draggableElement.style.top = 0;
  draggableElement.style.zIndex = 0;
  offSetX = event.clientX;
  offSetY = event.clientY;

  draggableElement.classList.add("dragging");

  const parentRect = draggableElement.parentElement.getBoundingClientRect();

  const cells = [];
  const cellsVertices = [];
  const cellsVerticesAdjacent = [];
  const firstCell = draggableElement.parentElement;
  let secondCell;
  let thirdCell;
  let fourthCell;

  cells.push(firstCell);
  if (offSetX > parentRect.x + 120) {
    mouseDownOffsetHor = 120;
  } else if (offSetX > parentRect.x + 80) {
    mouseDownOffsetHor = 80;
  } else if (offSetX > parentRect.x + 40) {
    mouseDownOffsetHor = 40;
  } else if (offSetY > parentRect.y + 120) {
    mouseDownOffsetVer = 120;
  } else if (offSetY > parentRect.y + 80) {
    mouseDownOffsetVer = 80;
  } else if (offSetY > parentRect.y + 40) {
    mouseDownOffsetVer = 40;
  }

  // If width of draggable equal or greater than 80, grab 2nd element and put it in the cells list
  if (draggableElementRect.width >= 80) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor + 40,
      event.clientY - mouseDownOffsetVer,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        secondCell = element;
        cells.push(secondCell);
      }
    });
  }

  // If width of draggable equal or greater than 120, grab 3rd element and put it in the cells list
  if (draggableElementRect.width >= 120) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor + 80,
      event.clientY - mouseDownOffsetVer,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        thirdCell = element;
        cells.push(thirdCell);
      }
    });
  }

  // If width of draggable equal or greater than 160, grab 4th element and put it in the cells list
  if (draggableElementRect.width >= 160) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor + 120,
      event.clientY - mouseDownOffsetVer,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        fourthCell = element;
        cells.push(fourthCell);
      }
    });
  }

  // If height of draggable equal or greater than 80, grab 2nd element and put it in the cells list
  if (draggableElementRect.height >= 80) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor,
      event.clientY - mouseDownOffsetVer + 40,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        secondCell = element;
        cells.push(secondCell);
      }
    });
  }

  // If height of draggable equal or greater than 120, grab 3rd element and put it in the cells list
  if (draggableElementRect.height >= 120) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor,
      event.clientY - mouseDownOffsetVer + 80,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        thirdCell = element;
        cells.push(thirdCell);
      }
    });
  }

  // If height of draggable equal or greater than 160, grab 4th element and put it in the cells list
  if (draggableElementRect.height >= 160) {
    const cellElements = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor,
      event.clientY - mouseDownOffsetVer + 120,
    );
    cellElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        fourthCell = element;
        cells.push(fourthCell);
      }
    });
  }

  // Change the droppable attribute of each cell to true
  cells.forEach((cell) => {
    cell.setAttribute("droppable", true);
    const className = cell.classList[0];
    const array = className.split(",").map(Number);
    const vertex = playerOneBoard.findVertextObjectByCoordinates(array);
    cellsVertices.push(vertex);
  });

  // Change the droppable attribute of each cell's adjacent cell to true (except those occupied or neighbored to ships)
  cellsVertices.forEach((cellVertex) => {
    cellVertex.occupiedByShip = false;
    cellVertex.occupied = false;
    cellVertex.adjacencyList.forEach((adjacency) => {
      if (!cellsVertices.includes(adjacency)) {
        adjacency.occupied = false;
        adjacency.adjacencyList.forEach((adj) => {
          if (!cellsVertices.includes(adj)) {
            if (adj.occupiedByShip) {
              adjacency.occupied = true;
            }
          }
        });
        if (
          adjacency.occupied === false &&
          !cellsVerticesAdjacent.includes(adjacency)
        ) {
          cellsVerticesAdjacent.push(adjacency);
        }
      }
    });
  });

  cellsVerticesAdjacent.forEach((vertex) => {
    const className = `${vertex.coordinates[0]},${vertex.coordinates[1]}`;
    const parentDiv = document.querySelector(".playerOne-board");
    const div = parentDiv.querySelector(`[class*="${className}"].cell`);
    div.setAttribute("droppable", true);
    // div.classList.add("ship-cell");
  });

  //   console.log(cells);
  //   console.log(cellsVertices);
  //   console.log(cellsVerticesAdjacent);
  //   console.log(playerOneBoard);
  const elementsBelow = document.elementsFromPoint(
    event.clientX - mouseDownOffsetHor,
    event.clientY - mouseDownOffsetVer,
  );
  elementsBelow.forEach((element) => {
    if (element.classList.contains("cell")) {
      if (element.getAttribute("droppable") === "true") {
        elementBelow = element;
        originalElementBelow = element;
      } else {
        elementBelow = null;
        originalElementBelow = null;
      }
    }
  });
});

// Mouse move
document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const elementsBelow = document.elementsFromPoint(
      event.clientX - mouseDownOffsetHor,
      event.clientY - mouseDownOffsetVer,
    );
    elementsBelow.forEach((element) => {
      if (element.classList.contains("cell")) {
        if (element.getAttribute("droppable") === "true") {
          elementBelow = element;
        } else {
          elementBelow = null;
        }
      }
    });
    draggableElement.style.left = `${event.clientX - offSetX}px`;
    draggableElement.style.top = `${event.clientY - offSetY}px`;
  }
  //   console.log(elementBelow);
});

// Mouse up
document.addEventListener("mouseup", (event) => {
  if (isDragging) {
    isDragging = false;
    let appended = false;

    if (draggableElementRect.width > 40 || draggableElementRect.height > 40) {
      let lastShipElement;

      if (draggableElementRect.width === 80) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 40,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.width === 120) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 80,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.width === 160) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 120,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.height === 80) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 40,
        );
      } else if (draggableElementRect.height === 120) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 80,
        );
      } else if (draggableElementRect.height === 160) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 120,
        );
      }

      lastShipElement.forEach((element) => {
        if (element.classList.contains("cell")) {
          const className = element.classList[0];
          const array = className.split(",").map(Number);
          const vertex = playerOneBoard.findVertextObjectByCoordinates(array);

          vertex.adjacencyList.forEach((adjacency) => {
            if (adjacency.occupiedByShip === true) {
              if (elementBelow) {
                elementBelow.setAttribute("droppable", false);
                //   elementBelow.classList.remove("ship-cell");
              }
            }
          });
        }
      });
    }

    if (elementBelow) {
      makeDroppable(elementBelow, event);
      appended = true;
    }

    draggableElement.style.left = 0;
    draggableElement.style.top = 0;
    draggableElement.style.zIndex = 5;
    draggableElement.classList.remove("dragging");

    offSetX = null;
    offSetY = null;
    mouseDownOffsetHor = 0;
    mouseDownOffsetVer = 0;
    if (elementBelow && appended === false) {
      elementBelow.setAttribute("droppable", true);
    }
    if (elementBelow === null) {
      originalElementBelow.setAttribute("droppable", false);
    }
  }
});

// The cells under the draggable element will be made droppable while the element is getting dragged
function makeDroppable(elBelow, event) {
  if (elBelow.getAttribute("droppable") === "true") {
    elBelow.append(draggableElement);

    const cells = [];
    const cellsVertices = [];
    const firstCell = elBelow;
    let secondCellH;
    let thirdCellH;
    let fourthCellH;
    let secondCellV;
    let thirdCellV;
    let fourthCellV;

    cells.push(firstCell);

    if (draggableElementRect.width >= 80) {
      const firstCellClassArray = firstCell.classList[0].split(",").map(Number);
      const parentDivBoardOne = document.querySelector(".playerOne-board");
      secondCellH = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0]},${firstCellClassArray[1] + 1}`,
        parentDivBoardOne,
      );
      thirdCellH = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0]},${firstCellClassArray[1] + 2}`,
        parentDivBoardOne,
      );
      fourthCellH = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0]},${firstCellClassArray[1] + 3}`,
        parentDivBoardOne,
      );
      secondCellV = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0] + 1},${firstCellClassArray[1]}`,
        parentDivBoardOne,
      );
      thirdCellV = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0] + 2},${firstCellClassArray[1]}`,
        parentDivBoardOne,
      );
      fourthCellV = DOMHandler.findDivByCoordinates(
        `${firstCellClassArray[0] + 3},${firstCellClassArray[1]}`,
        parentDivBoardOne,
      );

      console.log(firstCell);
      console.log(secondCellH);
      console.log(thirdCellH);
      console.log(fourthCellH);
      console.log(secondCellV);
      console.log(thirdCellV);
      console.log(fourthCellV);

      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 40,
        event.clientY - mouseDownOffsetVer,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          secondCellH = element;
          cells.push(secondCellH);
        }
      });
    }

    if (draggableElementRect.width >= 120) {
      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 80,
        event.clientY - mouseDownOffsetVer,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          thirdCellH = element;
          cells.push(thirdCellH);
        }
      });
    }

    if (draggableElementRect.width >= 160) {
      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 120,
        event.clientY - mouseDownOffsetVer,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          fourthCellH = element;
          cells.push(fourthCellH);
        }
      });
    }

    if (draggableElementRect.height >= 80) {
      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 40,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          secondCell = element;
          cells.push(secondCell);
        }
      });
    }

    if (draggableElementRect.height >= 120) {
      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 80,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          thirdCell = element;
          cells.push(thirdCell);
        }
      });
    }

    if (draggableElementRect.height >= 160) {
      const cellElements = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 120,
      );
      cellElements.forEach((element) => {
        if (element.classList.contains("cell")) {
          fourthCell = element;
          cells.push(fourthCell);
        }
      });
    }

    // Set droppable attribute on the cells under draggable element
    cells.forEach((cell) => {
      cell.setAttribute("droppable", false);
      const className = cell.classList[0];
      const array = className.split(",").map(Number);
      const vertex = playerOneBoard.findVertextObjectByCoordinates(array);
      cellsVertices.push(vertex);
    });

    // Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      console.log(cellVertex);
      cellVertex.occupiedByShip = true;
      cellVertex.occupied = true;

      // Update adjacent cells
      cellVertex.adjacencyList.forEach((adjacency) => {
        // Graph
        adjacency.occupied = true;
        const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        // Node element
        div.setAttribute("droppable", false);
      });
    });
    console.log(playerOneBoard.board.vertices);
  }
}
