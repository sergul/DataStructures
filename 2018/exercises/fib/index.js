// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n < 2) {
        return n;
    }
    let first = 0;
    let second = 1;
    let sum = first + second;
    for (let i = 1; i < n; ++i) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
}

console.log(fib(8));

module.exports = fib;
