/*
Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
More Array Methods (https://javascript.info/array-methods)
Array Methods Complexity (https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]), 2
getAverage([1,2,3,4,5,]), 3
getAverage([1,1,1,1,1,1,1,2]), 1


From: https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
*/

function getAverage(arr) {
  let len = arr.length
  let sum = arr.reduce((total, current) => total + current, 0)
  return Math.floor(sum/len)
}

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)