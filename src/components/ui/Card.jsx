const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-[var(--radius)]
        bg-[var(--panel)]
        border
        border-[var(--border)]
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;