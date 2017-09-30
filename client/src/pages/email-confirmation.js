import React, { Component } from "react";
import Typography from 'material-ui/Typography';
import './confirmation.css';
let imgUrl = '/images/bike-background-02.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')'
}
class ConfirmationPage extends Component{
	render(){
		return(
			
			<div style={bgImage} className="rm-signup-page-container">
				
				<Typography type="display1" color="inherit" >
		            Great! You are awesome!<br/> We hope you have a fun ride<br/> with your mates!
		          </Typography>
				<img className="rm-signup-page-image" src="/images/biker-03.png"/>
			</div>
		)
		
	}
}

export default ConfirmationPage;