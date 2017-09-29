import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import API from '../../utils/API';
import './signup.css';
import TextField from 'material-ui/TextField';
import { indigo } from 'material-ui/colors';
import Typography from 'material-ui/Typography';

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
  button:{
    width:'100%'
  },
  primaryColor: {
      background: primaryColor
   },
});

class Signup extends Component {

  constructor(props) {
      super(props);
  }

	state = {
    username: '',
    password: '',
    confirmpassword: ''
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
    }).then((response) => {
      //this.props.parent.parent.setState({isLoggedIn: true})
      //window.location.href = '/profile';

      this.props.parent.setState({isLoggedIn: true});
      console.log('login this.props', this.props);
      this.props.history.push('/profile');
      
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
          <div className="rm-signup-login-container">
          <Typography className="rm-text-align-center" type="display1" color="inherit" >
            Join our community! Completely free!
          </Typography><br/>
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
            type="password"
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
            type="password"
	          label="Confirm Password"
	          className={classes.textField}
          	  value={this.state.confirmpassword}
          	  onChange={this.handleChange('confirmpassword')}
	          placeholder="Confirm Password"
	          margin="normal"
          /><br/><br/>
            <Button raised color="primary" 
                    className={classes.button}
                    onClick={this.submitChange}
                    >Sign Up
            </Button>
          </div>

    </div>
  );
}
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
