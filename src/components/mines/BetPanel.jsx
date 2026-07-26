const BetPanel = ({
  balance,

  betAmount,
  setBetAmount,

  mineCount,
  setMineCount,

  gemsFound,
  multiplier,

  gameStarted,
  gameOver,

  onButtonClick,
}) => {
  return (
    <div className="w-80 bg-[#213743] rounded-xl p-5 flex flex-col gap-5 self-start">

      <div className="bg-[#0F212E] rounded-lg p-4">
        <p className="text-sm text-gray-400">Balance</p>
        <h2 className="text-2xl font-bold text-green-400">
          £{balance.toFixed(2)}
        </h2>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Bet Amount
        </label>

        <input
          type="number"
          value={betAmount}
          disabled={gameStarted && !gameOver}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          className="w-full bg-[#0F212E] rounded-lg px-4 py-3 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Mines
        </label>

        <input
          type="number"
          min="1"
          max="24"
          value={mineCount}
          disabled={gameStarted && !gameOver}
          onChange={(e) => setMineCount(Number(e.target.value))}
          className="w-full bg-[#0F212E] rounded-lg px-4 py-3 outline-none"
        />
      </div>

      <div className="bg-[#0F212E] rounded-lg p-4">
        <p>💎 Gems Found: {gemsFound}</p>
        <p className="mt-2">✖ Multiplier: {multiplier}x</p>
      </div>

      <button
        onClick={onButtonClick}
        className="bg-green-500 hover:bg-green-600 transition rounded-lg py-3 font-bold"
      >
        {!gameStarted
          ? "Bet"
          : gameOver
          ? "Play Again"
          : "Cash Out"}
      </button>

    </div>
  );
};

export default BetPanel;