/*
🚨 Make sure you understand these before taking a look at the question:
Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


From: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/solutions/javascript
*/

// unshift
function lastEven1(arr, count) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (result.length < count) {
      if (arr[i] % 2 === 0) result.unshift(arr[i])
    }
  }
  return result
}

console.log(lastEven([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(lastEven([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(lastEven([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])


// push + reverse === FASTER
function lastEven2(arr, count) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (result.length < count) {
      if (arr[i] % 2 === 0) result.push(arr[i])
    }
  }
  return result.reverse()
}


// filter and slice
function lastEven3(arr, count) {
  return arr.filter(num => num % 2 === 0).slice(-count)
}


// Comparing: https://jsbench.me/b7l9krj584/1