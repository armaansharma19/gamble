const createBoard = () => {
  return Array.from({ length: 25 }, (_, index) => ({
    id: index,
    mine: false,
    revealed: false,
    type: "hidden",
  }));
};

export default createBoard;