import Tile from "./Tile";

const MineGrid = ({ board, onTileClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="grid grid-cols-5 gap-5">
        {board.map((tile) => (
          <Tile
            key={tile.id}
            tile={tile}
            onClick={() => onTileClick(tile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MineGrid;