/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import gameLoop, { playerOneBoard } from ".";
import DOMHandler from "./DOMHandler";

function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    gameLoop();
  });
}

export default addEventListeners;

function addDocumentEventListeners() {
  let draggableElement = null;
  let draggableElementRect = null;

  let isDragging = false;
  let offSetX;
  let offSetY;
  let mouseDownOffsetHor = 0;
  let mouseDownOffsetVer = 0;
  let originalElementBelow = null;
  let elementBelow = null;

  // Find cells under the ship
  function findShipCells(firstElement, orientation, length) {
    const cells = [];
    cells.push(firstElement);
    const firstCellClassArray = firstElement.classList[0]
      .split(",")
      .map(Number);
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    for (let i = 1; i <= length; i += 1) {
      if (orientation === "h") {
        const cell = DOMHandler.findDivByCoordinates(
          `${firstCellClassArray[0]},${firstCellClassArray[1] + i}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
      if (orientation === "v") {
        const cell = DOMHandler.findDivByCoordinates(
          `${firstCellClassArray[0] + i},${firstCellClassArray[1]}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
    }
    return cells;
  }

  // Find cells to change to "droppable = true" after drag & dropping a ship
  function identifyCellsToMakeDroppable() {
    const shipObject = playerOneBoard.findShipById(draggableElement.id);
    if (elementBelow !== null) {
      if (elementBelow.getAttribute("droppable") === "true") {
        elementBelow.append(draggableElement);
        return findShipCells(
          elementBelow,
          shipObject.position,
          shipObject.length - 1,
        );
      }
      if (elementBelow.getAttribute("droppable") === "false") {
        originalElementBelow.append(draggableElement);
        return findShipCells(
          originalElementBelow,
          shipObject.position,
          shipObject.length - 1,
        );
      }
    } else {
      originalElementBelow.append(draggableElement);
      return findShipCells(
        originalElementBelow,
        shipObject.position,
        shipObject.length - 1,
      );
    }
    return null;
  }

  // Checks if dropping the ship on the position will cause
  // overlap with another ship
  function checkOtherShipOverlap(event) {
    let noOverlap = true;
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
                noOverlap = false;
              }
            }
          });
        }
      });
    }
    return noOverlap;
  }

  // Checks if the element is getting dropped within the borders of the board
  function checkWithinBorders() {
    const elementBelowCoordinates = elementBelow.classList[0]
      .split(",")
      .map(Number);
    if (draggableElementRect.height === 80) {
      if (elementBelowCoordinates[0] > 9) {
        return false;
      }
    }
    if (draggableElementRect.height === 120) {
      if (elementBelowCoordinates[0] > 8) {
        return false;
      }
    }
    if (draggableElementRect.height === 160) {
      if (elementBelowCoordinates[0] > 7) {
        return false;
      }
    }
    if (draggableElementRect.width === 80) {
      if (elementBelowCoordinates[1] > 9) {
        return false;
      }
    }
    if (draggableElementRect.width === 120) {
      if (elementBelowCoordinates[1] > 8) {
        return false;
      }
    }
    if (draggableElementRect.width === 160) {
      if (elementBelowCoordinates[1] > 7) {
        return false;
      }
    }
    return true;
  }

  // Update droppable attribute on board
  function updateDroppableAttribute() {
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    playerOneBoard.board.vertices.forEach((vertex) => {
      const div = DOMHandler.findDivByCoordinates(
        `${vertex.coordinates[0]},${vertex.coordinates[1]}`,
        parentDivBoardOne,
      );
      if (vertex.occupied === true) {
        div.setAttribute("droppable", false);
      }
      if (vertex.occupied === false) {
        div.setAttribute("droppable", true);
      }
    });
  }

  // The cells under the draggable element will be made undroppable when the mouse is up
  function makeUndroppable(cells) {
    const cellsVertices = [];
    // Set droppable attribute on the cells under draggable element
    cells.forEach((cell) => {
      if (cell) {
        cell.setAttribute("droppable", false);
        const className = cell.classList[0];
        const array = className.split(",").map(Number);
        const vertex = playerOneBoard.findVertextObjectByCoordinates(array);
        cellsVertices.push(vertex);
      }
    });

    // Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = true;
      cellVertex.occupied = true;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = true;
        const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        // In DOM
        div.setAttribute("droppable", false);
      });
    });
  }

  // Mouse down
  const onMouseDown = (event) => {
    const elementsFromPoint = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );

    elementsFromPoint.forEach((el) => {
      if (el.classList.contains("draggable")) {
        draggableElement = el;
        draggableElementRect = draggableElement.getBoundingClientRect();
      }
    });

    if (draggableElement) {
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

      // Change the droppable attribute of each cell under draggable element to true
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

      // console.log(cellsVerticesAdjacent);

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
    }
  };

  // Mouse move
  const onMouseMove = (event) => {
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
      if (draggableElement) {
        draggableElement.style.left = `${event.clientX - offSetX}px`;
        draggableElement.style.top = `${event.clientY - offSetY}px`;
      }
    }
  };

  // Mouse up
  const onMouseUp = (event) => {
    if (elementBelow === originalElementBelow) {
      if (draggableElement) {
        const width = `${draggableElementRect.height}px`;
        const height = `${draggableElementRect.width}px`;

        draggableElement.style.width = width;
        draggableElement.style.height = height;
        const ship = playerOneBoard.findShipById(draggableElement.id);
        if (height > width) {
          ship.position = "v";
        } else {
          ship.position = "h";
        }
        console.log(ship);
        console.log(elementBelow);
      }
    }

    if (isDragging) {
      isDragging = false;

      if (elementBelow) {
        if (!checkOtherShipOverlap(event)) {
          elementBelow.setAttribute("droppable", false);
        }
        if (!checkWithinBorders()) {
          elementBelow.setAttribute("droppable", false);
        }
      }

      makeUndroppable(identifyCellsToMakeDroppable());

      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      draggableElement.classList.remove("dragging");

      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
    }
    draggableElement = null;
    draggableElementRect = null;
    updateDroppableAttribute();
  };

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

export { addDocumentEventListeners };
