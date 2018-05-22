// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const escapeAndSort = (string) => {
    const escapedString = string.replace(/[^\w]/g, '').toLowerCase();
    
    return escapedString.split('').sort().join('');
}

function anagrams(stringA, stringB) {
    return escapeAndSort(stringA) === escapeAndSort(stringB);
}

module.exports = anagrams;


// 1) first way to solve, with helper

// const generateCharMap = (string) => {
//     const charMap = {};
//     const escapedString = string.replace(/[^\w]/g, '').toLowerCase();
//     for (let char of escapedString) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     const stringAMap = generateCharMap(stringA);
//     const stringBMap = generateCharMap(stringB);

//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false;
//     }

//     for (let char in stringAMap) {
//         if (stringAMap[char] !== stringBMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }