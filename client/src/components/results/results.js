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
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

import './results.css';


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
		flex: '1 1 auto'
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

let bigButton = {
	width: '100%'
}

let fontsize19 = {
	fontSize: '19px'
}

//matchedPeople is array of objects, matchedPeopleIds is array of their ids & checked is array of checked people ids
class Results extends React.Component {
	constructor(props){
		super(props);

		let tempMatchedPeopleIds = []

		if(!this.props.data){
			this.props.history.push('/');
		}
		else{
			this.props.data.results.map(person => {tempMatchedPeopleIds.push(person._id) });
			this.state = {
				where: this.props.data.where,
				matchedPeople: this.props.data.results,
				matchedPeopleIds: tempMatchedPeopleIds,
				checked:[],
				message: '',
			    time: '',
			    address: '',
			    currentUser: '',
			    confirmationModalOpen: false,
			    errorModalOpen: false
			};
		}
			
	}

	componentWillMount(){
		API.userProfile().then((res)=>{
			console.log(res.data._id);
			this.setState({currentUser: res.data })
		})
		if(!this.props.data){
			this.props.history.push('/');
		}
	}

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
		}/*, this.setSelectAllCheckbox*/);

	};


	handleAllToggle(isAllChecked) {
		if (!isAllChecked.isAllChecked) { //means this.state.allchecked === false
			this.setState({checked: this.state.matchedPeopleIds});
		}
		else {
			this.setState({checked: []})
		}
	}

	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	    });
	};

	dismissConfirmationModal = () => {
		this.props.history.push('/');
		this.setState({confirmationModalOpen: false})
	};

	dismissModal = () => {
		this.setState({confirmationModalOpen: false, errorModalOpen: false})
	};

	//backend is expecting a email Object for selected people and 
	submitChange =() => {
		
		let recipientEmails = [];

		if(this.state.checked.length > 0){
			this.state.checked.map(id => {
			let recipient = this.state.matchedPeople.filter((person) => { 
				return (person._id === id);
			})
				recipientEmails.push(recipient[0].email);			
			})

			let recipientString  = recipientEmails.join(); 

			let emailObject = {
				title: `Request to ride at ${this.state.where}`,
				body: `Hello! ${this.state.currentUser.firstname} would like to ride with you. If you would like to join, please meet here: ${this.state.address}`,
				recipients: recipientString
			}

			API.emailRequest(emailObject).then((response) => {
				console.log("results checked people" + this.state.checked.length);
				this.setState({confirmationModalOpen: true }) 
				
			});

		}
		else{
			this.setState({errorModalOpen: true }) 
		}

		
	}


	render() {
		const classes = this.props.classes; 
		//const { all } = this.state;
		// console.log('props', this.props);
		// console.log("Results ", this.props.data);
		if(this.state.matchedPeople.length === 0) {
			return <div>Oops! Sorry, we did not find any matching ridemates in {this.state.where}</div>;
		}

	    // Recalculate if everything is checked each render, instead of storing it
	    var isAllChecked = this.state.checked.length === this.state.matchedPeopleIds.length;		

		return (
			<div>
				<div className="rm-results-layout-container">
					<div>
						<Typography type="display1" color="inherit" >
			            	We found some riders nearby!
			           	</Typography>
						<p>Select any number of them and we'll email them for you!</p>

						<FormControlLabel
						    control={
								<Checkbox
									onClick={() => this.handleAllToggle({isAllChecked})}
									checked={isAllChecked}
								/>
						    }
						    label="Select All"
						/>
						<List className="rm-results-list">
							{	this.state.matchedPeople.filter(person => 
									 person._id != this.state.currentUser._id
								).map(person => (

								<ListItem key={person._id} dense button className={classes.listItem}>					 
									<Avatar alt={`${person.firstname}`} src="http://i.pravatar.cc/100/"/>
									<ListItemText style={fontsize19} primary={`${person.firstname}  ${person.lastname}`}/>
									<ListItemSecondaryAction>
									   <Checkbox
									    onClick={() => this.handleToggle(person._id)}
									    checked={this.state.checked.includes(person._id)}
									/>
									</ListItemSecondaryAction>
								</ListItem>
								
							))}
						</List>
					</div>
				
					<div className="rm-results-right-panel">
						<Card className={classes.card}>
							<CardContent>
					      			        
								<p>
									Hello! I would like to ride with you. If you would like to join, please meet me at...
								</p>
						        

						        <TextField
						            label="Meeting place"
						            placeholder="eg. Starbucks on 1st"
						            id="message-addr"
						            name="address"
						            multiline
						            className={classes.textField}
						            value={this.state.username}
						            onChange={this.handleChange('address')}  
						            margin="normal"
						        />
					        </CardContent>
					        
					        <CardActions>
						        <Button style={bigButton} raised color="primary" className={classes.button} onClick={this.submitChange} id="emailButton">Message</Button>
					        </CardActions>
				      
				      </Card>

				    </div> 
			    </div>
			    <Dialog open={this.state.confirmationModalOpen}>
			    	<DialogTitle>Message(s) sent!</DialogTitle>
			    	<DialogContent>
			            <DialogContentText>
			              Your chosen ridemate(s) should respond shortly! We will let you know whenever a rider would like to join you.
			            </DialogContentText>
			          </DialogContent>
			          <DialogActions>
			            <Button color="primary" className={classes.button} onClick={this.dismissConfirmationModal} >Cool!</Button>
			          </DialogActions>
			    </Dialog> 
			    <Dialog open={this.state.errorModalOpen}>
			    	<DialogTitle>No riders were selected!</DialogTitle>
			    	<DialogContent>
			            <DialogContentText>
			              Please select at least one rider for us to send them an email
			            </DialogContentText>
			          </DialogContent>
			          <DialogActions>
			            <Button color="primary" className={classes.button} onClick={this.dismissModal} >Okay</Button>
			        </DialogActions>
			    </Dialog> 
      		</div>

		);
	}

}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);