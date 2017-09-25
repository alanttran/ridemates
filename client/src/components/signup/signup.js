import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import API from '../../utils/API';

import TextField from 'material-ui/TextField';
import { indigo } from 'material-ui/colors';
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

class Signup extends Component {
	state = {
    username: 'Bat in the Hat',
    password: 'Bat',
    confirmpassword: 'Bat'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitChange = event => {
    console.log('in signup submitchange')
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log('name: ', username);
    console.log('password: ', password);

    API.createUser({  username, 
                      password
    });

    this.setState({
              username: '',
              password: '',
              confirmpassword: ''
    })
  };

  render() {
   const { classes } = this.props;
  
  return (
    <div>
      <Card className={classes.card}>
      	<CardHeader style={styles.primaryColor} className={classes.title}
			title = "Sign Up"
        />

        <CardContent>
          
          <TextField
	          required
            id="signup_username"
	          name="username"
	          label="Username"
	          className={classes.textField}
          	  value={this.state.username}
              onChange={this.handleChange('username')}	
	          placeholder="Username"
	          margin="normal"
          />
          <TextField
	          required
	          id="signup_password"
            name="password"
	          label="Password"
	          className={classes.textField}
          	  value={this.state.password}
          	  onChange={this.handleChange('password')}
	          placeholder="Password"
	          margin="normal"
          />
          <TextField
	          required
	          id="signup_password"
	          label="Confirm Password"
	          className={classes.textField}
          	  value={this.state.confirmpassword}
          	  onChange={this.handleChange('confirmpassword')}
	          placeholder="Confirm Password"
	          margin="normal"
          />
        </CardContent>

        <CardActions>
          <Button raised color="primary" 
                  className={classes.button}
                  onClick={this.submitChange}
                  >Sign Up
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
