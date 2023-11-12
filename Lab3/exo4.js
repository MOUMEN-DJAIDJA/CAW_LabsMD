const fs = require('fs');

// Get command line arguments
const args = process.argv.slice(2);

// Check if there are enough arguments
if (args.length < 2) {
  console.log('Usage: node exo4.js <filename> <text to be saved>');
  process.exit(1);
}

// Extract filename and text from arguments
const filename = args[0];
const text = args.slice(1).join(' ');

// Write text to file
fs.writeFile(filename, text, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('The file has been saved!');
    
    // Read and display the contents of the file
    fs.readFile(filename, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading file:', readErr);
      } else {
        console.log(`Contents of ${filename}:`);
        console.log(data);
      }
    });
  }
});