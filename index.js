
let val = 'lal'
isPalindrome(val)

function isPalindrome(word) {
  // Write your algorithm here
  let normal = word
  let reverse = (word) => {
    let reversed = word.split('').reverse().join('')
    console.log (reversed)
    return reversed;
  }

  if(normal === reverse(word)){
    return true
  }else{
    return false
  }
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
