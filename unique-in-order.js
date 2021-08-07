/*
    Implement the function unique_in_order which takes as argument a 
    sequence and returns a list of items without any elements with the 
    same value next to each other and preserving the original order of 
    elements.
    
    For example: 
        uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
        uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
        uniqueInOrder([1,2,2,3,3])  
*/

const uniqueInOrder = (iterable) => {
  let arr = [];
  const uniqueResult = [];

  if (typeof iterable === "object") arr = iterable;
  else if (typeof iterable === "string") arr = iterable.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) uniqueResult.push(arr[i]);
  }
  return uniqueResult;
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);
