import MainRoutes from "./routes/mainRoutes";
import "./App.css";
import { QuotesProvider } from "./providers/quotes.provider";

function App() {
  return (
    <QuotesProvider>
      <MainRoutes />
    </QuotesProvider>
  );
}

export default App;
