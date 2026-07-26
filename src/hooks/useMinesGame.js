import { useState } from "react";

import createBoard from "../utils/createBoard";
import placeMines from "../utils/placeMines";

export default function useMinesGame() {
  const [board, setBoard] = useState(createBoard());

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Game Settings
  const [betAmount, setBetAmount] = useState(100);
  const [mineCount, setMineCount] = useState(5);

  // Game Stats
  const [gemsFound, setGemsFound] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const startGame = () => {
    const freshBoard = createBoard();
    const newBoard = placeMines(freshBoard, mineCount);

    setBoard(newBoard);
    setGameStarted(true);
    setGameOver(false);

    setGemsFound(0);
    setMultiplier(1);
  };

  const revealTile = (id) => {
    if (!gameStarted || gameOver) return;

    const clickedTile = board.find((tile) => tile.id === id);

    if (!clickedTile || clickedTile.revealed) return;

    // Mine Clicked
    if (clickedTile.mine) {
      const revealedBoard = board.map((tile) => ({
        ...tile,
        revealed: true,
        type: tile.mine ? "mine" : "gem",
      }));

      setBoard(revealedBoard);
      setGameOver(true);
      return;
    }

    // Gem Clicked
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

    const newGems = gemsFound + 1;
    setGemsFound(newGems);

    setMultiplier(Number((1 + newGems * 0.2).toFixed(2)));
  };

  const cashOut = () => {
    if (!gameStarted || gameOver) return;

    const revealedBoard = board.map((tile) => ({
      ...tile,
      revealed: true,
      type: tile.mine ? "mine" : "gem",
    }));

    setBoard(revealedBoard);

    const payout = betAmount * multiplier;

    alert(`You cashed out!\n\nPayout: ₹${payout.toFixed(2)}`);

    setGameOver(true);
  };

  const resetGame = () => {
    setBoard(createBoard());
    setGameStarted(false);
    setGameOver(false);

    setGemsFound(0);
    setMultiplier(1);
  };

  return {
    board,

    gameStarted,
    gameOver,

    betAmount,
    setBetAmount,

    mineCount,
    setMineCount,

    gemsFound,
    multiplier,

    startGame,
    revealTile,
    cashOut,
    resetGame,
  };
}