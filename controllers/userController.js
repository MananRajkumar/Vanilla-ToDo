const fs = require('fs');
const path = require('path');

async function signUp(req, res) {
    console.log(`User Signed Up!!!`);
    res.send("<h1>User Signed Up Again!!!</h1>");
}

async function signIn(req, res) {
    console.log(`User Signed Up!!!`);
    res.send("<h1>User Signed Up!!!</h1>");
}

async function signOut(req, res) {

}

async function getFileContent(req, res) {
    const filePath = path.join(__dirname, '../database.json');
    // const filePath = (__dirname);
    console.log(filePath);
  
    // Read the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return res.status(500).json({ error: 'Failed to read file' });
      }
  
      // Send the file content as JSON
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    });
}

module.exports = { signUp, signIn, signOut, getFileContent }