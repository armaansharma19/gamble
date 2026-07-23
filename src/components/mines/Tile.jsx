import clsx from "clsx";

const Tile = ({ tile, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={tile.revealed}
      className={clsx(
        "w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-md",
        "active:scale-95",

        !tile.revealed &&
          "bg-[var(--card)] hover:bg-[var(--card-hover)] hover:-translate-y-1",

        tile.revealed &&
          tile.type === "gem" &&
          "bg-emerald-500",

        tile.revealed &&
          tile.type === "mine" &&
          "bg-red-500"
      )}
    >
      {tile.revealed && tile.type === "gem" && (
        <span className="text-4xl">💎</span>
      )}

      {tile.revealed && tile.type === "mine" && (
        <span className="text-4xl">💣</span>
      )}
    </button>
  );
};

export default Tile;