
/** Given two strings, write a funciton to determine
if the second string is an angram of the first. An angram
is a word, phrase, or name formed by rearranging the letters
of another, such as cinema, formed from iceman.

All inputs are lowercase and do not contain spaces

validAngram('', '') // true
validAngram('taco', 'octa') // true
validAngram('aaz', 'zza') // false
validAngram('rat', 'car') // false

*/


function validAngram(str1, str2) {
  if(str1.length !== str2.length) {
    return false; 
  }

  const strObj1 = {};
  const strObj2 = {}; 

  for(let char of str1) {
    strObj1[char] = ++strObj1[char] || 1;
  }

  for(let char of str2) {
    strObj2[char] = ++strObj2[char] || 1; 
  }

  for(let key in strObj1) {
    let hasKey = Object.keys(strObj2).indexOf(key) !== -1; 

    if(!hasKey || strObj1[key] !== strObj2[key]) {
      return false; 
    }
  }

  return true;
}

validAngram('taco', 'octa')
validAngram('', '')

// we know right away if the char lengths are different then false
// create two empty objects
// fill the two objects with key-value pairs of the letters
// then iterate through object 1 keys
// check if object to has the same key and the same value

/** 

  Another way to do this is to create one object with key-value pairs.
  You fill it with key-value pairs from the first word
  Then you iterate through the second word and check if the key is there
  If you find it, subject one from the value
  Do this until the end and return true if you pass

  There's also this little ditty which is cleaner than what I do:

  lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 

*/