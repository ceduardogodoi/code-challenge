export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US").format(date);
}

export function formatToDateTime(date: Date) {
  return date.toISOString().split("T")[0];
}
