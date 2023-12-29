/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import gameLoop, { playerOneBoard, playerTwoBoard } from ".";
import DOMHandler from "./DOMHandler";

function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    gameLoop();
  });

  const startButton = document.querySelector(".start-game");
  startButton.addEventListener("click", () => {
    console.log("start");
    console.log(playerOneBoard);
    console.log(playerTwoBoard);
    playerOneBoard.locked = true;
    const playerOneBoardDiv = document.querySelector(".playerOne-board");
    playerOneBoardDiv.classList.add("locked");
    const playerTwoBoardDiv = document.querySelector(".playerTwo-board");
    playerTwoBoardDiv.classList.remove("locked");
  });
  const playerTwoBoardDiv = document.querySelector(".playerTwo-board");
  const boardTwoCells = playerTwoBoardDiv.querySelectorAll(".cell");
  boardTwoCells.forEach((cellDiv) => {
    cellDiv.addEventListener("click", () => {
      if (!playerTwoBoardDiv.classList.contains("locked")) {
        const attackCoordinates = cellDiv.classList[0].split(",").map(Number);
        const makeHit = playerTwoBoard.receiveAttack(
          attackCoordinates,
          playerTwoBoardDiv,
        );
        // console.log(attackCoordinates);
        if (makeHit) {
          cellDiv.classList.add("hit");
        } else {
          playerTwoBoard.board.vertices.forEach((vertex) => {
            if (vertex.missShot) {
              const missedCellDiv = DOMHandler.findDivByCoordinates(
                `${vertex.coordinates[0]},${vertex.coordinates[1]}`,
                playerTwoBoardDiv,
              );
              missedCellDiv.classList.add("miss");
            }
            if (vertex.missShotNeighbor) {
              const missedCellDiv = DOMHandler.findDivByCoordinates(
                `${vertex.coordinates[0]},${vertex.coordinates[1]}`,
                playerTwoBoardDiv,
              );
              missedCellDiv.classList.add("miss-neigbour");
            }
          });
        }
      }
    });
  });
}

export default addEventListeners;

