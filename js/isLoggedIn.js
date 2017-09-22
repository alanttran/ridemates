
//=============================================================================
//							Authentication function
//=============================================================================
// checks if user is logged in and returns true or false

module.exports = function (req, res, next) {
	console.log('in isLoggedIn =========================');
	console.log('req: ', req);
	if(req.isAuthenticated()) {
		return next();
		console.log('user: ', req.user);
	}
	res.redirect('/login');
}