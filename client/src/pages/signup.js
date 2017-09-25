import React, { Component } from "react";
import Signup from '../components/signup';


import './signup.css';

class SignupPage extends Component{
	render(){
		return(
			<div className="rm-signup-page-container">
				
				<Signup></Signup>
				<img className="rm-signup-page-image" src="./images/biker-01.png"/>
			</div>
			
		)
		
	}
}

export default SignupPage;