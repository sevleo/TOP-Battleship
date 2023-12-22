// eslint-disable-next-line import/no-cycle
import addEventListeners from "./eventManager";

/* eslint-disable prefer-const */
const DOMHandler = (() => {
  const body = document.querySelector("body");
  let playerOneBoard = null;
  let playerTwoBoard = null;
  let playerOneShips = null;
  let playerTwoShips = null;

  const staticLayoutElements = [
    {
      type: "div",
      class: "main",
      childrenElements: [
        {
          type: "div",
          class: "header",
        },
        {
          type: "div",
          class: "content",
          childrenElements: [
            {
              type: "div",
              class: "commands",
              childrenElements: [
                {
                  type: "div",
                  class: "randomize",
                  textContent: "randomize",
                },
                {
                  type: "div",
                  class: "start-game",
                  textContent: "start",
                },
              ],
            },
            {
              type: "div",
              class: "boards",
              childrenElements: [
                {
                  type: "div",
                  class: "playerOne-board",
                },
                {
                  type: "div",
                  class: "playerTwo-board",
                },
                {
                  type: "div",
                  class: "player-one-board-name",
                  textContent: "Your board",
                },
                {
                  type: "div",
                  class: "player-two-board-name",
                  textContent: "Opponent's board",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function createPageLayout(parent, tree) {
    tree.forEach((element) => {
      const newElement = document.createElement(element.type);
      if (element.class) {
        newElement.classList.add(element.class);
      }
      if (element.textContent) {
        newElement.textContent = element.textContent;
      }
      parent.append(newElement);
      if (element.childrenElements) {
        createPageLayout(newElement, element.childrenElements);
      }
    });
  }

  function createBoardCells() {
    const playerOneBoardDiv = document.querySelector(".playerOne-board");
    const playerTwoBoardDiv = document.querySelector(".playerTwo-board");

    DOMHandler.playerOneBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      newCell.setAttribute("droppable", true);

      playerOneBoardDiv.append(newCell);

      // eslint-disable-next-line no-lone-blocks
      {
        if (newCell.classList[0] === "1,1") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "A";
          newCell.append(markCol);
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "1";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "1,2") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "B";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,3") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "C";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,4") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "D";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,5") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "E";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,6") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "F";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,7") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "G";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,8") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "H";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,9") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "I";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,10") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "J";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "2,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "2";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "3,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "3";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "4,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "4";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "5,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "5";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "6,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "6";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "7,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "7";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "8,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "8";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "2,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "2";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "9,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "9";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "10,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "10";
          newCell.append(markRow);
        }
      }
    });

    DOMHandler.playerTwoBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      playerTwoBoardDiv.append(newCell);
      if (newCell.classList[0] === "1,1") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "A";
        newCell.append(markCol);
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "1";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "1,2") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "B";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,3") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "C";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,4") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "D";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,5") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "E";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,6") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "F";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,7") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "G";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,8") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "H";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,9") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "I";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,10") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "J";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "3,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "3";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "4,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "4";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "5,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "5";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "6,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "6";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "7,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "7";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "8,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "8";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "9,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "9";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "10,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "10";
        newCell.append(markRow);
      }
    });
  }

  function drawShips() {
    DOMHandler.playerOneShips.forEach((ship) => {
      const firstCellClassName = `${ship.coordinates[0][0]},${ship.coordinates[0][1]}`;
      const parentDiv = document.querySelector(".playerOne-board");
      const div = parentDiv.querySelector(`[class="${firstCellClassName}"]`);
      const shipDiv = document.createElement("div");
      shipDiv.classList.add("ship");
      shipDiv.classList.add("draggable");
      // shipDiv.setAttribute("draggable", true);

      if (ship.position === "h") {
        const width = 40 * ship.length;
        shipDiv.style.width = `${width}px`;
        shipDiv.style.height = "40px";
      }
      if (ship.position === "v") {
        const height = 40 * ship.length;
        shipDiv.style.height = `${height}px`;
        shipDiv.style.width = "40px";
      }
      div.append(shipDiv);

      ship.coordinates.forEach((c) => {
        const className = `${c[0]},${c[1]}`;
        const shipCells = Array.from(
          parentDiv.getElementsByTagName("div"),
        ).filter((elem) => elem.classList.contains(className));
        shipCells.forEach((element) => {
          element.classList.add("ship-cell");
          // element.setAttribute("droppable", false);
        });
      });
    });

    DOMHandler.playerTwoShips.forEach((ship) => {
      ship.coordinates.forEach((c) => {
        const className = `${c[0]},${c[1]}`;
        const parentDiv = document.querySelector(".playerTwo-board");
        const div = parentDiv.querySelector(`[class="${className}"]`);
        div.classList.add("ship");
      });
    });
  }

  function createDom() {
    createPageLayout(body, staticLayoutElements);
    createBoardCells();
    drawShips();
    addEventListeners();
  }

  return {
    playerOneBoard,
    playerTwoBoard,
    playerOneShips,
    playerTwoShips,
    createDom,
  };
})();

export default DOMHandler;
