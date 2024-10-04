import { PropsWithChildren, useState } from "react";

import { db } from "../mocks/db";
import type { AppContextValues, RangeParams } from "./app-context.types";
import { AppContext } from "./app-context";
import {
  filterByDateRange,
  sortTransactionsAscending,
} from "../utils/transaction";

const itemsPerPage = 10;

const initialState: AppContextValues = {
  transactions: db.transactions.sort(sortTransactionsAscending),
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
    setState((prev) => {
      const currentTransactions = prev.transactions
        .filter(filterByDateRange(startDate, endDate))
        .sort(sortTransactionsAscending);

      return {
        ...prev,
        currentPage: initialState.currentPage,
        currentTransactions: currentTransactions.slice(0, itemsPerPage),
        transactionsQuantity: currentTransactions.length,
        pagesQuantity: Math.ceil(currentTransactions.length / itemsPerPage),
      };
    });
  }

  function resetFilters() {
    setState({ ...initialState });
  }

  function goToPage(page: number) {
    setState((prev) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex =
        startIndex + itemsPerPage > prev.transactionsQuantity
          ? prev.transactionsQuantity
          : startIndex + itemsPerPage;

      const currentTransactions = prev.transactions.slice(startIndex, endIndex);

      return {
        ...prev,
        currentPage: page,
        currentTransactions,
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
