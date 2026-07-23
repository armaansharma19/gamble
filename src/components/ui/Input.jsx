const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm text-[var(--muted)] font-medium">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-[var(--radius)]
          bg-[var(--bg)]
          border
          border-[var(--border)]
          px-4
          py-3
          outline-none
          transition-all
          duration-200
          focus:border-[var(--primary)]
          focus:ring-2
          focus:ring-[var(--primary)]/20
        "
      />
    </div>
  );
};

export default Input;