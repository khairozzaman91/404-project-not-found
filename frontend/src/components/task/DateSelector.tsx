import { useDate } from "../../context/DateContext";

function DateSelector() {
  const { selectedDate, setSelectedDate } = useDate();

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
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