/*
    Write a function that takes a string of parentheses, and determines if the order of the 
    parentheses is valid. The function should return true if the string is valid, and false 
    if it's invalid

    EXAMPLES
    "()" => true
    ")(()))" => false
    "(" => false
    "(())((()())())" => true
 */

const validParentheses = (parens) => {
  let symmetry = 0;
  for (const char of parens) {
    if (char == "(") symmetry++;
    else symmetry--;

    if (symmetry < 0) return false;
  }

  if (symmetry === 0) return true;
  else return false;
};

console.log(validParantheses("()"));
console.log(validParentheses("())"));
console.log(validParentheses("(())((()())())")); // true
console.log(validParantheses(")(()))"));
