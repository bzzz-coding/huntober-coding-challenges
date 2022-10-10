# huntober-coding-challenges

## Week 1: String methods:

### Day 2
- String.indexOf() 
  let sliceEnd = str.indexOf('c') + 1
- String.slice() 
  let slicedStr = str.slice(sliceEnd)
- String.replace()
- String.split()
- Array.reverse()
- Array.join()
- String.toLowerCase()
- Array.map()

### Day 3
- Construct a new RegExp() object: 
  function replaceKeyChars(str, key) {
    // construct a new RegExp object
    let re = new RegExp(`[${key}]`, 'g')
    return str.replace(re, ' ')
  }

### Day 5
- String.trim()
- String.search()
- String.length()
- String.charCodeAt()

### Day 7
- String.toUpperCase()
- String.fromCharCode()

## Week 1: Array methods:

### Day 1
- Array.every()