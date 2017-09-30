

// ============================================================================
//                    ride request email template        
// ============================================================================

const keys = require('../../config/prod');

// todo: REPLACED line 23 with:   ++++++++++++++++++++++++++++++++++++++
// <a href="${keys.redirectDomain}/api/request/thanks">Yes</a>
// INSTEAD OF 
// <a href="http://localhost:4000">Yes</a>
// and line 26 
// 						<a href="${keys.redirectDomain}/api/request/${email.id}/yes">Yes</a>
// 

module.exports = (email) => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h3>Let's ride!</h3>
					<p>Please answer:</p>
					<p>${email.body}</p>
					<div>
						<a href="https://${keys.redirectDomain}/api/request/${email.id}/yes">Yes</a>
					</div>
					<div>
						<a href="https://${keys.redirectDomain}/api/request/${email.id}/no">No</a>
					</div>
				</div>
			</body>
		</html>
	`;
};