

// ============================================================================
//                    ride request email template        
// ============================================================================

module.exports = (email) => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h3>Let's ride!</h3>
					<p>Please answer:</p>
					<p>${email.body}</p>
					<div>
						<a href="http://localhost:4000">Yes</a>
					</div>
					<div>
						<a href="http://localhost:4000">No</a>
					</div>
				</div>
			</body>
		</html>
	`;
};