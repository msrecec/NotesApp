const validator = require('validator');
const getNotes = require('./notes.js');
const fs = require('fs');
const util = require('util');

async function myAsync(file = 'util.txt') {
  const readFileAsync = util.promisify(fs.readFile);

  const buff = await readFileAsync(file);

  if (buff) {
    return buff.toString();
  } else {
    return `There is no text in ${file}`;
  }
}

async function myApp() {
  const myNotes = await getNotes();

  console.log(`Contents of notes.txt are: ${myNotes}`);

  const utilNotes = await myAsync('./util.txt');

  console.log(`Contents of util.txt are: ${utilNotes}`);

  console.log(validator.isEmail('mislav@example.com'));
  console.log(validator.isURL('https://www.mislavexample.com'));
}

myApp();
