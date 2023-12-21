const PlayerModule = (() => {
  const playerOne = {
    type: "player",
  };

  const playerTwo = {
    type: "computer",
  };

  // eslint-disable-next-line prefer-const
  let currentTurn = playerOne;

  function switchTurn() {
    if (currentTurn === playerOne) {
      currentTurn = playerTwo;
    } else {
      currentTurn = playerOne;
    }
  }

  function makeRandomMove() {
    return Math.floor(Math.random() * 100);
  }

  return {
    playerOne,
    playerTwo,
    currentTurn,
    switchTurn,
    makeRandomMove,
  };
})();

export default PlayerModule;
