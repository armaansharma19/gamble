const MineGrid = () => {
  return (
    <div className="flex-1 flex justify-center items-center">

      <div className="grid grid-cols-5 gap-5">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-[#2F4553] rounded-xl shadow-md hover:bg-[#3A5568] transition-all duration-200 cursor-pointer"
          />
        ))}
      </div>

    </div>
  );
};

export default MineGrid;