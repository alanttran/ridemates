import React, { Component } from "react";
import Login from '../components/login';

import './login.css';

class LoginPage extends Component{

	render(){
		console.log("this.props.from login page",this.props);
		return(
			<div className="rm-signup-page-container">
				
				<Login history={this.props.history} parent={this.props.parent}></Login>
				<img className="rm-signup-page-image" src="./images/biker-02.png"/>
			</div>
			
			
		)
		
	}
}

export default LoginPage;