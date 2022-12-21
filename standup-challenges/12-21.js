/*
No recursion  or memoization please, just give me a raw for loop for today!

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

https://leetcode.com/problems/fibonacci-number/

*/


/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    let arr = [0, 1];
    for (let i = 2; i <=n; i++) {
      arr.push(arr[i - 2] + arr[i-1]);
    }
    return arr[n]
};

const fib2 = (n) => {
  if ( n===0 || n === 1 ) return n
  let num1 = 0,
      num2 = 1;
  for (let i = 2; i <= n; i++) {
    currentNum = num1 + num2;
    num1 = num2;
    num2 = currentNum;
  }
  return num2
}



// repeat

const fib3 = (n) => {
  if (n < 2 ) {
    return n
  }
  let [num1, num2] = [0, 1];
  for (let i = 2; i < n; i++) {
    [num1, num2] = [num2, num1+num2];
  }
  return num1+num2
}

const fib4 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib4(n-1) + fib4(n-2)
}

console.log(fib(8));

console.log(fib2(2), fib3(2), fib4(2));
console.log(fib2(3), fib3(3), fib4(3));
console.log(fib2(4), fib3(4), fib4(4));
console.log(fib2(5), fib3(5), fib4(5));