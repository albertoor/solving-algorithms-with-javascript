/*
    Write an algorithm that takes an array and moves all of the zeros to the end, 
    preserving the order of the other elements.
 */
const moveZeros = (arr) => {
  const arrWithoutZeros = [];
  const zeros = [];
  arr.filter((ele) => {
    if (ele === 0) zeros.push(ele);
    else arrWithoutZeros.push(ele);
  });
  return arrWithoutZeros.concat(zeros);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
