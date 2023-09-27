export const formatTime = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM";
    time[0] = +time[0] % 12 || 12; // Adjust hours
    return time.join(""); // return adjusted time
  }

  return ""; // return empty string for incorrect format
};

export const formatDate = (date) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
