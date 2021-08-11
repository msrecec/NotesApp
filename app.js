const fs = require('fs');

const args = 'My name is Mislav';

fs.writeFileSync('notes.txt', args);

console.log(`Logging this argument write to file - ${args}`);