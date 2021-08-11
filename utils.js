
const fs = require('fs');

function getNotes() {
  return fs.readFileSync('./notes.txt');
}

module.exports = getNotes.bind(this);