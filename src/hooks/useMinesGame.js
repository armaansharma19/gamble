import { useState } from "react";

import createBoard from "../utils/createBoard";
import placeMines from "../utils/placeMines";

export default function useMinesGame() {
  const [board, setBoard] = useState(createBoard());

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    const freshBoard = createBoard();
    const newBoard = placeMines(freshBoard, 5);
    console.log("Game Started");
    setBoard(newBoard);
    setGameStarted(true);
    setGameOver(false);
  };

  const revealTile = (id) => {
    if (!gameStarted || gameOver) return;
    console.log("Clicked:", id);
    const clickedTile = board.find((tile) => tile.id === id);

    if (!clickedTile || clickedTile.revealed) return;

    if (clickedTile.mine) {
      const revealedBoard = board.map((tile) => ({
        ...tile,
        revealed: tile.mine ? true : tile.revealed,
        type: tile.mine ? "mine" : tile.type,
      }));

      setBoard(revealedBoard);
      setGameOver(true);
      return;
    }

    const updatedBoard = board.map((tile) =>
      tile.id === id
        ? {
            ...tile,
            revealed: true,
            type: "gem",
          }
        : tile
    );

    setBoard(updatedBoard);
  };

  const resetGame = () => {
    setBoard(createBoard());
    setGameStarted(false);
    setGameOver(false);
  };

  return {
    board,
    gameStarted,
    gameOver,
    startGame,
    revealTile,
    resetGame,
  };
}