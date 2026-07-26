import MineGrid from "../components/mines/MineGrid";
import useMinesGame from "../hooks/useMinesGame";

const Mines = () => {
  const {
    board,
    gameStarted,
    gameOver,
    startGame,
    revealTile,
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
    <div className="min-h-screen bg-[#1A2C38] flex flex-col items-center justify-center gap-8">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-bold text-white"
      >
        {!gameStarted
          ? "Bet"
          : gameOver
          ? "Play Again"
          : "Cash Out"}
      </button>

      <MineGrid
        board={board}
        onTileClick={revealTile}
      />

      {gameOver && (
        <h2 className="text-red-500 text-2xl font-bold">
          💣 Game Over
        </h2>
      )}
    </div>
  );
};

export default Mines;