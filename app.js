const fs = require('fs');

const args = 'My name is Mislav';

fs.writeFileSync('notes.txt', args);

console.log(`Logging this argument write to file - ${fs.readFileSync('notes.txt')}`);

const appendingArgs = ' and this is awesome';

fs.appendFileSync('notes.txt', appendingArgs)

console.log(`Logging this argument write to file - ${fs.readFileSync('notes.txt')}`);