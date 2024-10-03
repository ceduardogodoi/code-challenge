import { TransactionsSummary } from "./components/transactions-summary";
import { TransactionsTable } from "./components/transactions-table";

export function App() {
  return (
    <main>
      <h1>Transactions</h1>

      <TransactionsSummary />

      <TransactionsTable />
    </main>
  );
}
