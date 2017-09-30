import React, { Component } from "react";
import Main from "../components/main";

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import './landing.css';
import Results from '../components/results/results';


let imgUrl = './images/biking-cover-3.png';

let coverImage = {
	backgroundImage: 'url(' + imgUrl + ')',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	marginTop: '50px'
}



class LandingPage extends Component{

	state = {
	}
	render(){
		console.log('state', this.state)
		//if(this.state.receivedData) return <Results data={this.state.result}/>;
		return(
			<div>
				
				<div style={coverImage} className="rm-cover-container">
					<Typography className="rm-cover-title" type="display3" >
							Find mates to ride with you! Anywhere!
					</Typography>
					<Main
						result={this.props.result}
						history={this.props.history} 
						peopleMatched = { this.props.getMatchedPeople } 
						parent = {this.props.parent}>
					</Main>
				</div>
				<div className="rm-landing-page-item-container">

					<Grid container spacing={0} className="rm-landing-page-item-contents" >
						
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Efficient
							</Typography>
							<p>Orica-Scott's Esteban Chaves, winner in 2016, Bahrain-Merida's Vincenzo Nibali, winner in 2015, and and Quick-Step's Daniel Martin, winner in 2014, have all been confirmed by race organizer RCS Sport, with a series of other big-name contenders expected to challenge in the so-called "Race of the Falling Leaves". </p>
						</Grid>
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Friendly
							</Typography>
							<p>Nairo Quintana (Movistar) will also ride after testing his form at the Tre Vali Varesine and Milano-Torino races on Tuesday and Thursday. Fellow Colombian Rigoberto Urán and Vuelta a España mountains classification winner Davide Villella lead the Cannondale-Drapac team, while Fabio Aru and Miguel Ángel López lead Astana, in what is likely to be the final race for Aru in Astana sky blue before his move to UAE Team Emirates for 2018.</p>
						</Grid>
						<Grid className="rm-landing-page-items" item xs={6} sm={4}>
							<Typography className="rm-text-align-center" type="display1" color="inherit" >
								Fast
							</Typography>
							<p>Adam Yates will team up with Chaves at Orica-Scott, while Philippe Gilbert and Julian Alaphilippe will support Dan Martin. Mikel Landa is part of Team Sky’s line up that includes 2016 runner-up Diego Rosa, Michal Kwiatkowski and probably Gianni Moscon. Other marquee names include Ilnur Zakarin (Katusha-Alpecin), Thibaut Pinot (FDJ), Tejay van Garderen (BMC) and Rafal Majka (Bora-Hansgrohe).</p>
						</Grid>

					</Grid>
				</div>
				
			</div>
			
		)
		
	}
}

export default LandingPage;