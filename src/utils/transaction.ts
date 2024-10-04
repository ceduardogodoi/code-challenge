import dayjs from "dayjs";
import { Transaction } from "../mocks/db";

export function filterByDateRange(startDate: string, endDate: string) {
  return (transaction: Transaction) => {
    const initialDate = dayjs(startDate);
    const finalDate = dayjs(endDate);

    return (
      initialDate.isBefore(transaction.date) &&
      finalDate.isAfter(transaction.date)
    );
  };
}

export function sortTransactionsAscending(
  left: Transaction,
  right: Transaction
) {
  if (dayjs(left.date).isBefore(right.date)) {
    return -1;
  }

  if (dayjs(left.date).isAfter(right.date)) {
    return 1;
  }

  return 0;
}
