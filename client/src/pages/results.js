import React, { Component } from "react";
import Results from '../components/results';


import './results.css';

class ResultsPage extends Component{
	render() {
		console.log(this.props);
		return(
			<div>
			<Results where = {this.props.match.params.where  } when = { this.props.match.params.when } matchedPeople = { this.props.matchedPeople }></Results>
			

			</div>
			
		)
		
	}
}

export default ResultsPage;