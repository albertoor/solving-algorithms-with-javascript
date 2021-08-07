/**
    Given two arrays of strings a1 and a2 return a sorted array r in
    lexicographical order of the strings of a1 which are substrings
    of strings of a2.
  
    #Example 1: a1 = ["arp", "live", "strong"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns ["arp", "live", "strong"]

    #Example 2: a1 = ["tarp", "mice", "bull"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns []

    NOTES:
        * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
        * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
        * Beware: r must be without duplicates.
        * Don't mutate the inputs.
 */

// using continue label
const inArray = (array1, array2) => {
  const result = [];

  outer: for (let arr1 of array1) {
    for (let arr2 of array2) {
      if (arr2.includes(arr1)) {
        result.push(arr1);
        continue outer;
      }
    }
  }
  return result.sort();
};

inArray(
  ["arp", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
// returns ["arp", "live", "strong"]

inArray(
  ["tarp", "mice", "bull"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
// returns []
