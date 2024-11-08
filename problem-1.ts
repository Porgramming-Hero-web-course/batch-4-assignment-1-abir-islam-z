/**
 * **Problem 1:**
 * > Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
 * ---
 * - Sample Input: `sumArray([1, 2, 3, 4, 5])`
 * ---
 * - Sample Output: `15`
 *
 */

const sumArray = (numArr: number[]): number => {
  const sum: number = numArr.reduce((prev, curr) => prev + curr, 0);

  return sum;
};

console.log(sumArray([1, 2, 3, 4]));
