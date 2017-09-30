import React, { Component } from "react";
import Typography from 'material-ui/Typography';
import './confirmation.css';

class ConfirmationPage extends Component{
	render(){
		return(
			
			<div className="rm-signup-page-container">
				
				<Typography type="display1" color="inherit" >
		            No problem!<br/> We look forward to the <br/>next time you ride!
		          </Typography>
				<img className="rm-signup-page-image" src="/images/biker-03.png"/>
			</div>
		)
		
	}
}

export default ConfirmationPage;