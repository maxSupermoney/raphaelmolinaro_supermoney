import { createContext, ReactNode, useContext, useState } from "react";
import { Debt } from "../models/debt";


interface DebtContextData {
  debtList: Debt[];
  addToList: (item: Debt) => void;
  removeFromList: (id: string) => void;
}

interface DebtProviderProps {
  children: ReactNode;
}

const DebtContext = createContext<DebtContextData>({} as DebtContextData);

export const DebtProvider = ({ children }: DebtProviderProps) => {
  const [debtList, setDebtList] = useState<Debt[]>([]);

  function addToList(item: Debt) {
    setDebtList([...debtList, item]);
  }

  function removeFromList(id: string) {
    setDebtList(debtList.filter((item) => item.id !== id));
  }

  return (<DebtContext.Provider value={{ debtList, addToList, removeFromList }}>
    {children}
  </DebtContext.Provider>)
};

export function useDebt() {
  return useContext(DebtContext);
}