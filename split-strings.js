/*
  Complete the solution so that it splits the string into pairs of two
  characters. If the string contains an odd number of characters then it
  should replace the missing second character of the final pair with an
  underscore ('_').

  solution('abc') // should return ['ab', 'c_']
  solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

const solution = (str) => {
  let strArr = str.split("");
  const arr = [];

  for (let index = 0; index < strArr.length; index += 2) {
    element = strArr.slice(index, index + 2).join("");
    if (element.length == 1) {
      element = element + "_";
      arr.push(element);
    } else {
      arr.push(element);
    }
  }
  return arr;
};

console.log(solution("abc"));
console.log(solution("abcdef"));
