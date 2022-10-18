/*
Make sure you understand these before taking a look at the question:
Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
Number(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
*/

// Take in an array that has integers as numbers and strings
// empty arr? -> 0 or null, or -1?
// is there strings that are not or not just numbers, e.g. 'a3c'?
// is there subarrays or objects in the arr?


// return the sum of these integers as if they were all numbers

// examples:
// [9, 3, '7', '3'] =>  22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42
// ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41

// for loop - FASTER
function sumMix1(arr) {
  let result = 0
  for (let num of arr) {
    // turn each element into a number 
    result += +num
  }
  return result
}

// reduce
function sumMix2(arr) {
  return arr.reduce((sum, num) => sum + +num, 0)
}

console.log(sumMix([9, 3, '7', '3']), 22)

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)