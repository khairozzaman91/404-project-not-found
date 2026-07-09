import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface DateContextType {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export function DateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}

export function useDate() {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error("useDate must be used inside DateProvider");
  }

  return context;
}