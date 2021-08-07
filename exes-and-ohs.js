/**
    # Check to see if a string has the same amount of 'x's and 'o's.
    # The method must return a boolean and be case insensitive.
    # The string can contain any char.

    # Examples input/output:

    # XO("ooxx") => true
    # XO("xooxx") => false
    # XO("ooxXm") => true
    # XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    # XO("zzoo") => false
 */

// my better version
const XO = (string) => {
  string = string.toLowerCase().split(""); // to array of strings
  const xArr = string.filter((x) => x === "x");
  const oArr = string.filter((o) => o === "o");
  return xArr.length === oArr.length;
};

// my bad version
// const XO = (string) => {
//   const xArr = [];
//   const oArr = [];
//   let match = false;

//   for (let char of string) {
//     if (char.toLowerCase() === "x") xArr.push(char);
//     else if (char.toLowerCase() === "o") oArr.push(char);
//     else if (char === "0") match = true;
//   }

//   if (xArr.length === oArr.length) {
//     match = true;
//   }

//   if (match) return match;
//   else return match;
// };

// perfect version (this is not my version)
// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

console.log(XO("xoxo"));
console.log(XO("xo0"));
console.log(XO("xxxoo"));
