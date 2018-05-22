// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 2) Recursive solution
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }
    
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;


// 1) Itertive solution
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= krow) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair)
//     }
// }