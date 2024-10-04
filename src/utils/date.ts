import dayjs from "dayjs";

export function formatDate(date: Date) {
  return dayjs(date).format("MM/DD/YYYY");
}

export function formatToDateTime(date: Date) {
  return dayjs(date).format("YYYY-MM-DD");
}
