/*
    Write a function, which takes a non-negative integer (seconds) 
    as input and returns the time in a human-readable format 
    (HH:MM:SS)

        HH = hours, padded to 2 digits, range: 00 - 99
        MM = minutes, padded to 2 digits, range: 00 - 59
        SS = seconds, padded to 2 digits, range: 00 - 59

    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.

 */

const humanReadable = (seconds) => {
  const hrs = parseInt(seconds / 3600);
  const minutes = parseInt((seconds % 3600) / 60);
  const sec = parseInt(seconds % 60);
  const hrsStr = hrs > 10 ? hrs.toString() : "0" + hrs.toString();
  const minutesStr =
    minutes > 10 ? minutes.toString() : "0" + minutes.toString();
  const secStr = sec > 10 ? sec.toString() : "0" + sec.toString();
  return hrsStr + ":" + minutesStr + ":" + secStr;
};

console.log(humanReadable(5000));
