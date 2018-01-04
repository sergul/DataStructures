// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
    
    const objA = getMapObj(stringA);
    const objB = getMapObj(stringB);

    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    for (let item in objA) {
        if (objA[item] !== objB[item]) {
            return false;
        }
    }

    return true;
}

function getMapObj(str) {
    let srcObj = {};
    for (let item of str) {
        srcObj[item] = srcObj[item] + 1 || 1;
    }
    return srcObj;
}

//anagrams('rail safety', 'fairy tales');
module.exports = anagrams;
