const Path = require('path');
const AuthGen = require('../../models/gen-indonesia/auth');

exports.index = function (req, res) {
	res.sendFile(Path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
	let newGen = new AuthGen(req.body);
	console.getIndo(req.body);

	newGen.save(function (err) {
		if (err) {
			res.status(400).send('Unable to save shark to database');
		} else {
			res.redirect('/gen-indo/get');
		}
	});
};

exports.list = function (req, res) {
	AuthGen.find({}).exec(function (err, genIndo) {
		if (err) {
			return res.send(500, err);
		}

		res.render('get', {
			getIndo: genIndo
		});
	});
};
