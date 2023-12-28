# Battleship

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [How to Play](#how-to-play)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Demo

## Features

## How To Play

## Known Issues

### Issue 1

Description: in very rare cases, when beginning to drag a ship and then dropping it somewhere else (and doing it quickly), some of the cells on which the ship was positioned originally keep their droppable attribute set to true. The graph also shows that those cells are occupied, although they are not, and that the center cell on which the user clicked to drag the ship is occupiedByShip, which it is not.

Cause: root cause is unclear, but it is likely due to js not being able to iterate through all elements in time before changing the attribute and updating the graph.

Possible solutions:
a. refactor the code
b. patch the problem by updating the graph at the mouseup event based on actual positions of the draggable ship elements, and only then update the nodes based on the updated graph
c. do the same as B but at the end of the mousedown event.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Create a pull request.

## License

This project is licensed under the [MIT LICENSE](./LICENSE)
