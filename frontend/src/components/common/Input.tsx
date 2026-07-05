interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-slate-300
          px-4
          py-3
          text-sm
          outline-none
          transition-all
          placeholder:text-slate-400
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}

export default Input;