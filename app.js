const Express = require('express');
const App = Express();
const Router = Express.Router();
const Db = require('./db');
const GenIndo = require('./routes/gen-indonesia');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

App.engine('html', require('ejs').renderFile);
App.set('view engine', 'html');
App.use(Express.urlencoded({extended: true}));
App.use(Express.static(path));
App.use('/gen-indo', GenIndo);

App.listen(port, function () {
	console.log(`Example app listening on ${port}!`);
});
