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

      <div className="bg-[#0F212E] rounded-lg p-4 space-y-4">

  <div>
    <p className="text-sm text-gray-400">
      Current Payout
    </p>

    <h2 className="text-3xl font-bold text-green-400 mt-1">
      £{(betAmount * multiplier).toFixed(2)}
    </h2>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">
      Gems Found
    </span>

    <span className="font-semibold">
      {gemsFound}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">
      Multiplier
    </span>

    <span className="font-semibold">
      {multiplier.toFixed(2)}x
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">
      Profit
    </span>

    <span className="font-semibold text-green-400">
      +£{(betAmount * multiplier - betAmount).toFixed(2)}
    </span>
  </div>

</div>

     <button
  onClick={onButtonClick}
  disabled={gameStarted && !gameOver && gemsFound === 0}
  className={`w-full mt-6 py-3 rounded-lg text-lg font-bold transition-all ${
    gameStarted && !gameOver && gemsFound === 0
      ? "bg-gray-600 cursor-not-allowed text-gray-300"
      : gameStarted
      ? gameOver
        ? "bg-green-600 hover:bg-green-500"
        : "bg-yellow-500 hover:bg-yellow-400 text-black"
      : "bg-green-600 hover:bg-green-500"
  }`}
>
  {!gameStarted
    ? "Bet"
    : gameOver
    ? "Play Again"
    : gemsFound === 0
    ? "Pick a Tile"
    : "Cash Out"}
</button>

    </div>
  );
};

export default BetPanel;