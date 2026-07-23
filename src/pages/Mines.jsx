import { useState } from "react";

import MineGrid from "../components/mines/MineGrid";

import createBoard from "../utils/createBoard";
import placeMines from "../utils/placeMines";

const Mines = () => {
  const [board, setBoard] = useState(createBoard());

  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    const newBoard = placeMines(board, 5);

    setBoard(newBoard);

    setGameStarted(true);

    console.log(newBoard);
  };

  const handleTileClick = (id) => {
  if (!gameStarted) return;

  setBoard((prevBoard) =>
    prevBoard.map((tile) => {
      if (tile.id !== id) return tile;

      return {
        ...tile,
        revealed: true,
        type: tile.mine ? "mine" : "gem",
      };
    })
  );
};

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center gap-8">

      <button
        onClick={startGame}
        className="bg-blue-500 px-8 py-3 rounded-xl font-bold"
      >
        Bet
      </button>

      <MineGrid
        board={board}
        onTileClick={handleTileClick}
      />

    </div>
  );
};

export default Mines;