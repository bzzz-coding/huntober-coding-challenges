// Huntober Day 1
/*
This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


COPY

COPY
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:


COPY

COPY
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done!
*/



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

// original message: "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
// returned: 'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'

// Huntober Week 1 Day 2
/*
This is awkward... I had a challenge planned for today, but I kept the computer open while I went to water my plants and came back to chaos on the screen. Not to worry, though! I've figured out what happened and we'll fix it today, ready to get back to our main decoding functions tomorrow.

It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.

"af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

Done it? Awesome. Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).

Oh, I also forgot that I accidentally reversed the whole string too. Flip it back around after you've dealt with the 'Eek!'s, if you will.

It should be looking a lot better now. I left the instructions for what to do now at the start of the remaining string. Do what it says and save the answer somewhere safe for tomorrow's challenge - it's key info.
*/

let day2Str = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"


function cleanUpDay2Str(str) {
  // find index of first 'c', then slice str with it
  let sliceStart = str.indexOf('c') + 1
  console.log(sliceEnd)
  let slicedStr = str.slice(sliceStart)
  console.log(slicedStr)

  // replace all 'Eek!' with ''
  let cleanedStr = slicedStr.replace(/Eek!/g, '')
  console.log(cleanedStr)

  // reverse string by splitting it into an array and reversing the array 
  let reversedStr = cleanedStr.split('').reverse().join('')

  return reversedStr
}

let day2ReturnedStr = "Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"

function day2Part2(str) {
  arr = str.split('V'.toLowerCase())
  console.log(arr)
  return arr.map((subArr, i) => {
      if (i == 0) return ''
      else return subArr[0]
  }).join('')
}

function day2StrToKeyword(str) {
  return day2Part2(cleanUpDay2Str(str))
}

// returned 'Space'

// Huntober Week 1 Day 3

let key = 'Space'

function replaceKeyChars(str, key) {
  // construct a new RegExp object
  let re = new RegExp(`[${key}]`, 'g')
  return str.replace(re, ' ')
}

let strDay1 = 'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'

// returned: '' !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs'


// Huntober Week 1 Day 4

// "   The white space at the beginning of this string doesn't match the whitespace at the end. "

// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "


function reverseString(str) {
  return str.split('').reverse().join('')
}

// returned 'sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! '


// Huntober Week 1 Day 5
/*
No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
*/

let submissions = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

let submissionArr = submissions.split(',')
console.log(submissionArr)

function filterSubmission(arr) {
  let filteredArr = arr.filter(str => {
      let lowerCasedStr = str.toLowerCase()
      console.log(`str: ${str}; lowered:${lowerCasedStr}`)

      // No empty spaces at the start or end of the submission
      let noEmptySpaces = str === str.trim()
      console.log(`No empty spaces? ${noEmptySpaces}`)

      // Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case
      let noDogRelated = lowerCasedStr.search('dog') === -1 && lowerCasedStr.search('bark') === -1 && lowerCasedStr.search('bone') === -1
      console.log(`No dog words? ${noDogRelated}`)

      // Total length of pun cannot be a multiple of 5
      let lengthIsOkay = str.length % 5 !== 0
      console.log(`length? ${lengthIsOkay}`)

      // The sum of the charCodes of the 1st and last characters must be odd
      let charCodeIsOdd = (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % 2 !== 0
      console.log(`charCode of ${str[0]}: ${str.charCodeAt(0)}; charCode of ${str[str.length - 1]}: ${str.charCodeAt(str.length - 1)}; charCode total is odd? ${charCodeIsOdd}`)

      // Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
      let centerCharIsNotE = str[Math.ceil(str.length / 2)] !== 'e'
      console.log(`centerCharIsNotE? ${centerCharIsNotE}`)

      // Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
      let evenLowerCase = str.match(/[a-z]/g) == null || str.match(/[a-z]/g).length % 2 === 0
      console.log(`match result: ${str.match(/[a-z]/g)}; evenLowerCase? ${evenLowerCase}`)

      // Must have at least 2 capital letters
      let have2Caps = str.match(/[A-Z]/g) !== null && str.match(/[A-Z]/g).length >= 2
      console.log(`match result: ${str.match(/[A-Z]/g)}; have2Caps? ${have2Caps}`)

      // Must not contain a capital 'S'
      let noS = str.search('S') === -1
      console.log(`noS? ${noS}`)

      if (noEmptySpaces && noDogRelated && lengthIsOkay && charCodeIsOdd && centerCharIsNotE && evenLowerCase && have2Caps && noS) return str
  })
  return filteredArr
}

// returned ['Teenage Mewtant Ninja Turtles', 'Rick & Meowty', "Mewster Rogers' Neighborhood"] so the number is 3


// Huntober Week 1 Day 6
/*
Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.
*/

function removeNthChar(str, int) {
  let arr = str.split('')
  let cleanArr = arr.map((char, i) => (i + 1) % int === 0 ? '' : char)
  return cleanArr.join('')
}

// returned 'sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'

// below is the code to test my guess, not part of the challenge:

let objDay6 = {
  w: 'd',
  d: 'w',
  v: 'e',
  e: 'v',
  h: 's',
  s: 'h',
  t: 'g',
  g: 't',
  l: 'o',
  o: 'l',
  f: 'u',
  u: 'f',
  m: 'n',
  n: 'm',
  i: 'r',
  r: 'i',
  y: 'b',
  b: 'y',
  p: 'k',
  k: 'p'
}

let finalTestStr = 'sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!'.toLowerCase()
function decodeSecretMessage(str) {
  let result = ''
  for (let char of str) {
      result += objDay6[char] ? objDay6[char] : char
  }
  return result
}
// "HUNTOBER 1 week down. #100Devs WE GO GET!!"


// Huntober Week 1 Day 7
/*
Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.
*/

function decodeDay7(str) {
  let charCodeArr = str.split('').map(char => {
    char = char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    let charCode = char.charCodeAt(0)
    return charCode <= 90 && charCode >= 65 ? 155 - charCode : charCode <= 122 && charCode >= 97 ? 219 - charCode : charCode
  })
  return String.fromCharCode(...charCodeArr)
}


