import { FormEvent, useRef } from "react";
import { useAppContext } from "../contexts/use-app-context";
import { z } from "zod";

const formSchema = z.object({
  startDate: z.string().date("Invalid date format."),
  endDate: z.string().date("Invalid date format."),
});

export function DateRangeFilter() {
  const formRef = useRef<HTMLFormElement>(null);

  const { filterByRange, resetFilters } = useAppContext();

  function handleRangeFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (result.error != null) {
      alert("Invalid date input. Try again!");

      return;
    }

    filterByRange({
      startDate: result.data.startDate,
      endDate: result.data.endDate,
    });
  }

  function handleResetFilters() {
    if (formRef.current == null) return;

    formRef.current.reset();

    resetFilters();
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleRangeFilter}
      className="date-range__form"
    >
      <fieldset>
        <legend>Date Range</legend>

        <label className="date-range__label">
          Start Date:
          <input
            className="date-range__input"
            required
            type="date"
            name="startDate"
          />
        </label>

        <label className="date-range__label">
          End Date:
          <input
            className="date-range__input"
            required
            type="date"
            name="endDate"
          />
        </label>

        <div className="date-range__actions">
          <button type="button" className="btn" onClick={handleResetFilters}>
            Clear
          </button>

          <button type="submit" className="btn btn--submit">
            Filter
          </button>
        </div>
      </fieldset>
    </form>
  );
}
