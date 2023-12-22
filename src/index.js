import "./styles.css";
import gameLoop from "./gameHandler";

gameLoop();

const draggableElement = document.getElementsByClassName("draggable");

console.log(draggableElement);

const droppableElement = document.querySelectorAll("[droppable]");

console.log(droppableElement);

// // Event listeners for drag events
// draggableElement.addEventListener("dragstart", (event) => {
//   // Set the dragged element's data
//   event.dataTransfer.setData("text/plain", draggableElement.id);
// });

// droppableElement.addEventListener("dragover", (event) => {
//   // Prevent default to enable drop
//   event.preventDefault();
// });

// droppableElement.addEventListener("drop", (event) => {
//   // Prevent default to avoid browser handling the data
//   event.preventDefault();

//   // Get the dragged element's ID
//   const data = event.dataTransfer.getData("text/plain");

//   // Append the dragged element to the drop zone
//   const draggedElement = document.getElementById(data);
//   droppableElement.appendChild(draggedElement);
// });
