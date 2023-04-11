function isPalindrome(string) {

  string = string.lower()
  // Write your algorithm here
}

console.log(isPalindrome("racecar")); // true


console.log(isPalindrome("level")); // true


console.log(isPalindrome("deified")); // true


console.log(isPalindrome("hello")); // false


console.log(isPalindrome("world")); // false


console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

function isPalindrome(str) {
 
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  
  
  let start = 0;
  let end = str.length - 1;
  
 
  while (start < end) {
    
    if (str[start] !== str[end]) {
      return false;
    }
    
    start++;
    
    end--;
  }
 
  return true;

  function isPalindrome(str) {
    
    str = str.toLowerCase().replace(/[^a-z]/g, "");
    
   
    let start = 0;
    let end = str.length - 1;
    
    
    while (start < end) {
     
      if (str[start] !== str[end]) {
        return false;
      }
      
     
      start++;
      
      
      end--;
    }
    
    
    return true;
  }
  
}


/*
  Add your pseudocode here

  1. Convert the input string to lowercase and remove any non-letter characters.
2. Initialize two pointers, one at the start of the string and the other at the end.
3. While the two pointers haven't met:
    a. If the characters at the two pointers don't match, return false.
    b. Move the pointer at the start one position to the right.
    c. Move the pointer at the end one position to the left.
4. If the function has not returned false, return true.


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
