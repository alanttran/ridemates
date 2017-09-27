import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import {FormControlLabel } from 'material-ui/Form';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import API from "../../utils/API";

function importAll(r) {
	console.log(r)
	return r.keys().map(r);
}

//const images = importAll(require.context('../../../public/images/matchedPeopIeImages', false, /\.(png|jpe?g|svg)$/));
// console.log(require.context('../public/images', false, /\.(png|jpe?g|svg)$/));
// console.log(images);

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		background: theme.palette.background.paper,
	},
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	textField: {
	    marginLeft: theme.spacing.unit,
	    marginRight: theme.spacing.unit,
	    width: 230,
	  },
	input: {
	    margin: theme.spacing.unit,
	    width: 230,
	  },
	card: {
	    maxWidth: 340,
	    marginBottom: 10,
	  },
});

//matchedPeople is array of objects, matchedPeopleIds is array of their ids & checked is array of checked people ids
class Results extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			matchedPeople: [],
			matchedPeopleIds: [],
			Checkboxed: [0, 3],
			allChecked:false,
			checked:[],
			message: '',
		    time: '',
		    addr: '',
		};
	}
//checked items array

	// Getting all quotes when the component mounts
	// componentDidMount() {
	// 	this.getMatchedPeople();
	// }

	// getMatchedPeople() {
	// 	let newMatchedPeople = [
	// 		{id: 0, firstName:"Jaya", lastName:"Arasalike", email:"xyz@gmail.com", imageUrl:""},
	// 		{id: 1, firstName:"Fabio", lastName:"Aiello", email:"abc@gmail.com", imageUrl: ""},
	// 		{id: 2, firstName:"Alan", lastName:"Tran", email: "cde@gmail.com", imageUrl:""},
	// 		{id: 3, firstName:"Waqas", lastName:"Alsubayee", email:"efg@gmail.com", imageUrl:""},

	// 	];

	// 	//let newMatchedPeople = this.props.matchedPeople;

	// 	let newMatchedPeopleIds = [];
	// 	newMatchedPeople.map(person => { newMatchedPeopleIds.push(person.id) })

	// 	this.setState({
	// 		matchedPeople: newMatchedPeople,
	// 		matchedPeopleIds: newMatchedPeopleIds,
	// 	})
	// }
	handleToggle(value) {
	// const { checked } = this.state; //state has checked property, we are taking it out
		const currentIndex = this.state.checked.indexOf(value); // 0
		const newChecked = [...this.state.checked]; // [1, 0, 3]

		if (currentIndex === -1) {
			newChecked.push(value); // [0, 1, 3]
		} else {
			newChecked.splice(currentIndex, 1); // newChecked: [0, 3] to remove that value from checked items array
		}

		this.setState({
			checked: newChecked,
		}, this.setSelectAllCheckbox);

	};

	setSelectAllCheckbox() {

		if(this.state.matchedPeopleIds.length === this.state.checked.length) {
		  this.setState({ allchecked: true})
		  this.selectAllCheckbox.checked = true;
		}
		else {
		  this.setState({ allchecked: false})
		  this.selectAllCheckbox.checked = false;
		}
	}

	handleAllToggle() {
		if(!this.state.allChecked){ //means this.state.allchecked === false
		this.setState({checked: this.state.matchedPeopleIds, allChecked: true});
		}
		else {
		this.setState({checked: [], allChecked: false})
		}
	}

	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	    });
	};

	//backend is expecting a email Object for selected people and 
	submitChange =() => {
		
		let recipientEmails = [];
		this.state.checked.map(id => {
			let recipient = this.state.matchedPeople.filter((person) => { return (person.id === id);})
			recipientEmails.push(recipient[0].email);
			recipientEmails.join();
		})

		let emailObject = {
			title: `Request to ride at ${this.props.where} on ${this.props.when}`,
			body: `Hello! [sender] would like to ride with you. If you would like to join, please meet at ${this.state.addr} at ${this.state.time}`,
			recipients: recipientEmails,
		}

		API.selectedPeople(emailObject);
	}


	render() {
		const classes = this.props.classes;
		const { all } = this.state;
		console.log('props', this.props);
		console.log("Results ", this.props.data);
		if(this.state.matchedPeople.length === 0) {
			return <div>Oops! Sorry, we did not find any matching ridemates in {this.props.where} area </div>;
		}

		return (
			<div className={classes.root}>
				<h4>The Ridemates search shows that people listed below have similar insterest in biking as you. </h4>
				<p> Please select the check box on right and select date and time to message them.</p>

				<FormControlLabel
				    control={
						<Checkbox
							onClick={() => this.handleAllToggle()}
							checked={this.state.allChecked}
							ref = { (element) => { this.selectAllCheckbox = element; } }
						/>
				    }
				    label="Select All"
				/>
				<List>
					{this.state.matchedPeople.map(person => (
						<ListItem key={person.id} dense button className={classes.listItem}>					 
							<Avatar alt=  "`${person.firstName}`" src= { `${person.imageUrl}` }/>
							<ListItemText primary={`${person.firstName}  ${person.lastName}`}/>
							<ListItemSecondaryAction>
							   <Checkbox
							    onClick={() => this.handleToggle(person.id)}
							    checked={this.state.checked.includes(person.id)}
							/>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			
				<div>
					<Card className={classes.card}>
						<CardContent>
				      			        
							<TextField
								value={`Hello! Would you like to join me on a bike ride at ${this.props.where} on ${this.props.when} `}
								multiline
								className={classes.input}
								disabled
								id="message"
								name="message"
								inputProps={{
								  'aria-label': 'Description',
								}}
							/> 
					        
					          
							<TextField
								id="time"
								name="time"
								label="At this time"          
								className={classes.textField}
								value={this.state.time}
								onChange={this.handleChange('time')}  
								InputLabelProps={{
								shrink: true,
								}}
							/>

					        <TextField
					            label="Address of the meeting place"
					            placeholder="Placeholder"
					            id="message-addr"
					            name="addr"
					            multiline
					            className={classes.textField}
					            value={this.state.username}
					            onChange={this.handleChange('time')}  
					            margin="normal"
					        />
				        </CardContent>
				        
				        <CardActions>
					        <Button raised color="primary" className={classes.button} onClick={this.submitChange} id="emailButton">Message</Button>
				        </CardActions>
			      
			      </Card>

			    </div>  
      		</div>

		);
	}

}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);