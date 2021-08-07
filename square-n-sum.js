/*
    Complete the square sum function so that it squares each number passed into it and 
    then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

const squareSum = (numbers) => {
  const sqNumbers = numbers.map((number) => number * number);
  if (sqNumbers.length === 0) return 0;
  const sumSq = sqNumbers.reduce((acc, curr) => acc + curr);
  return sumSq;
};

console.log(squareSum([1, 2, 3]));
console.log(squareSum([0, 3, 4, 5]));
