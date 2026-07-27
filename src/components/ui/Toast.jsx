const Toast = ({ message, type, visible }) => {
  if (!visible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "error"
      ? "bg-red-600"
      : "bg-blue-600";

  return (
    <div className="fixed top-6 right-6 z-50 animate-pulse">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl min-w-[280px]`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;