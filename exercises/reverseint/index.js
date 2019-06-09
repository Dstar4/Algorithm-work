// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   x = Math.abs(n)
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   parseInt(x);
//   return x * Math.sign(n);
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(reversed) * Math.sign(n)
}

// console.log(reverseInt(-15));

// console.log(reverseInt(25));
// console.log(0);
module.exports = reverseInt
