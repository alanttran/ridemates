import React, { Component } from "react";
import Main from "../components/main";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';

import './landing.css';

let imgUrl = './images/biking-cover.png';

let coverImage = {
	backgroundImage: 'url(' + imgUrl + ')',
	backgroundRepeat: 'no-repeat'
}

class LandingPage extends Component{
	render(){
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography className="rm-flex-auto" type="title" color="inherit" >
							RideMates
						</Typography>
						<Button className="rm-login-button" color="contrast">Login</Button>
						<Button className="rm-signup-button" color="contrast">Sign Up</Button>
					</Toolbar>
				</AppBar>
				<div style={coverImage} className="rm-cover-container">
					<Typography className="rm-cover-title" type="display3" >
							Find friends to ride with!
					</Typography>
					<Main></Main>
				</div>
				<Grid container spacing={0}>
					<Grid className="rm-landing-page-items" item xs={6} sm={3}>
						<Typography className="rm-text-align-center" type="display1" color="inherit" >
							Efficient
						</Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
					</Grid>
					<Grid className="rm-landing-page-items" item xs={6} sm={3}>
						<Typography className="rm-text-align-center" type="display1" color="inherit" >
							Friendly
						</Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
					</Grid>
					<Grid className="rm-landing-page-items" item xs={6} sm={3}>
						<Typography className="rm-text-align-center" type="display1" color="inherit" >
							Fast
						</Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
					</Grid>
					<Grid className="rm-landing-page-items" item xs={6} sm={3}>
						<Typography className="rm-text-align-center" type="display1" color="inherit" >
							RideMates
						</Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
					</Grid>
				</Grid>
				
			</div>
			
		)
		
	}
}

export default LandingPage;