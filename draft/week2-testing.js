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

// Week 2 Day 2

/*
I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

Some things to note:

If the given value is on the edge of the array and can't move in that direction, don't move it.
The array passed in should be mutated by this function. Scandalous, I know.
*/

function moveLeft(el, arr) {
  let targetIndex = arr.indexOf(el)
  if (targetIndex === 0) return arr
  arr[targetIndex] = arr[targetIndex - 1]
  arr[targetIndex - 1] = el
  return arr
}

function moveRight(el, arr) {
  let targetIndex = arr.indexOf(el)
  if (targetIndex === arr.length - 1) return arr
  arr[targetIndex] = arr[targetIndex + 1]
  arr[targetIndex + 1] = el
  return arr
}

// ===== solution for shifting all occurances =====
function moveAllLeft(el, arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === el) {
      arr[i] = arr[i - 1]
      arr[i - 1] = el
    }
  }
  return arr
}

function moveAllRight(el, arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] === el) {
      arr[i] = arr[i + 1]
      arr[i + 1] = el
    }
  }
  return arr
}