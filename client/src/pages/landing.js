import React, { Component } from "react";
import Main from "../components/main";

import Typography from 'material-ui/Typography';
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