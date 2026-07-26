import { useState } from "react";

import createBoard from "../utils/createBoard";
import placeMines from "../utils/placeMines";
import calculateMultiplier from "../utils/calculateMultiplier";

export default function useMinesGame() {
  const [board, setBoard] = useState(createBoard());

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Wallet
  const [balance, setBalance] = useState(10000);

  // Game Settings
  const [betAmount, setBetAmount] = useState(100);
  const [mineCount, setMineCount] = useState(5);

  // Game Stats
  const [gemsFound, setGemsFound] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const startGame = () => {
    if (betAmount <= 0) {
      alert("Bet amount must be greater than 0.");
      return;
    }

    if (mineCount < 1 || mineCount > 24) {
      alert("Mine count must be between 1 and 24.");
      return;
    }

    if (betAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const freshBoard = createBoard();
    const newBoard = placeMines(freshBoard, mineCount);

    setBoard(newBoard);
    setGameStarted(true);
    setGameOver(false);

    setGemsFound(0);
    setMultiplier(1);

    // Deduct bet
    setBalance((prev) => prev - betAmount);
  };

  const revealTile = (id) => {
    if (!gameStarted || gameOver) return;

    const clickedTile = board.find((tile) => tile.id === id);

    if (!clickedTile || clickedTile.revealed) return;

    // Mine clicked
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

    // Gem clicked
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

    const newGemCount = gemsFound + 1;

    setGemsFound(newGemCount);
    setMultiplier(calculateMultiplier(mineCount, newGemCount));
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

    setBalance((prev) => prev + payout);

    alert(`You cashed out!\n\nPayout: £${payout.toFixed(2)}`);

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

    balance,

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