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

// Day 3
function reorderArr(arr) {
  let arr1 = [],
      arr2 = [],
      arr3 = []
  for (let str of arr) {
    if (str.includes('a')) arr1.push(str)
    else if (str.length > 3) arr3.push(str)
    else arr2.push(str)
  }
  return [...arr1, ...arr2, ...arr3]
}

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

console.log(reorderArr(myArr))

// Day 4
/*
Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.
Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

Oh, and go ahead and mutate the given array. We're livin' on the wild side!
*/

function moveUp(val, arr) {
  let size = arr.length
  let row = null,
      position = null
  for (let i = 0; i < size; i++) {
    if (arr[i].includes(val)) {
      row = i
      position = arr[i].indexOf(val)
    }
  }
  if (row > 0) {
    arr[row][position] = arr[row-1][position]
    arr[row-1][position] = val
  }
  return arr
}

function moveDown(val, arr) {
  let size = arr.length
  let row = null,
      position = null
  for (let i = 0; i < size; i++) {
    if (arr[i].includes(val)) {
      row = i
      position = arr[i].indexOf(val)
    }
  }
  console.log(row, position)
  if (row < size - 1) {
    arr[row][position] = arr[row+1][position]
    arr[row+1][position] = val
  }
  return arr
}

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
console.log(moveUp('h', myGrid))
console.log(moveUp('h', myGrid))
console.log(moveUp('h', myGrid))
console.log(moveDown('f', myGrid))
console.log(moveDown('f', myGrid))