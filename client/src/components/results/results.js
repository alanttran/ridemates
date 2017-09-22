import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

function importAll(r) {
	console.log(r)
	return r.keys().map(r);
}

const images = importAll(require.context('../../../public/images/matchedPeopIeImages', false, /\.(png|jpe?g|svg)$/));
// console.log(require.context('../public/images', false, /\.(png|jpe?g|svg)$/));
// console.log(images);

const styles = theme => ({
	root: {
	width: '100%',
	maxWidth: 360,
	background: theme.palette.background.paper,
	},
});

class Results extends React.Component {
	state = {
	matchedPeople: [0,1,2,3],
	checked: [0, 3],
	allChecked:false,
	};
//checked items array

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

		if(this.state.matchedPeople.length === this.state.checked.length) {
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
		this.setState({checked: this.state.matchedPeople, allChecked: true});
		}
		else {
		this.setState({checked: [], allChecked: false})
		}
	}

	render() {
		const classes = this.props.classes;
		const { all } = this.state;

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
					{this.state.matchedPeople.map(value => (
						<ListItem key={value} dense button className={classes.listItem}>					 
							<Avatar alt="Remy Sharp" src={images[value]} />
							<ListItemText primary={`Line item ${value + 1}`} />
							<ListItemSecondaryAction>
							   <Checkbox
							    onClick={() => this.handleToggle(value)}
							    checked={this.state.checked.includes(value)}
							/>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			</div>
		);
		}

}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);