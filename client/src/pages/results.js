import React, { Component } from "react";
import Results from '../components/results';
import Email from '../components/email';

import './results.css';

class ResultsPage extends Component{
	render(){
		return(
			<div>
			<Results></Results>
			<Email></Email>
			</div>
			
		)
		
	}
}

export default ResultsPage;