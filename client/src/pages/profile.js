import React, { Component } from "react";
import Profile from '../components/profile';

import './profile.css';

let imgUrl = './images/bike-background-02.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')',
  minHeight:'100%',
  width:'100%'
}

class ProfilePage extends Component{
	render(){
		return(
			<div style={bgImage}>
				<div  className="rm-profile-container">
					<div className="rm-profile-left-panel">
						<Profile history={this.props.history} parent={this.props.parent}></Profile>
					</div>
					<img className="" src="./images/biker-04.png"/>
				</div>
			</div>
		)
		
	}
}

export default ProfilePage;