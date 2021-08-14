const fs = require('fs');
const util = require('util');

async function getNotes() {
  const readFileAsync = util.promisify(fs.readFile);
  const text = await readFileAsync('./notes.txt');
  if (text) {
    return text.toString();
  } else {
    return 'notes.txt is empty';
  }
}

module.exports = getNotes;
