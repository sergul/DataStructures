// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = str.split(' ');
    let capatalized = str.slice(0);
    for (let word of words) {
        let capatalizedWord = capatalizeWord(word);
        capatalized = capatalized.replace(word, capatalizedWord);
    }
    return capatalized;
}

function capatalizeWord(word) {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let rest = word.slice(1);
    return firstLetter + rest;
}

capitalize('hi there, how is it going?');

module.exports = capitalize;
