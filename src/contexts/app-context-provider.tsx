import { PropsWithChildren, useState } from "react";

import { db } from "../mocks/db";
import type { AppContextValues, RangeParams } from "./app-context.types";
import { AppContext } from "./app-context";
import dayjs from "dayjs";

const itemsPerPage = 10;

const initialState: AppContextValues = {
  transactions: db.transactions,
  transactionsCount: db.transactions.length,
  itemsPerPage,
  transactionsQuantity: db.transactions.length,
  currentTransactions: db.transactions.slice(0, itemsPerPage),
  currentPage: 1,
  pagesQuantity: Math.ceil(db.transactions.length / itemsPerPage),
};

export function AppContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppContextValues>(initialState);

  function filterByRange({ startDate, endDate }: RangeParams) {
    const initialDate = dayjs(startDate);
    const finalDate = dayjs(endDate);

    setState((prev) => {
      const currentTransactions = prev.transactions
        .filter((transaction) => {
          return (
            initialDate.isBefore(transaction.date) &&
            finalDate.isAfter(transaction.date)
          );
        })
        .slice(0, itemsPerPage);

      return {
        ...prev,
        currentPage: initialState.currentPage,
        currentTransactions,
        transactionsQuantity: currentTransactions.length,
        pagesQuantity: Math.ceil(currentTransactions.length / itemsPerPage),
      };
    });
  }

  function resetFilters() {
    setState({ ...initialState });
  }

  function goToPage(page: number) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setState((prev) => {
      return {
        ...prev,
        currentPage: page,
        currentTransactions: prev.transactions.slice(startIndex, endIndex),
      };
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        filterByRange,
        resetFilters,
        goToPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
