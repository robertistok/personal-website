const yearsSince = (timestamp: Date | string): number => {
  let localTimestamp = timestamp;
  if (typeof localTimestamp === "string") {
    localTimestamp = new Date(localTimestamp);
  }

  const thisYear = new Date().getFullYear();
  const timestampYear = localTimestamp.getFullYear();
  const year = thisYear - timestampYear;

  return year;
};

export default { yearsSince };
