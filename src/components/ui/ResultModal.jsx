const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const isLoss = result.type === "loss";
  const isCashout = result.type === "cashout";
  const isWin = result.type === "win";

  let title = "";
  let icon = "";
  let amount = "";

  if (isLoss) {
    title = "BUSTED";
    icon = "💣";
    amount = `-£${Math.abs(result.bet).toFixed(2)}`;
  }

  if (isCashout) {
    title = "CASHED OUT";
    icon = "💰";
    amount = `£${result.payout.toFixed(2)}`;
  }

  if (isWin) {
    title = "PERFECT RUN";
    icon = "💎";
    amount = `£${result.payout.toFixed(2)}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[440px] rounded-2xl bg-[#213743] shadow-2xl border border-[#35505f] overflow-hidden animate-[fadeIn_.25s_ease]">

        <div className="p-8 text-center">

          <div className="text-7xl mb-4">
            {icon}
          </div>

          <h2 className="text-4xl font-bold text-white mb-3">
            {title}
          </h2>

          <p className="text-5xl font-extrabold text-green-400 mb-8">
            {amount}
          </p>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span className="text-gray-400">
                Bet
              </span>

              <span className="text-white font-semibold">
                £{result.bet.toFixed(2)}
              </span>
            </div>

            {!isLoss && (
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Profit
                </span>

                <span className="text-green-400 font-semibold">
                  +£{result.profit.toFixed(2)}
                </span>
              </div>
            )}

            <div className="flex justify-between">
              <span className="text-gray-400">
                Multiplier
              </span>

              <span className="text-white font-semibold">
                {result.multiplier.toFixed(2)}x
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Gems Found
              </span>

              <span className="text-white font-semibold">
                {result.gemsFound}
              </span>
            </div>

          </div>

          <button
            onClick={onClose}
            className="mt-10 w-full rounded-xl bg-green-600 hover:bg-green-500 transition-all py-4 text-xl font-bold"
          >
            PLAY AGAIN
          </button>

        </div>

      </div>
    </div>
  );
};

export default ResultModal;