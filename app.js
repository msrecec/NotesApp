const validator = require('validator');
const getNotes = require('./notes.js');

const myNotes = getNotes();
console.log(myNotes);

console.log(validator.isEmail('mislav@example.com'));
console.log(validator.isURL('https://www.mislavexample.com'));
