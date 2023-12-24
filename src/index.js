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

draggableElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  draggableElement.style.left = 0;
  draggableElement.style.top = 0;
  draggableElement.style.zIndex = 0;
  offSetX = event.clientX;
  offSetY = event.clientY;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const draggingElement = event.target;

    const elementsBelow = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );
    let elementBelow = null;
    elementsBelow.forEach((element) => {
      if (element.classList.contains("cell")) {
        elementBelow = element;
      }
    });

    if (elementBelow) {
      // Perform actions or checks with the elementBelow
      console.log("Element below:", elementBelow);
    }
    // event.preventDefault();
    draggableElement.style.left = `${event.clientX - offSetX}px`;
    draggableElement.style.top = `${event.clientY - offSetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  draggableElement.style.left = 0;
  draggableElement.style.top = 0;
  isDragging = false;
  draggableElement.style.zIndex = 5;
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
