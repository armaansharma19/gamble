import { useState } from "react";

import createBoard from "../utils/createBoard";
import placeMines from "../utils/placeMines";
import calculateMultiplier from "../utils/calculateMultiplier";

const TOTAL_TILES = 25;

export default function useMinesGame() {
  const [board, setBoard] = useState(createBoard());

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [balance, setBalance] = useState(10000);

  const [betAmount, setBetAmount] = useState(100);
  const [mineCount, setMineCount] = useState(5);

  const [gemsFound, setGemsFound] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const [gameResult, setGameResult] = useState(null);

  const revealAll = (tiles) =>
    tiles.map((tile) => ({
      ...tile,
      revealed: true,
      type: tile.mine ? "mine" : "gem",
    }));

  const startGame = () => {
    if (betAmount <= 0 || betAmount > balance) return;
    if (mineCount < 1 || mineCount > 24) return;

    const freshBoard = placeMines(createBoard(), mineCount);

    setBoard(freshBoard);

    setGameStarted(true);
    setGameOver(false);

    setGemsFound(0);
    setMultiplier(1);

    setGameResult(null);

    setBalance((prev) => prev - betAmount);
  };

  const revealTile = (id) => {
    if (!gameStarted || gameOver) return;

    const clicked = board.find((t) => t.id === id);

    if (!clicked || clicked.revealed) return;

    if (clicked.mine) {
      const revealed = revealAll(board);

      setBoard(revealed);

      setGameOver(true);

      setGameResult({
        type: "loss",
        payout: 0,
        profit: -betAmount,
        multiplier: 0,
        bet: betAmount,
        gemsFound,
      });

      return;
    }

    const updated = board.map((tile) =>
      tile.id === id
        ? {
            ...tile,
            revealed: true,
            type: "gem",
          }
        : tile
    );

    setBoard(updated);

    const gems = gemsFound + 1;

    setGemsFound(gems);

    const multi = calculateMultiplier(mineCount, gems);

    setMultiplier(multi);

    const safeTiles = TOTAL_TILES - mineCount;

    if (gems === safeTiles) {
      const payout = betAmount * multi;

      setBoard(revealAll(updated));

      setBalance((prev) => prev + payout);

      setGameOver(true);

      setGameResult({
        type: "win",
        payout,
        profit: payout - betAmount,
        multiplier: multi,
        bet: betAmount,
        gemsFound: gems,
      });
    }
  };

  const cashOut = () => {
  if (!gameStarted || gameOver) return;

  // Player must reveal at least one gem before cashing out
  if (gemsFound === 0) return;

  const payout = betAmount * multiplier;

  setBoard(revealAll(board));

  setBalance((prev) => prev + payout);

  setGameOver(true);

  setGameResult({
    type: "cashout",
    payout,
    profit: payout - betAmount,
    multiplier,
    bet: betAmount,
    gemsFound,
  });
};

  const resetGame = () => {
    setBoard(createBoard());

    setGameStarted(false);
    setGameOver(false);

    setMultiplier(1);
    setGemsFound(0);

    setGameResult(null);
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

    gameResult,

    startGame,
    revealTile,
    cashOut,
    resetGame,
  };
}