import React, { Component } from "react";
import Signup from '../components/signup';


import './signup.css';

let imgUrl = './images/bike-background-02.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')'
}

class SignupPage extends Component{
	render(){
		return(
			<div style={bgImage} className="rm-signup-page-container">
				
				<Signup history={this.props.history} parent={this.props.parent}></Signup>
				<img className="rm-signup-page-image" src="./images/biker-01.png"/>
			</div>
			
		)
		
	}
}

export default SignupPage;