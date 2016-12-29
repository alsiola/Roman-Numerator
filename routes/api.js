module.exports = function (app) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	app.get('/api/currentuser', isLoggedIn, function (req, res) {
		res.json({name : req.user.github.displayName});
	});
};