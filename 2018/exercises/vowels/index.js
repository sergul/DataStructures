// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var patern = ['a', 'e', 'i', 'o', 'u'];
    var srcArr = str.toLowerCase().split('');
    var numVowels = 0;
    for (var item of patern) {
        var index = srcArr.indexOf(item);
        if (index > -1) {
            numVowels++;
        }
    }
    return numVowels;
}

//vowels('AAEIOUuuuuuuuuuuuuu');

module.exports = vowels;
