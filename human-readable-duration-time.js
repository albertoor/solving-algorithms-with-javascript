/*
    Your task in order to complete this Kata is to write a function which formats a duration, 
    given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, 
    the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:
        formatDuration(62)    // returns "1 minute and 2 seconds"
        formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"


 */

const formatDuration = (seconds) => {
  const values = [];
  values.push(Math.floor(seconds / (365 * 24 * 60 * 60)));
  values.push(Math.floor((seconds / (24 * 60 * 60)) % 365));
  values.push(Math.floor((seconds / (60 * 60)) % 24));
  values.push(Math.floor((seconds / 60) % 60));
  values.push(Math.floor(seconds % 60));
  const singular = ["year", "day", "hour", "minute", "second"];
  const plural = ["years", "days", "hours", "minutes", "seconds"];
  let message = [];

  for (let index = 0; index < values.length; index++) {
    if (values[index] > 1) {
      message.push(values[index] + " " + plural[index]);
    } else if (values[index] === 1) {
      message.push(values[index] + " " + singular[index]);
    }
  }

  let format = "";
  if (message.length > 1) {
    let last = message.pop();
    format = message.join(", ") + " and " + last;
  } else {
    format = message.join(", ");
  }

  if (seconds === 0) return "now";
  else return format;
};

console.log(formatDuration(3600));
console.log(formatDuration(1000829642));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
