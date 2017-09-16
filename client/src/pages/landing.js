import React, { Component } from "react";
import Button from '../../node_modules/material-ui/Button';

class LandingPage extends Component{
	state={
		text: "sss"
	}

	// componentDidMount() {
 //    	this.getStuff();
 //  	}

 //  	getStuff = () => {
 //    // Get the passwords and store them in state
	//     fetch('/api/stuff')
	//       .then(res => res.json())
	//       .then(stuff => this.setState({ stuff }));
	//   }

	render() {
		const { stuff } = this.state;

	    return (
	      <Button raised color="primary">
		      stuff
		  </Button>
	    );
  }
}

export default LandingPage;