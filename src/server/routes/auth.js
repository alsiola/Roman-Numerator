module.exports = (app, passport) => {
    app.get('/auth/github', passport.authenticate('github'));

	app.get('/auth/github/callback', 
		passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		})
	);
}