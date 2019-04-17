// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    printRows(n, 1);
}

function printRows(n, rowIndex) {
    if (rowIndex === n + 1) {
        return;
    }
    let row = '';
    let spaces = '';
    row = repeatStringNtimes('#', rowIndex);
    spaces = repeatStringNtimes(' ', n - rowIndex);
    console.log(row + spaces);

    printRows(n, rowIndex + 1);
}

function repeatStringNtimes(str, n) {
    let repeatedString = '';

    while (n > 0) {
        repeatedString += str;
        --n;
    }
    return repeatedString;
}

//steps(2);

module.exports = steps;
