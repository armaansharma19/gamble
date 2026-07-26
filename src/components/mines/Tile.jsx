const Tile = ({ tile, onClick }) => {
  let bg = "bg-[#2F4553]";
  let content = "";

  if (tile.revealed) {
    if (tile.type === "gem") {
      bg = "bg-green-500";
      content = "💎";
    } else if (tile.type === "mine") {
      bg = "bg-red-500";
      content = "💣";
    }
  }

  return (
    <div
      onClick={onClick}
      className={`w-24 h-24 rounded-xl shadow-md flex items-center justify-center text-4xl cursor-pointer transition-all duration-200 hover:scale-105 ${bg}`}
    >
      {content}
    </div>
  );
};

export default Tile;