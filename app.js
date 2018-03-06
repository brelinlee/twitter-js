const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

app.use('/', (req, res, next) => {
  fs.writeFile('./logFile.txt', req.toString(), {flag: 'a'}, (err) => {
    if(err) throw err;
    else console.log('success');
  });

  next();
});
app.listen(3000, () => console.log('App is running on port 3000'));
