function isCryptSolution(crypt, solution) {
    let convertedToObj = {};
    for (let pair of solution) {
        convertedToObj[pair[0]] = pair[1];
    }

    let digits = {};
    for (let word of crypt) {
        digits[word] = word.split('').map(function (letter) {
            return convertedToObj[letter];
        }).join('');
    }
    if ((digits[crypt[0]].length > 1 && digits[crypt[0]].charAt(0) == 0) ||
        (digits[crypt[1]].length > 1 && digits[crypt[1]].charAt(0) == 0) ||
        (digits[crypt[2]].length > 1 && digits[crypt[2]].charAt(0) == 0)) {
        return false;
    }
    return parseInt(digits[crypt[0]]) + parseInt(digits[crypt[1]]) === parseInt(digits[crypt[2]]);
}

isCryptSolution(["WASD", "IJKL", "AOPAS"],
[["W","2"], 
 ["A","0"], 
 ["S","4"], 
 ["D","1"], 
 ["I","5"], 
 ["J","8"], 
 ["K","6"], 
 ["L","3"], 
 ["O","7"], 
 ["P","9"]]);