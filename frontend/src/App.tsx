import AppRoutes from "./routes/AppRoutes";
import { DateProvider } from "./context/DateContext"

function App() {
  return (
    <DateProvider>
      <AppRoutes />
    </DateProvider>
  );
}

export default App;