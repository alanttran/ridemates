import React, { Component } from "react";
import Main from "../components/main";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

class LandingPage extends Component{
	render(){
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography type="title" color="inherit" >
							RideMates
						</Typography>
						<Button color="contrast">Login</Button>
					</Toolbar>
				</AppBar>
				<img src={'./images/biking.jpeg'} alt="biking"/>
				<Main></Main>
			</div>
			
		)
		
	}
}

export default LandingPage;