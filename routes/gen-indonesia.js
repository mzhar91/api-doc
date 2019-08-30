const Express = require('express');
const Router = Express.Router();
const Auth = require('../controllers/gen-indonesia/auth');

Router.get('/auth', function (req, res) {
	Auth.index(req, res);
});

Router.post('/auth', function (req, res) {
	Auth.create(req, res);
});

module.exports = Router;
