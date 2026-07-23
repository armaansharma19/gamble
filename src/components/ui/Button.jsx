const variants = {
  primary:
    "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white",

  secondary:
    "bg-[var(--card)] hover:bg-[var(--card-hover)] text-white",

  success:
    "bg-green-500 hover:bg-green-600 text-white",

  danger:
    "bg-red-500 hover:bg-red-600 text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        w-full
        py-3
        rounded-[var(--radius)]
        font-semibold
        transition-all
        duration-200
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;