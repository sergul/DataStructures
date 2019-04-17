// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    var lengthOfHalf = parseInt(str.length) / 2;
    var length = str.length - 1;
    let isStringPolindrome = true;
    let arr = str.split('');
    for (let i = 0; i < lengthOfHalf; ++i) {
        if (arr[i] !== arr[length - i]) {
            isStringPolindrome = false;
            break;
        }
    }
    return isStringPolindrome;
}

//palindrome('abba');

module.exports = palindrome;