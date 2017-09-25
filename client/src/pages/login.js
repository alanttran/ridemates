import React, { Component } from "react";
import Login from '../components/login';

import './login.css';

class LoginPage extends Component{
	render(){
		return(
			<div className="rm-signup-page-container">
				
				<Login></Login>
				<img className="rm-signup-page-image" src="./images/biker-02.png"/>
			</div>
			
			
		)
		
	}
}

export default LoginPage;