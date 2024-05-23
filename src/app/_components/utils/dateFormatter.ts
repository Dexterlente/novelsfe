export function formatTimestamp(timestamp: string): string {
  const diff: number =
    (new Date().getTime() - new Date(timestamp).getTime()) / 1000;
  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  const format: Record<string, string> = {
    year: "year",
    month: "month",
    week: "week",
    day: "day",
    hour: "hour",
    minute: "minute",
    now: "just now",
  };

  for (const key in intervals) {
    if (Object.prototype.hasOwnProperty.call(intervals, key)) {
      const value: number = Math.floor(diff / intervals[key]);
      if (value >= 1)
        return value + " " + format[key] + (value === 1 ? "" : "s") + " ago";
    }
  }

  return format.now;
}

// Example usage:
const timestamp: string = "Thu, 23 May 2024 16:24:35 GMT";
console.log(formatTimestamp(timestamp)); // Output: "just now" or "1 minute ago", etc.
