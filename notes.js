const fs = require('fs');

function getNotes() {
  return fs.readFileSync('./notes.txt').toString();
}

module.exports = getNotes;