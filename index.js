function isPalindrome(str) {

  const cleanStr = str.replace(/[^\w]/g, '');

  const lowercaseStr = cleanStr.toLowerCase();

  for (let i = 0; i < lowercaseStr.length / 2; i++) {
    if (lowercaseStr[i] !== lowercaseStr[lowercaseStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
//The function starts with a for loop that initializes a variable i to 0.
//The loop will continue as long as i is less than half the length of the string lowercaseStr.
//Inside the loop, there is an if statement that checks if the character at index i is not equal to the character at the corresponding position from the end of the string (lowercaseStr.length - 1 - i).
//If the characters are not equal, it means that the string is not a palindrome, so the function returns false.
//If the if condition is not met for all characters in the string, the function will exit the loop and reach the return true statement, indicating that the string is a palindrome.
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("hannah"))

  console.log("Expecting: false")
  console.log("=>", isPalindrome("migos"))
}

module.exports = isPalindrome;
