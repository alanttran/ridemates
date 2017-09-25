import React, { Component } from "react";
import Main from "../components/main";

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import './landing.css';

let imgUrl = './images/biking-cover-3.png';

let coverImage = {
	backgroundImage: 'url(' + imgUrl + ')',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	marginTop: '50px'
}



class LandingPage extends Component{
	render(){
		return(
			<div>
				
				<div style={coverImage} className="rm-cover-container">
					<Typography className="rm-cover-title" type="display3" >
							Find Friends to ride with you! Anywhere!
					</Typography>
					<Main></Main>
				</div>
				<div className="rm-landing-page-item-container">

					<Grid container spacing={0} className="rm-landing-page-item-contents" >
						
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Efficient
							</Typography>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
						</Grid>
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Friendly
							</Typography>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
						</Grid>
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Fast
							</Typography>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.</p>
						</Grid>

					</Grid>
				</div>
				
			</div>
			
		)
		
	}
}

export default LandingPage;