/**
 * # Given: an array containing hashes of names
    # Return: a string formatted as a list of names separated by commas 
    # except for the last two names, which should be separated by an ampersand.
    # Example:

    # Format a string of names like 'Bart, Lisa & Maggie'.
 * 
 */

const list = (names) => {
  const namesLen = names.length;
  const namesWithoutLastIndex = [];
  //   let stringResult;

  if (namesLen === 0) {
    return "";
  } else if (namesLen === 1) {
    return names[0].name;
  } else if (namesLen > 1) {
    names.map((name, index) => {
      if (!(namesLen === index + 1)) {
        namesWithoutLastIndex.push(name.name);
      }
    });
    return (stringResult =
      namesWithoutLastIndex.join(", ") + " & " + names[namesLen - 1].name);
  }
};

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
// returns 'Bart & Lisa'

console.log(list([{ name: "Bart" }]));
// returns 'Bart'

console.log(list([]));
// returns ''

// better solution like functional programming
// function list(names) {
//   return names.reduce(function (prev, curr, i, arr) {
//     return (
//       prev +
//       curr.name +
//       (i < arr.length - 2 ? ", " : i == arr.length - 2 ? " & " : "")
//     );
//   }, "");
// }
