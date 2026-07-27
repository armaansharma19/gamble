const Tile = ({ tile, onClick }) => {
  const handleClick = () => {
    if (!tile.revealed) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={tile.revealed}
      className={`
        w-28 h-28 rounded-xl
        flex items-center justify-center
        text-3xl font-bold
        transition-all duration-300
        select-none

        ${
          tile.revealed
            ? tile.mine
              ? "bg-red-600"
              : "bg-green-600"
            : "bg-[#2F4553] hover:bg-[#3A5565] hover:-translate-y-1 active:scale-95"
        }
      `}
    >
      {tile.revealed && (tile.mine ? "💣" : "💎")}
    </button>
  );
};

export default Tile;