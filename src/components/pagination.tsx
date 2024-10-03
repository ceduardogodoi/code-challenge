export function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <button data-active={true} type="button">
          1
        </button>
      </li>
      <li>
        <button data-active={false} type="button">
          2
        </button>
      </li>
      <li>
        <button data-active={false} type="button">
          3
        </button>
      </li>
    </ul>
  );
}
