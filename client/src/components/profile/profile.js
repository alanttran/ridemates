import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import { indigo, pink } from 'material-ui/colors';
import { withTheme } from 'material-ui/styles';

const primary = indigo[500]; // #F44336
const accent = pink['A200']; // #E040FB
const primaryColor = "#F44336";

const styles = theme => ({
  card: {
    maxWidth: 275,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: indigo[50],
    backgroundColor: indigo[500],
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,

  },
  button: {
    margin: theme.spacing.unit,
  },
  primaryColor: {
      background: primaryColor
   },
});

class Profile extends Component {
  // const classes = props.classes;
  //const bull = <span className={classes.bullet}>•</span>;

  state = {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    phonenum: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
  	const classes = this.props.classes;
  return (
    <div>
      <Card className={classes.card}>
      	<CardHeader style={styles.primaryColor} className={classes.title}
			title = "User Profile"
        />

        <CardContent>
          
          <TextField
	          required
	          id="firstname"
	          label="Firstname"
	          className={classes.textField}
          	  value={this.state.firstname}
          	  onChange={this.handleChange('firstname')}
	          
	          placeholder="Firstname"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="lastname"
	          label="Lastname"
	          className={classes.textField}
          	  value={this.state.lastname}
          	  onChange={this.handleChange('lastname')}
	          placeholder="Lastname"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="address-1"
	          label="Address"
	          className={classes.textField}
          	  value={this.state.address1}
          	  onChange={this.handleChange('address1')}
	          placeholder="Address"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="address-2"
	          label="Address"
	          className={classes.textField}
          	  value={this.state.address2}
          	  onChange={this.handleChange('address2')}
	          placeholder="Address"
	          margin="normal"
          />
          <TextField
	          required
	          id="city"
	          label="City"
	          className={classes.textField}
          	  value={this.state.city}
          	  onChange={this.handleChange('city')}
	          placeholder="City"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="state"
	          label="State"
	          className={classes.textField}
          	  value={this.state.state}
          	  onChange={this.handleChange('state')}
	          placeholder="State"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="zipcode"
	          label="Zipcode"
	          className={classes.textField}
          	  value={this.state.zipcode}
          	  onChange={this.handleChange('zipcode')}
	          placeholder="Zipcode"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="email"
	          label="Email"
	          className={classes.textField}
          	  value={this.state.email}
          	  onChange={this.handleChange('email')}
	          placeholder="Email"
	          
	          margin="normal"
          />
          <TextField
	          required
	          id="phonenum"
	          label="Phone Number"
	          className={classes.textField}
          	  value={this.state.phonenum}
          	  onChange={this.handleChange('phonenum')}
	          placeholder="Phone Number"
	          
	          margin="normal"
          />
        </CardContent>

        <CardActions>
          <Button raised color="primary" className={classes.button}>Submit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
