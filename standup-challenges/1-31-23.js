/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x,y){
  let smallerInt = Math.min(x, y)
  for (let i = smallerInt; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i
    }
  }
}

console.log(mygcd(30,12),6)

function recGCD(x, y) {
  let bigger = x >= y ? x : y;
  let smaller = x <= y ? x : y;

  if (smaller === 0) return bigger
  return recGCD(smaller, bigger % smaller)
}

console.log(recGCD(30, 12), 6)
console.log(recGCD(12, 30), 6)
console.log(recGCD(48, 14), 2)
console.log(recGCD(14, 48), 2)

// 48, 14
// first, get the remainder of biggerInt % smallerInt
// 48 = 14 * 3 + 6  
// then, get remainder of smallerInt % remainder from the previous calculation
// 14 = 6 * 2 + 2
// repeat until we have a remainder of 0, then, the GCD is the previous remainder, in this case, 2
// 6 = 2 * 3 + 0