interface ButtonProps {
  title: string;
  type?: "button" | "submit";
}

function Button({
  title,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="
        w-full
        rounded-lg
        bg-blue-600
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        hover:bg-blue-700
        active:scale-[0.98]
      "
    >
      {title}
    </button>
  );
}

export default Button;