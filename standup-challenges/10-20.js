/*
🚨  Make sure you understand these before taking a look at the question:
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)


DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)


From: https://www.codewars.com/kata/59f11118a5e129e591000134
*/

function repeats(arr) {
  let obj = arr.reduce((obj, num) => {
    obj[num]? obj[num]++ : obj[num] = 1
    return obj
  }, {})
  let onceArr = Object.keys(obj).filter(key => obj[key] === 1)
  // console.log(onceArr)
  return onceArr.reduce((sum, num) => sum + +num, 0)
}


console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
console.log(repeats([5, 10, 19, 13, 10, 13]),24)