const placeMines = (board, mineCount) => {
  // Reset board
  const newBoard = board.map((tile) => ({
    ...tile,
    mine: false,
    revealed: false,
    type: "hidden",
  }));

  let placed = 0;

  while (placed < mineCount) {
    const randomIndex = Math.floor(Math.random() * newBoard.length);

    if (!newBoard[randomIndex].mine) {
      newBoard[randomIndex].mine = true;
      placed++;
    }
  }

  return newBoard;
};

export default placeMines;
