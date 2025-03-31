export const calculateHoursCovered = (
  startTime: string,
  startPeriod: string,
  endTime: string,
  endPeriod: string
) => {
  // Convert start time to 24-hour format
  let [startHour, startMinute] = startTime.split(":").map(Number) as [
    number,
    number
  ];
  let [endHour, endMinute] = endTime.split(":").map(Number) as [number, number];

  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(endHour) ||
    isNaN(endMinute)
  ) {
    return 0; // Invalid input case
  }

  if (startPeriod === "PM" && startHour !== 12) startHour += 12;
  if (startPeriod === "AM" && startHour === 12) startHour = 0;
  if (endPeriod === "PM" && endHour !== 12) endHour += 12;
  if (endPeriod === "AM" && endHour === 12) endHour = 0;

  // Convert times to total minutes from midnight
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // Validate time range
  if (endTotalMinutes < startTotalMinutes) {
    return 0; // Invalid case
  }

  // Calculate total hours (rounded to 2 decimal places)
  return ((endTotalMinutes - startTotalMinutes) / 60).toFixed(2);
};
