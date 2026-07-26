const BetPanel = () => {
  return (
    <div className="w-[340px] bg-[#213743] rounded-xl p-5 h-fit">

      <div className="flex bg-[#1A2C38] rounded-xl p-1 mb-6">
        <button className="flex-1 py-2 rounded-lg bg-[#2F4553] font-semibold">
          Manual
        </button>

        <button className="flex-1 py-2 text-[#B1BAD3] hover:text-white transition">
          Auto
        </button>
      </div>

      <div className="space-y-5">

        <div>
          <label className="text-[#B1BAD3] text-sm">
            Bet Amount
          </label>

          <input
            type="number"
            placeholder="$0.00"
            className="mt-2 w-full bg-[#1A2C38] rounded-lg p-3 outline-none"
          />
        </div>

        <div>
          <label className="text-[#B1BAD3] text-sm">
            Mines
          </label>

          <select
            className="mt-2 w-full bg-[#1A2C38] rounded-lg p-3 outline-none"
          >
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        <button className="w-full bg-[#1475E1] hover:bg-[#1B82F1] py-3 rounded-lg font-semibold transition">
          Bet
        </button>

      </div>

    </div>
  );
};

export default BetPanel;