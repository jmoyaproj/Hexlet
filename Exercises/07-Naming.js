// You've come across some code printing the total number of rooms owned by the present king:
// const king = 'King Balon the 6th';
// console.log(king + ' has ' + (6 * 17) + ' rooms.');
// Get rid of the magic numbers by creating new variables and print them.
// The variable names should give the meaning of the numbers,
// but should also be short and succinct enough to be readable.

const king = 'King Balon the 6th';

let castles = 6;
let rooms = 17;

console.log(king + ' has ' + (castles * rooms) + ' rooms.');