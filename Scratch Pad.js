

// Here is where we take a string
// and assign it to a key-value pair

const strObj = {};
let str = "Hello there it's time for fun."
str = str.toLowerCase();

let strRegex = new RegExp(/^[a-z0-9]+$/i);

for(let char of str) {
  if(strRegex.test(char)){
  strObj[char] = ++strObj[char] || 1
  }
}

let newObject = {}
newObject[1] = "Mark"
newObject["02"] = "Hooray!"