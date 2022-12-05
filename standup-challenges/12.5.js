function tallyCharacters(str) {
  return str.split('').reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj
  }, {})
}

console.log(tallyCharacters('abbaccd'))