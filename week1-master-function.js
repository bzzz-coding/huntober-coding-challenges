// ----- week 1 master function: -------

// Day1 function:
function decodeDay1(str) {
  const objDay1 = {
    '0': 'O',
    'O': '0',
    '5': 'S',
    'S': '5',
    '1': 'I',
    'I': '1',
    '6': 'G',
    'G': '6',
    '2': 'Z',
    'Z': '2',
    '7': 'L',
    'L': '7',
    '3': 'E',
    'E': '3',
    '8': 'B',
    'B': '8',
    '4': 'h',
    'h': '4',
    '9': 'q',
    'q': '9'
  }
  let result = ''
  for (let char of str) {
    result += objDay1[char] ? objDay1[char] : char
  }
  return result
}

// Day2 functions:
function cleanUpDay2Str(str) {
  // find index of first 'c', then slice str with it
  let sliceStart = str.indexOf('c') + 1
  // console.log(sliceEnd)
  let slicedStr = str.slice(sliceStart)
  // console.log(slicedStr)

  // replace all 'Eek!' with ''
  let cleanedStr = slicedStr.replace(/Eek!/g, '')
  // console.log(cleanedStr)

  // reverse string by splitting it into an array and reversing the array 
  let reversedStr = cleanedStr.split('').reverse().join('')

  return reversedStr
}

function day2Part2(str) {
  arr = str.split('V'.toLowerCase())
  // console.log(arr)
  return arr.map((subArr, i) => {
    if (i == 0) return ''
    else return subArr[0]
  }).join('')
}

function day2StrToKeyword(str) {
  return day2Part2(cleanUpDay2Str(str))
}

// Day 3 function:
function replaceKeyChars(str, key) {
  // construct a new RegExp object
  let re = new RegExp(`[${key}]`, 'g')
  return str.replace(re, ' ')
}

// Day 4 function:
function reverseString(str) {
  return str.split('').reverse().join('')
}

// Day 5 function:

function filterSubmission(str) {
  let arr = str.split(',')
  // console.log(arr)
  let filteredArr = arr.filter(str => {
      let lowerCasedStr = str.toLowerCase()
      // console.log(`str: ${str}; lowered:${lowerCasedStr}`)

      // No empty spaces at the start or end of the submission
      let noEmptySpaces = str === str.trim()
      // console.log(`No empty spaces? ${noEmptySpaces}`)

      // Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case
      let noDogRelated = lowerCasedStr.search('dog') === -1 && lowerCasedStr.search('bark') === -1 && lowerCasedStr.search('bone') === -1
      // console.log(`No dog words? ${noDogRelated}`)

      // Total length of pun cannot be a multiple of 5
      let lengthIsOkay = str.length % 5 !== 0
      // console.log(`length? ${lengthIsOkay}`)

      // The sum of the charCodes of the 1st and last characters must be odd
      let charCodeIsOdd = (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % 2 !== 0
      // console.log(`charCode of ${str[0]}: ${str.charCodeAt(0)}; charCode of ${str[str.length - 1]}: ${str.charCodeAt(str.length - 1)}; charCode total is odd? ${charCodeIsOdd}`)

      // Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
      let centerCharIsNotE = str[Math.ceil(str.length / 2)] !== 'e'
      // console.log(`centerCharIsNotE? ${centerCharIsNotE}`)

      // Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
      let evenLowerCase = str.match(/[a-z]/g) == null || str.match(/[a-z]/g).length % 2 === 0
      // console.log(`match result: ${str.match(/[a-z]/g)}; evenLowerCase? ${evenLowerCase}`)

      // Must have at least 2 capital letters
      let have2Caps = str.match(/[A-Z]/g) !== null && str.match(/[A-Z]/g).length >= 2
      // console.log(`match result: ${str.match(/[A-Z]/g)}; have2Caps? ${have2Caps}`)

      // Must not contain a capital 'S'
      let noS = str.search('S') === -1
      // console.log(`noS? ${noS}`)

      if (noEmptySpaces && noDogRelated && lengthIsOkay && charCodeIsOdd && centerCharIsNotE && evenLowerCase && have2Caps && noS) return str
  })
  return filteredArr
}

// Day 6 function:
function removeNthChar(str, int) {
  let arr = str.split('')
  let cleanArr = arr.map((char, i) => (i + 1) % int === 0 ? '' : char)
  return cleanArr.join('')
}

// Day 7 function:
function decodeDay7(str) {
  let charCodeArr = str.split('').map(char => {
    char = char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    let charCode = char.charCodeAt(0)
    return charCode <= 90 && charCode >= 65 ? 155 - charCode : charCode <= 122 && charCode >= 97 ? 219 - charCode : charCode
  })
  return String.fromCharCode(...charCodeArr)
}



function decodeSecretMessage(secretMsg, sideChallengeStr1, sideChallengeStr2) {
  // day1:
  let day1DecodedStr = decodeDay1(secretMsg)

  // day2:
  let keyword = day2StrToKeyword(sideChallengeStr1)

  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}`)

  // day3: 
  let day3DecodedStr = replaceKeyChars(day1DecodedStr, keyword)
  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}; day3: ${day3DecodedStr}`)

  // day4:
  let day4DecodedStr = reverseString(day3DecodedStr)
  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}; day3: ${day3DecodedStr}; day4: ${day4DecodedStr}`)

  // day5:
  let filteredArr = filterSubmission(sideChallengeStr2)
  let arrLength = filteredArr.length
  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}; day3: ${day3DecodedStr}; day4: ${day4DecodedStr}; day5: ${arrLength}`)

  // day6:
  let day6DecodedStr = removeNthChar(day4DecodedStr, arrLength)
  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}; day3: ${day3DecodedStr}; day4: ${day4DecodedStr}; day5: ${arrLength}; day6: ${day6DecodedStr}`)

  let day7DecodedStr = decodeDay7(day6DecodedStr)
  // console.log(`day1: ${day1DecodedStr}; day2: ${keyword}; day3: ${day3DecodedStr}; day4: ${day4DecodedStr}; day5: ${arrLength}; day6: ${day6DecodedStr}; day7: ${day7DecodedStr}`)
  return day7DecodedStr
}


// variables:
let day2Str = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

let submissions = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"