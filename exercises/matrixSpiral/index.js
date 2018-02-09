// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrix = [];
    let element = null;
    let rowIndex = 0;
    let colIndex = 0;
    let direction = 'leftToRight';
    let moveSize = n - 1;
    let nextLapRowIndex = 1;
    let nextLapColIndex = 0;
    const numElements = n * n;
    
    for (var i = 0; i < numElements; ++i) {
        element = {value: i + 1, row: rowIndex, column: colIndex};
        console.log(element.value);
        matrix.push(element);

        if (direction === 'leftToRight') {
            colIndex ++;
            if (colIndex === moveSize) {
                direction = 'topToBottom';
            }
        } else if (direction === 'topToBottom') {
            rowIndex++;
            if (rowIndex === moveSize) {
                direction = 'rightToLeft';
            }
        } else if (direction === 'rightToLeft') {
            colIndex --;
            if (colIndex === nextLapColIndex) {
                direction = 'bottomToTop';
                nextLapColIndex++;
            }
        } else if (direction === 'bottomToTop') {
            if (rowIndex === nextLapRowIndex) {
                direction = 'leftToRight';
                nextLapRowIndex ++;
                moveSize --;
                colIndex ++;
            } else {
                rowIndex--;
            }
        }
    }

    console.log(matrix);

}

matrix(3);

module.exports = matrix;
