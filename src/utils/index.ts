import { BOOKED_SITTERS_KEY } from "../constants";

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

// utils/localStorageUtil.ts
export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error);
    return null;
  }
};

export const removeLocalStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};

export const getBookedSitters = () => {
  const data = localStorage.getItem(BOOKED_SITTERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addBookedSitter = (sitter: any) => {
  const current = getBookedSitters();
  const updated = [...current, sitter];
  localStorage.setItem(BOOKED_SITTERS_KEY, JSON.stringify(updated));
};

export const removeBookedSitter = (sitterId: string) => {
  const current = getBookedSitters();
  const updated = current.filter((s: any) => s.id !== sitterId);
  localStorage.setItem(BOOKED_SITTERS_KEY, JSON.stringify(updated));
};
