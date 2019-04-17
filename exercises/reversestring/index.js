// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
// there are three solutions available

//    1st solution is built in solution
//    reverse for arrays
//    String > to array > reverse it > back to String
    return str.split('').reverse().join('');
}

module.exports = reverse;
