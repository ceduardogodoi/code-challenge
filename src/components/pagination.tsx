import { useAppContext } from "../contexts/use-app-context";
import { range } from "../utils/range";

export function Pagination() {
  const { currentPage, goToPage, pagesQuantity, transactionsQuantity } =
    useAppContext();

  function handleGoToPage(page: number) {
    goToPage(page);
  }

  if (pagesQuantity < 2) return null;

  return (
    <div className="pagination__container">
      <span>Items: {transactionsQuantity}</span>

      <ul className="pagination">
        {range(pagesQuantity).map((pageNumber) => {
          const isActive = pageNumber === currentPage;

          return (
            <li key={pageNumber}>
              <button
                data-active={isActive}
                type="button"
                onClick={() => handleGoToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