function throttle(func, delay) {
  let waiting = false;
  return function () {
    if (!waiting) {
      func.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
}

function addDocumentEventListeners() {
  let draggableElement = null;
  let draggableElementRect = null;
  let lastDraggableElement = null;

  let isDragging = false;
  let movedBy = 0;
  let offSetX;
  let offSetY;
  let mouseDownOffsetHor = 0;
  let mouseDownOffsetVer = 0;
  let originalElementBelow = null;
  let elementBelow = null;
  let previousElementBelow = null;

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
  function identifyCellsToMakeDroppable(event) {
    const shipObject = playerOneBoard.findShipById(draggableElement.id);
    if (event.type === "mouseup") {
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

    if (event.type === "mousedown") {
      return findShipCells(
        draggableElement.parentElement,
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

      if (lastShipElement) {
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
    }
    return noOverlap;
  }

  // Checks if the element is getting dropped within the borders of the board
  function checkWithinBorders(event) {
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
    const outOfBoardElements = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );
    let cellElement = null;
    outOfBoardElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        // console.log(element);
        cellElement = element;
      }
    });

    if (cellElement === null) {
      return false;
    }
    return true;
  }

  // Update droppable attribute on board for each cell based on occupied value in the graph
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

  // The cells under the draggable element will be made droppable when the mouse is down
  function makeDroppable(cells) {
    const cellsVertices = [];

    // Set droppable attribute on the cells under draggable element to true
    cells.forEach((cell) => {
      cell.setAttribute("droppable", true);
      const className = cell.classList[0];
      const array = className.split(",").map(Number);
      const vertex = playerOneBoard.findVertextObjectByCoordinates(array);
      cellsVertices.push(vertex);
    });

    /// Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = false;
      cellVertex.occupied = false;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = false;
        adjacency.adjacencyList.forEach((adj) => {
          if (adj.occupiedByShip) {
            adjacency.occupied = true;
          }
        });
        if (adjacency.occupied === false) {
          const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
          const parentDiv = document.querySelector(".playerOne-board");
          const div = parentDiv.querySelector(`[class*="${className}"].cell`);
          div.setAttribute("droppable", true);
        }
      });
    });
  }

  // The cells under the draggable element will be made undroppable when the mouse is up
  function makeUndroppable(cells) {
    const cellsVertices = [];
    // Set droppable attribute on the cells under draggable element to false
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
    if (playerOneBoard.locked === false) {
      const elementsFromPoint = document.elementsFromPoint(
        event.clientX,
        event.clientY,
      );

      elementsFromPoint.forEach((element) => {
        if (element.classList.contains("draggable")) {
          draggableElement = element;
          draggableElementRect = draggableElement.getBoundingClientRect();
          lastDraggableElement = element;
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

        const cells = identifyCellsToMakeDroppable(event);
        makeDroppable(cells);

        const parentRect =
          draggableElement.parentElement.getBoundingClientRect();

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
              previousElementBelow = null;
            }
          }
        });
      }
    }
  };

  // Mouse move
  const onMouseMove = (event) => {
    if (playerOneBoard.locked === false) {
      if (isDragging) {
        const elementsFromPoint = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer,
        );
        elementsFromPoint.forEach((element) => {
          if (
            element.classList.contains("cell") &&
            element.getAttribute("droppable")
          ) {
            previousElementBelow = elementBelow;
            if (previousElementBelow.classList.contains("temp")) {
              previousElementBelow.setAttribute("droppable", true);
              draggableElement.classList.remove("undroppable");
              previousElementBelow.classList.remove("temp");
            }
            elementBelow = element;
          }
        });

        if (!checkOtherShipOverlap(event) || !checkWithinBorders(event)) {
          elementBelow.setAttribute("droppable", false);
          elementBelow.classList.add("temp");
        }

        if (elementBelow.getAttribute("droppable") === "false") {
          draggableElement.classList.add("undroppable");
          draggableElement.classList.remove("droppable");
        } else {
          draggableElement.classList.add("droppable");
          draggableElement.classList.remove("undroppable");
        }

        if (draggableElement) {
          draggableElement.style.left = `${event.clientX - offSetX}px`;
          draggableElement.style.top = `${event.clientY - offSetY}px`;
          movedBy = event.clientX - offSetX + (event.clientY - offSetY);
        }
      }
    }
  };

  // Mouse up
  const onMouseUp = (event) => {
    if (playerOneBoard.locked === false) {
      const ship = draggableElement
        ? playerOneBoard.findShipById(draggableElement.id)
        : null;

      // Handle click to change orientation
      if (movedBy === 0) {
        if (draggableElement) {
          const width = `${draggableElementRect.height}px`;
          const height = `${draggableElementRect.width}px`;

          draggableElement.style.width = width;
          draggableElement.style.height = height;

          draggableElementRect = draggableElement.getBoundingClientRect();

          if (!checkOtherShipOverlap(event) || !checkWithinBorders(event)) {
            draggableElement.style.width = height;
            draggableElement.style.height = width;
            draggableElement.classList.add("animating");
            draggableElement.animate(
              [
                { transform: "translateX(0px)" },
                { transform: "translateX(10px)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(0px)" },
                { transform: "translateX(10px)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(0px)" },
              ],
              {
                duration: 300,
                easing: "ease-in-out",
              },
            );
            setTimeout(() => {
              lastDraggableElement.classList.remove("animating");
            }, 300);
          } else if (draggableElementRect.width > draggableElementRect.height) {
            ship.position = "h";
          } else {
            ship.position = "v";
          }
        }
      }

      // Handle dragging to change position of the ship
      if (isDragging) {
        draggableElement.classList.remove("droppable");
        draggableElement.classList.remove("undroppable");
        if (elementBelow) {
          if (!checkOtherShipOverlap(event)) {
            elementBelow.setAttribute("droppable", false);
          }
          if (!checkWithinBorders(event)) {
            elementBelow.setAttribute("droppable", false);
          }
        }

        const cells = identifyCellsToMakeDroppable(event);
        makeUndroppable(cells);

        const newShipCoordinates = [];
        cells.forEach((cell) => {
          newShipCoordinates.push(
            Array.from(cell.classList[0].split(",").map(Number)),
          );
        });
        ship.assignCoordinates(newShipCoordinates);

        isDragging = false;
        movedBy = 0;
        draggableElement.style.left = 0;
        draggableElement.style.top = 0;
        draggableElement.style.zIndex = 5;
        offSetX = null;
        offSetY = null;
        mouseDownOffsetHor = 0;
        mouseDownOffsetVer = 0;
        draggableElement.classList.remove("dragging");
      }
      draggableElement = null;
      draggableElementRect = null;
      updateDroppableAttribute();
    }
  };

  const throttledMouseDown = throttle(onMouseDown, 200);

  document.addEventListener("mousedown", throttledMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

export { addDocumentEventListeners };
