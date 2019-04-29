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

//function reverse(str) {
// there are three solutions available

//    1st solution is built in solution
//    reverse for arrays
//    String > to array > reverse it > back to String
//   return str.split('').reverse().join('');
}

// 2nd approach with for each techinique

// function reverse(str) {
//   let reversed = '';
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }


// 3rd method
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }


module.exports = reverse;

