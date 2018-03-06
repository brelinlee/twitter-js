const fs = require('fs');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

var nunjucksVars = {
  title: "An Example",
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
}
app.get('/', (req, res, next) => {
  // res.send('Hello world');
  res.render('index.html', nunjucksVars);
  next();
});

app.use('/', (req, res, next) => {
  fs.writeFile('./logFile.txt', req.toString() + "\n", {flag: 'a'}, (err) => {
    if(err) {
      console.log("The error is " + err); 
      throw err;
    }
    else console.log('success');
  });

  next();
});
app.listen(3000, () => console.log('App is running on port 3000'));
