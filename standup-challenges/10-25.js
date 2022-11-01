/*
:eyesshaking:  Please make sure you understand these before taking a look at the question:
Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


From: https://www.codewars.com/kata/59e66e48fc3c499ec5000103
*/

// multiple the number of unique values from each subarray

function uniqueValues1(arr) {
  obj = {}
  for (el of arr) {
    if (!obj[el]) obj[el] = true
  }
  return Object.keys(obj).length
}

// use Set
function uniqueValues(arr) {
  let set = new Set(arr)
  return set.size
}

console.log(uniqueValues([8,9,10,12,5,6,8,8,6]))

function uniqueArrays(arr) {
  return arr.reduce((product, currentSubArr) => product * uniqueValues(currentSubArr), 1)
}

console.log(uniqueArrays([[1,2],[4],[5,6]]), 4)
console.log(uniqueArrays([[1,2],[4,4],[5,6,6]]),4)
console.log(uniqueArrays([[1,2],[3,4],[5,6]]),8)
console.log(uniqueArrays([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

function charToParens(str) {
  let result = ''
  for (let char of str) {
    let paren = str.indexOf(char) === str.lastIndexOf(char) ? '(' : ')'
    result += paren
  }
  return result
}

function convertStr(str) {
  let result = ''
  for (let char of str) {
    let newChar = char === ' '? ' ' : char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    result = newChar + result
  }
  return result
}

