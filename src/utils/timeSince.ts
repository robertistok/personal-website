export const yearsSince = (timestamp: Date | string) => {
  if (typeof timestamp === "string") {
    timestamp = new Date(timestamp);
  }

  const thisYear = new Date().getFullYear();
  const timestampYear = timestamp.getFullYear();
  const year = thisYear - timestampYear;

  return year;
};
