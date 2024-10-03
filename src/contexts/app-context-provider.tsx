import { PropsWithChildren, useState } from "react";

import { db } from "../mocks/db";
import type { AppContextValues, RangeParams } from "./app-context.types";
import { AppContext } from "./app-context";
import dayjs from "dayjs";

const initialState: AppContextValues = {
  initialTransactions: db.transactions,
  transactionsQuantity: db.transactions.length,
  transactions: db.transactions,
};

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppContextValues>(initialState);

  function filterByRange({ startDate, endDate }: RangeParams) {
    const initialDate = dayjs(startDate);
    const finalDate = dayjs(endDate);

    setState((prev) => {
      return {
        ...prev,
        transactions: prev.initialTransactions.filter((transaction) => {
          return (
            initialDate.isBefore(transaction.date) &&
            finalDate.isAfter(transaction.date)
          );
        }),
      };
    });
  }

  function resetFilters() {
    setState((prev) => {
      return {
        ...prev,
        transactions: [...prev.initialTransactions],
      };
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        filterByRange,
        resetFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
