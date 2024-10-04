import { useAppContext } from "../contexts/use-app-context";

export function TransactionsSummary() {
  const { transactionsCount } = useAppContext();

  return (
    <div className="transactions__summary-card">
      <h2>Transactions Summary</h2>

      <span>
        Quantity: <output>{transactionsCount}</output>
      </span>
    </div>
  );
}
