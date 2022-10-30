// For dev purposes only.

const express = require('express');

const app = express();

app.use(express.static('.'));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
