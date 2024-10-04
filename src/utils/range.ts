export function range(length: number) {
  return Array.from({ length })
    .fill(null)
    .map((_, index) => index + 1);
}
