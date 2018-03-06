const router = require('express').Router();
const tweetBank = require('../tweetBank');

const __cwd = "/home/mario970/Fullstack/twitter-js";

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});


router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile(__cwd + '/public/stylesheets/style.css');
});

module.exports = router;

//const fs = require('fs');                                                                                       
//const nunjucks = require('nunjucks');
//
//nunjucks.configure('views', {
//  autoescape: true,
//  express: app,
//  noCache: true
//});
//
//app.get('/', (req, res, next) => {
//  // res.send('Hello world');
//  res.render('index.html', nunjucksVars);
//  next();
//});
//
//app.use('/', (req, res, next) => {
//  fs.writeFile('./logFile.txt', req.toString() + "\n", {flag: 'a'}, (err) => {
//    if(err) {
//      console.log("The error is " + err);
//      throw err;
//    }
//    else console.log('success');
//  });
//
//  next();
//});
