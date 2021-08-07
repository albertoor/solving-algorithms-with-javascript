/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we 
    get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 

    "Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, 
    return 0(for languages that do have them)"
 */

const solution = (number) => {
  let total = 0;
  for (let index = 0; index < number; index++) {
    if (Number.isInteger(index / 3) || Number.isInteger(index / 5))
      total = total + index;
    else if (Number.isInteger(number[index] / 5) || Number.isInteger(index / 3))
      total = total = index;
  }
  return total;
};

console.log(solution(10));
