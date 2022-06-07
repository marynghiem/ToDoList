// Month is 0 indexed: Jan is 0, Feb is 1, etc.
export function getNumberOfDaysInMonth(month, year) {
  return new Date(year, month - 1, 0).getDate();
}
