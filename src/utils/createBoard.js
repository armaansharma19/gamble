const createBoard = () => {
  return Array.from({ length: 25 }, (_, index) => ({
    id: index,
    revealed: false,
    type: "hidden",
  }));
};

export default createBoard;