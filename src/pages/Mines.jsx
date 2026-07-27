import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import GameLayout from "../components/Layout/GameLayout";

import BetPanel from "../components/mines/BetPanel";
import MineGrid from "../components/mines/MineGrid";

import ResultModal from "../components/ui/ResultModal";

import useMinesGame from "../hooks/useMinesGame";

const Mines = () => {
  const {
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
  } = useMinesGame();

  const handleButtonClick = () => {
    if (!gameStarted) {
      startGame();
    } else if (gameOver) {
      resetGame();
    } else {
      cashOut();
    }
  };

  return (
    <div className="h-screen bg-[#1A2C38] flex flex-col text-white">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <GameLayout
          left={
            <BetPanel
              balance={balance}
              betAmount={betAmount}
              setBetAmount={setBetAmount}
              mineCount={mineCount}
              setMineCount={setMineCount}
              gemsFound={gemsFound}
              multiplier={multiplier}
              gameStarted={gameStarted}
              gameOver={gameOver}
              onButtonClick={handleButtonClick}
            />
          }
          right={
            <MineGrid
              board={board}
              onTileClick={revealTile}
            />
          }
        />

      </div>

      <ResultModal
        result={gameResult}
        onClose={resetGame}
      />

    </div>
  );
};

export default Mines;