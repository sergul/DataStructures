// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let resArr = [];
    let diff = 0.1;
    let devision = 0;
    let rounded = 0;
    let result = 0;
    while (n >= 10 || n <= -10) {
        devision =  (n / 10);
        rounded = parseInt(devision);
        diff = (devision - rounded).toFixed(1);
        diff =  Math.abs(parseFloat(diff) * 10);
        resArr.push(diff);
        n = rounded;
    }
    resArr.push(Math.abs(n));
    result = parseInt(resArr.join('')) * Math.sign(n);
    return result;
}

console.log(reverseInt(19700005));

module.exports = reverseInt;
