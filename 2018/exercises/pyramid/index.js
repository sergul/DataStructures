// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    printRows(n, 0);
}

function printRows(n, rowIndex) {
    if (rowIndex === n) {
        return;
    }
    let row = '';
    let spaces = '';
    row = repeatStringNtimes('#', rowIndex * 2 + 1);
    spaces = repeatStringNtimes(' ', n - rowIndex - 1);
    console.log(spaces + row + spaces);

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

pyramid(5);

module.exports = pyramid;
