import type { Transaction } from "../mocks/db";

export type RangeParams = {
  startDate: string;
  endDate: string;
};

export type AppContextValues = {
  readonly transactions: Transaction[];
  readonly transactionsCount: number;
  readonly itemsPerPage: number;
  transactionsQuantity: number;
  currentTransactions: Transaction[];
  currentPage: number;
  pagesQuantity: number;
};
export type AppContextActions = {
  filterByRange: (params: RangeParams) => void;
  resetFilters: () => void;
  goToPage: (page: number) => void;
};

export type AppContextType = AppContextValues & AppContextActions;
