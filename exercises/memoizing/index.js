// --- Directions
// Demonstrates memozing on fibonacii recursive algorithm


function memoize(targetFn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = targetFn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);
//fib.call(this, 15);

module.exports = fib;