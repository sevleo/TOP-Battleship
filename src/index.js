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
draggableElement.style.background = "red";
console.log(draggableElement);

let isDragging = false;
let offSetX;
let offSetY;
let mouseDownOffsetHor = 0;
let mouseDownOffsetVer = 0;

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
        }
      }
    });
    draggableElement.style.left = `${event.clientX - offSetX}px`;
    draggableElement.style.top = `${event.clientY - offSetY}px`;
  }
});

document.addEventListener("mouseup", (event) => {
  isDragging = false;

  if (draggableElementRect.width > 40 || draggableElementRect.height > 40) {
    let elementsBelowTwo;

    if (draggableElementRect.width === 80) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 40,
        event.clientY - mouseDownOffsetVer,
      );
    } else if (draggableElementRect.width === 120) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 80,
        event.clientY - mouseDownOffsetVer,
      );
    } else if (draggableElementRect.width === 160) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor + 120,
        event.clientY - mouseDownOffsetVer,
      );
    } else if (draggableElementRect.height === 80) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 40,
      );
    } else if (draggableElementRect.height === 120) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 80,
      );
    } else if (draggableElementRect.height === 160) {
      elementsBelowTwo = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer + 120,
      );
    }

    elementsBelowTwo.forEach((element) => {
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
  if (elementBelow) {
    elementBelow.setAttribute("droppable", true);
  }
});
