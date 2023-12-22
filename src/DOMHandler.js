const DOMHandler = (() => {
  const body = document.querySelector("body");

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
              ],
            },
          ],
        },
      ],
    },
  ];

  function createDom(parent, tree) {
    tree.forEach((element) => {
      const newElement = document.createElement(element.type);
      if (element.class) {
        newElement.classList.add(element.class);
      }
      parent.append(newElement);
      if (element.childrenElements) {
        createDom(newElement, element.childrenElements);
      }
    });
  }

  createDom(body, staticLayoutElements);

  return {
    createDom,
  };
})();

export default DOMHandler;
