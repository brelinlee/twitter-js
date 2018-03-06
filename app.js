const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);
app.listen(3000, () => console.log('App is running on port 3000'));
