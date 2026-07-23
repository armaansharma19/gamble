const GameLayout = ({ left, right }) => {
  return (
    <div className="flex flex-1 overflow-hidden">

      {/* Left Panel */}
      <div className="w-[360px] p-6">
        {left}
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex justify-center items-center p-8">
        {right}
      </div>

    </div>
  );
};

export default GameLayout;