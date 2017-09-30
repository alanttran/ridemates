import React, { Component } from "react";
import Results from '../components/results';


import './results.css';

class ResultsPage extends Component{
	render() {	
		console.log(this.props);
		return(
			<div>
			<Results 
				history={this.props.history} 
				parent={this.props.parent}
				data={this.props.data}
				>
			</Results>
			

			</div>
			
		)
		
	}
}

export default ResultsPage; 