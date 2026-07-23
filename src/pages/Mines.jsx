import { useState } from "react";

import MineGrid from "../components/mines/MineGrid";
import createBoard from "../utils/createBoard";

const Mines = () => {
  const [board, setBoard] = useState(createBoard());

  const handleTileClick = (id) => {
    setBoard((prev) =>
      prev.map((tile) =>
        tile.id === id
          ? {
              ...tile,
              revealed: true,
              type: "gem",
            }
          : tile
      )
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
      <MineGrid
        board={board}
        onTileClick={handleTileClick}
      />
    </div>
  );
};

export default Mines;