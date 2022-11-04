/*
Sort (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest([3,1,2] ,2) ==> return (2) 
nthSmallest([15,20,7,10,4,3] ,3) ==> return (7) 
nthSmallest([177,225,243,-169,-12,-5,2,92] ,5) ==> return (92) 


From: https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript
*/

// take in an array of integers, +, -, 0, all of the type number, there could repeats, at least has three numbers
// pass in a number n, we want the nth smallest number
// don't mutate the array

// return the nth number 

// what if n is greater than the total number of unique values?

// nthSmallest([3,1,2] ,2) ==> return (2) 
// nthSmallest([15,20,7,10,4,3] ,3) ==> return (7) 
// nthSmallest([177,225,243,-169,-12,-5,2,92] ,5) ==> return (92) 


function nthSmallest(arr, n) {
  // make a copy of the arr
  let arrCopy = [...arr]
  // sort the copy in asc order
  arrCopy.sort((a, b) => a - b)

  return arrCopy[n-1]
}

console.log(nthSmallest([3,1,2], 2), 2)
console.log(nthSmallest([15,20,7,10,4,3], 3), 7)
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 92))