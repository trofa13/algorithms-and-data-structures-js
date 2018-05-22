// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 2) RegExp solution
function vowels(str) {
    const match = str.match(/[aeiou]/ig);
    
    return match ? match.length : 0;
}

module.exports = vowels;

// 1) iterative solution

// function vowels(str) {
//     const vowels = {
//         a: true,
//         e: true,
//         i: true,
//         o: true,
//         u: true
//     };
//     let counter = 0;

//     for (let char of str.toLowerCase()) {
//         if (vowels[char]) {
//             counter ++;
//         }
//     }
//     return counter;
// }
