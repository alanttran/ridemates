import React, { Component } from "react";
import Results from '../components/results';


import './results.css';

let imgUrl = './images/bike-background-02.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')'
}

class ResultsPage extends Component{
	render() {	
		console.log(this.props);
		return(
			<div style={bgImage} className="rm-signup-page-container">
				<div className="rm-profile-left-panel">
					<Results 
				history={this.props.history} 
				parent={this.props.parent}
				data={this.props.data}
				>
			</Results>
				</div>
				<img className="" src="./images/biker-04.png"/>
			</div>
			
			
		)
		
	}
}

export default ResultsPage; 