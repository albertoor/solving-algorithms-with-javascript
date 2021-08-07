/*
    There is a large pile of socks that must be paired by 
    color. Given an array of integers representing the 
    color of each sock, determine how many pairs of socks 
    with matching colors there are.

    Example 
    n = 7
    ar = [1, 2, 1, 2, 1, 3, 2]

    There is one pair of color 1 and one of color 2. 
    There are three odd socks left, one of each color. 
    The number of pairs is 2. 

    Function Description
    Complete the sockMerchant function in the editor below.
    sockMerchant has the following parameter(s):

    * int n: the number of socks in the pile
    * int ar[n]: the colors of each sock
    
    Returns: 
    * int: the number of pairs

    Input Format
    The first line contains an integer n, the number of socks represented 
    in arr.
    The second line contains n space-separated integers, a[i], the colors 
    of the socks in the pile.

    Constraints
    * 1 <= n <=100
    * 1 <= ar[i] <= 100 where 0 <= i <= n
    
    Sample Input
    STDIN               FUNCTION
    9                   n = 9
    10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

    Sample Output
    3
 */

const sockMerchant = (n, ar) => {
  let stock = {};
  let pairs = 0;

  for (let index = 0; index < ar.length; index++) {
    stock[ar[index]] = stock[ar[index]] + 1 || 1;
  }

  for (const sock in stock) {
    if (Object.hasOwnProperty.call(stock, sock)) {
      let totalOfAppearances = stock[sock];
      totalOfAppearances = Math.floor(stock[sock] / 2);
      pairs += totalOfAppearances;
    }
  }
  return pairs;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

console.log(
  sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])
);

console.log(
  sockMerchant(
    100,
    [
      44, 55, 11, 15, 4, 72, 26, 91, 80, 14, 43, 78, 70, 75, 36, 83, 78, 91, 17,
      17, 54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66,
      10, 44, 45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20,
      19, 64, 64, 93, 60, 96, 10, 10, 39, 94, 15, 4, 3, 10, 1, 77, 48, 74, 20,
      12, 83, 97, 5, 82, 43, 15, 86, 5, 35, 63, 24, 53, 27, 87, 45, 38, 34, 7,
      48, 24, 100, 14, 80, 54,
    ]
  )
);

console.log(
  sockMerchant(
    100,
    [
      50, 49, 38, 49, 78, 36, 25, 96, 10, 67, 78, 58, 98, 8, 53, 1, 4, 7, 29, 6,
      59, 93, 74, 3, 67, 47, 12, 85, 84, 40, 81, 85, 89, 70, 33, 66, 6, 9, 13,
      67, 75, 42, 24, 73, 49, 28, 25, 5, 86, 53, 10, 44, 45, 35, 47, 11, 81, 10,
      47, 16, 49, 79, 52, 89, 100, 36, 6, 57, 96, 18, 23, 71, 11, 99, 95, 12,
      78, 19, 16, 64, 23, 77, 7, 19, 11, 5, 81, 43, 14, 27, 11, 63, 57, 62, 3,
      56, 50, 9, 13, 45,
    ]
  )
);
