interface DateSelectorProps {
  value: string;
  onChange: (date: string) => void;
}

function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        rounded-lg
        border
        border-slate-300
        px-4
        py-2
        outline-none
      "
    />
  );
}

export default DateSelector;