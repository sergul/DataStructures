// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let list = str.split('');
    let res = { };
    for (let char of list) {
        if (!isNaN(res[char])) {
            res[char]++;
        } else {
            res[char] = 1;
        }
    }
    
    let max = 0;
    let maxChar = '';
    for (let char in res) {
        if (res[char] > max) {
            max = res[char];
            maxChar = char;
        }
    }
    
    return maxChar;
}

//console.log(maxChar('abccccd'));

module.exports = maxChar;
