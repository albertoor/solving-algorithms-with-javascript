/*
    Write a function that takes a string of braces, and determines if the order of 
    the braces is valid. It should return true if the string is valid, and false if 
    it's invalid.
    This Kata is similar to the Valid Parentheses Kata, but introduces new characters: 
    brackets [], and curly braces {}. Thanks to @arnedag for the idea!

    All input strings will be nonempty, and will only consist of parentheses, brackets 
    and curly braces: ()[]{}.
    
    What is considered Valid?
    A string of braces is considered valid if all braces are matched with the correct brace.

    EXAMPLES
        "(){}[]"   =>  True
        "([{}])"   =>  True
        "(}"       =>  False
        "[(])"     =>  False
        "[({})](]" =>  False
 */
const validBraces = (braces) => {
  let stack = [];
  let squence = "[]{}()";
  const even = (element) => element % 2 === 0;

  for (const char of braces) {
    let indexOfBracket = squence.indexOf(char);
    if (even(indexOfBracket)) {
      stack.push(indexOfBracket + 1);
    } else {
      if (stack.pop() !== indexOfBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(validBraces("(){}[]")); // => true
console.log(validBraces("()")); // => true
console.log(validBraces("([{}])")); // => true
console.log(validBraces("[(])")); // => false
console.log(validBraces("(}")); // => false
console.log(validBraces("[({})](]")); // => false
