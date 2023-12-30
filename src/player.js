function Player(b, t) {
  const player = {
    type: t,
    board: b,
  };

  function makeRandomMove() {
    const randomValueCoordinates =
      player.board.board.vertices[Math.floor(Math.random() * 100)].coordinates;

    if (player.board.shots.length === 100) {
      return null;
    }

    if (!player.board.shots.includes(randomValueCoordinates)) {
      return randomValueCoordinates;
    }
    return makeRandomMove();
  }

  return {
    player,
    makeRandomMove,
  };
}

export default Player;
