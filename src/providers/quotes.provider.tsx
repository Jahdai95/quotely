import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { getAllStorage } from "../utils/storage";

interface IQuote {
  key: string;
  value: string;
}
interface IQuotesProvider {
  quotesData: IQuote[];
  updateStorageData: () => void;
}
const QuotesContext = createContext<IQuotesProvider | undefined>(undefined);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quotesData, setStorageData] = useState<IQuote[]>([]);

  const loadStorageData = () => {
    const data = getAllStorage();
    setStorageData(data);
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  const updateStorageData = () => {
    loadStorageData();
  };

  return (
    <QuotesContext.Provider value={{ quotesData, updateStorageData }}>
      {children}
    </QuotesContext.Provider>
  );
};

export const useQuoteContext = () => {
  const context = useContext(QuotesContext);
  if (!context) {
    throw new Error(
      "useQuoteContext debe ser usado dentro de QuoteContext, wrapealo =)"
    );
  }
  return context;
};
