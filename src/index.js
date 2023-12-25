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
// draggableElement.style.background = "red";
console.log(draggableElement);

let isDragging = false;
let offSetX;
let offSetY;
let mouseDownOffsetHor = 0;
let mouseDownOffsetVer = 0;

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
});

let elementBelow = null;

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
});

// Mouse up
document.addEventListener("mouseup", (event) => {
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
            }
          }
        });
      }
    });
  }

  if (elementBelow) {
    if (elementBelow.getAttribute("droppable") === "true") {
      elementBelow.append(draggableElement);

      const cells = [];
      const cellsVertices = [];
      const firstCell = elementBelow;
      let secondCell;
      let thirdCell;
      let fourthCell;

      cells.push(firstCell);

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

      cells.forEach((cell) => {
        cell.setAttribute("droppable", false);
        console.log(cell);
        const className = cell.classList[0];
        const array = className.split(",").map(Number);
        const vertex = playerOneBoard.findVertextObjectByCoordinates(array);
        cellsVertices.push(vertex);
      });
      cellsVertices.forEach((cellVertex) => {
        cellVertex.occupiedByShip = true;
        cellVertex.occupied = true;
        cellVertex.adjacencyList.forEach((adjacency) => {
          adjacency.occupied = true;
        });
      });
      console.log(cellsVertices);
      appended = true;
    }
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
});
