const express = require('express');
const _ = require('lodash');
const minimist = require('minimist');

const app = express();
const port = 3000;

// Parse command line arguments (using minimist)
const args = minimist(process.argv.slice(2));

// Example of using lodash (potentially vulnerable version)
const data = ['a', 'b', 'c'];
const shuffled = _.shuffle(data);
console.log('Shuffled data:', shuffled);

// Vulnerable code for CodeQL: Command injection
app.get('/exec', (req, res) => {
  const cmd = req.query.cmd;
  const { exec } = require('child_process');
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      res.send('Error: ' + err.message);
      return;
    }
    res.send(stdout);
  });
});

// Another vulnerable code: Eval
app.get('/eval', (req, res) => {
  const code = req.query.code;
  try {
    const result = eval(code);
    res.send('Result: ' + result);
  } catch (e) {
    res.send('Error: ' + e.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
