import "./styles.css";
import gameLoop from "./gameHandler";

gameLoop();

// const draggableElements = document.getElementsByClassName("draggable");
// const draggableElementsArray = Array.from(draggableElements);

// draggableElementsArray.forEach((draggable) => {
//   console.log(draggable);
//   draggable.addEventListener("dragstart", (event) => {
//     console.log("test");
//     console.log(event);
//   });

//   draggable.addEventListener("dragend", (event) => {
//     console.log(event);
//   });
// });

// const droppableElements = document.querySelectorAll("[droppable]");

// droppableElements.forEach((droppable) => {
//   droppable.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   droppable.addEventListener("drop", (event) => {
//     event.preventDefault();
//   });
// });

const draggableElements = document.getElementsByClassName("draggable");
const draggableElement = draggableElements[0];
draggableElement.style.background = "red";
console.log(draggableElement);

let isDragging = false;
let offSetX;
let offSetY;
const mouseDownOffset = 0;

draggableElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  draggableElement.style.left = 0;
  draggableElement.style.top = 0;
  draggableElement.style.zIndex = 0;
  offSetX = event.clientX;
  offSetY = event.clientY;

  const parentRect = draggableElement.parentElement.getBoundingClientRect();
  console.log(parentRect);

  console.log(offSetX);
  console.log(offSetY);

  console.log(draggableElement.style.width);
  console.log(draggableElement.style.height);
});

let elementBelow = null;

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    console.log(draggableElement);
    const draggingElement = event.target;

    const elementsBelow = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );

    elementsBelow.forEach((element) => {
      if (element.classList.contains("cell")) {
        elementBelow = element;
      }
    });
    draggableElement.style.left = `${event.clientX - offSetX}px`;
    draggableElement.style.top = `${event.clientY - offSetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;

  if (elementBelow) {
    elementBelow.append(draggableElement);
  }

  draggableElement.style.left = 0;
  draggableElement.style.top = 0;
  draggableElement.style.zIndex = 5;

  offSetX = null;
  offSetY = null;
});

// document.addEventListener("mousemove", (event) => {
//   let elementBelow = document.elementFromPoint(event.clientX, event.clientY);

//   if (elementBelow.classList.contains("ship")) {
//     elementBelow = elementBelow.parentElement;
//   }

//   if (elementBelow) {
//     // Perform actions or checks with the elementBelow
//     console.log("Element below:", elementBelow);
//   }
//   // event.preventDefault();
//   draggableElement.style.left = `${event.clientX - offSetX}px`;
//   draggableElement.style.top = `${event.clientY - offSetY}px`;
// });
