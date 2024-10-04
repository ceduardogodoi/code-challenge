import { useAppContext } from "../contexts/use-app-context";
import { formatDate, formatToDateTime } from "../utils/date";
import { formatMoney } from "../utils/money";
import { DateRangeFilter } from "./date-range-filter";
import { Pagination } from "./pagination";

export function TransactionsTable() {
  const { currentTransactions } = useAppContext();

  return (
    <>
      <DateRangeFilter />

      <div className="transactions__table-container">
        <table className="transactions__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount (USD)</th>
            </tr>
          </thead>

          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{transaction.id}</td>
                <td>
                  <time dateTime={formatToDateTime(transaction.date)}>
                    {formatDate(transaction.date)}
                  </time>
                </td>
                <td>{transaction.description}</td>
                <td>{formatMoney(transaction.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </>
  );
}
