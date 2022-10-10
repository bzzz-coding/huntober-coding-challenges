// Week 2 Day 1
/* comparing two arrays */
/*
Today's task is to write a function that will check equality between 2 arrays with a particular structure.

The arrays will:

Be of equal size
Will each contain some number (X) arrays
Each inner array will contain that same number (X) primitive elements
All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.
*/


function compareArr(arr1, arr2) {
  return arr1.every((el, i) => el === arr2[i])
}

function compareArrOfArr(arr1, arr2) {
  return arr1.every((arr, i) => compareArr(arr, arr2[i]))
}

