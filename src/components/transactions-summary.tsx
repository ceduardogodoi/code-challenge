import { useAppContext } from "../contexts/use-app-context";

export function TransactionsSummary() {
  const { transactionsQuantity } = useAppContext();

  return (
    <div className="transactions__summary-card">
      <h2>Transactions Summary</h2>

      <span>
        Quantity: <output>{transactionsQuantity}</output>
      </span>
    </div>
  );
}
