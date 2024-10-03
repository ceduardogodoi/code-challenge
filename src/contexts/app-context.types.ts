import type { Transaction } from "../mocks/db";

export type RangeParams = {
  startDate: string;
  endDate: string;
};

export type AppContextValues = {
  initialTransactions: Transaction[];
  transactionsQuantity: number;
  transactions: Transaction[];
};
export type AppContextActions = {
  filterByRange: (params: RangeParams) => void;
  resetFilters: () => void;
};

export type AppContextType = AppContextValues & AppContextActions;
