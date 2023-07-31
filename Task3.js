const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordCount = data.split(/\s+/).filter(word => word !== '').length;
  console.log('Total word count:', wordCount);
});


//for this file to execute
  //node Task3.js