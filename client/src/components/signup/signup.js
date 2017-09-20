import React, { Component } from 'react';
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

class Signup extends Component {
	state = {
    username: 'Cat in the Hat',
    password: 'Cat',
    confirmpassword: 'Cat',
    
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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
	          label="Username"
	          className={classes.textField}
          	  value={this.state.username}
              onChange={this.handleChange('username')}	
	          placeholder="Username"
	          margin="normal"
          />
          <TextField
	          required
	          id="sgnup_password"
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
          <Button raised color="primary" className={classes.button}>Sign Up</Button>
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
