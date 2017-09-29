// export default Lpage; 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import API from '../../utils/API';
import Typography from 'material-ui/Typography';

import './login.css';

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
  primaryColor: {
      background: primaryColor
   },
});

class Login extends Component {
	state = {
    username: '',
    password: ''
    
  };
 
 // this.submitChange = this.submitChange.bind(this);
 //  }
	
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitChange = (event) => {
    console.log('in login submitchange')
    event.preventDefault();
    console.log(this);
    const username = this.state.username;
    const password = this.state.password;
    console.log('name: ', username);
    console.log('password: ', password);
    console.log("this.props",this.props);
    API.loginUser({  username, 
                      password
    }).then((response) => {
      //this.props.handler(this.setState({isLoggedIn: true}));
      console.log("this is this",this);
      console.log(this.props);
      console.log(this.props.parent);
      // window.location.href = '/';
      this.props.parent.setState({isLoggedIn: true});
      console.log('login this.props', this.props);
      this.props.history.push('/');
    });

    this.setState({
              username: '',
              password: ''
    })
  };


  render() {
   const { classes } = this.props;
  
  return (
    <div>
          <div className="rm-signup-login-container">
            <Typography className="rm-text-align-center" type="display1" color="inherit">
              Welcome Back! Let's Ride!
            </Typography><br/>
            <TextField
  	          required
  	          id="login_username"
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
  	          id="login_password"
              type="password"
              name="password"
  	          label="Password"
  	          className={classes.textField}
            	  value={this.state.password}
            	  onChange={this.handleChange('password')}
  	          placeholder="Password"	          
  	          margin="normal"
            /><br/><br/>
            <Button raised color="primary" 
                    className={classes.button}
                    onClick={this.submitChange}
                    >Log In
            </Button>
          </div>
    </div>
  );
}
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
