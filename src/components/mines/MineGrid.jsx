import Tile from "./Tile";

const MineGrid = ({ board, onTileClick }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {board.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          onClick={() => onTileClick(tile.id)}
        />
      ))}
    </div>
  );
};

export default MineGrid;