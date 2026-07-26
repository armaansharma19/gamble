import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import GameLayout from "../components/Layout/GameLayout";

import BetPanel from "../components/mines/BetPanel";
import MineGrid from "../components/mines/MineGrid";

import useMinesGame from "../hooks/useMinesGame";

const Mines = () => {
 const {
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
} = useMinesGame();

  const handleButtonClick = () => {
    if (!gameStarted) {
      startGame();
    } else if (gameOver) {
      resetGame();
    } else {
      alert("Cash Out coming soon!");
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
    </div>
  );
};

export default Mines;