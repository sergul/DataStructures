// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const chars = str.split('');
    const num = parseInt(str.length / 2);
    for (var i = 0; i < num; ++i) {
        let res = chars[i];
        let reverseIndex = chars.length - (i + 1);
        chars[i] = chars[reverseIndex];
        chars[reverseIndex] = res;
    }
    return chars.join('');
}

//reverse('hello');

module.exports = reverse;
