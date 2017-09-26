import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import API from '../../utils/API';
import Checkbox from 'material-ui/Checkbox';

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

class Profile extends Component {
  // const classes = props.classes;
  //const bull = <span className={classes.bullet}>•</span>;

  state = {
    firstname: 'FakeBob',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    phonenum: '',
    radius: '',
    rideTypeRoad: true,
    rideTypeMountain: false,
    rideTypeOther: false,
    difficultyEasy: true,
    difficultyIntermediate: true, 
    difficultyHard: false 
  };

  componentDidMount = () => {
    console.log("profile component mount");

    API.userProfile()
     .then(res => {
      console.log(res.data);
        this.setState({ 
          firstname:            res.data.firstname,
          lastname:             res.data.lastname,
          address:              res.data.address, 
          city:                 res.data.city,
          state:                res.data.state,
          zipcode:              res.data.zipcode,
          email:                res.data.email,
          phonenum:             res.data.phonenum,
          radius:               res.data.radius,
          rideTypeRoad:         res.data.rideTypeRoad,
          rideTypeMountain:     res.data.rideTypeMountain,
          rideTypeOther:        res.data.rideTypeOther,
          difficultyEasy:       res.data.difficultyEasy,
          difficultyIntermediate: res.data.difficultyIntermediate, 
          difficultyHard:        res.data.difficultyHard
          
        });
      })
  }

  handleChange = name => event => {
    console.log(name);
    this.setState({ [name]: event.target.value });
  };

   handleCheckboxChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  submitChange = event => {
    console.log('in signup submitchange')
    event.preventDefault();
    console.log('state: ', this.state);

    API.createUserProfile(this.state);

    // this.setState = {
    //   firstname: '',
    //   lastname: '',
    //   address: '',
    //   city: '',
    //   state: '',
    //   zipcode: '',
    //   email: '',
    //   phonenum: '',
    //   radius: '',
    //   rideType: {},
    //   difficulty: {}
    // };
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
	          name="firstname"
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
	          name="lastname"
	          label="Lastname"
	          className={classes.textField}
          	  value={this.state.lastname}
          	  onChange={this.handleChange('lastname')}
	          placeholder="Lastname"
	          
	          margin="normal"
          />
          <TextField
	          required
            id="address"
	          name="address"
	          label="Address"
	          className={classes.textField}
          	  value={this.state.address}
          	  onChange={this.handleChange('address')}
	          placeholder="Address"
	          
	          margin="normal"
          />
          <TextField
	          required
            id="city"
	          name="city"
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
	          name="state"
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
	          name="zipcode"
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
	          name="email"
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
	          name="phonenum"
	          label="Phone Number"
	          className={classes.textField}
          	  value={this.state.phonenum}
          	  onChange={this.handleChange('phonenum')}
	          placeholder="Phone Number"
	          
	          margin="normal"
          />
          <TextField
            required
            id="radius"
            name="radius"
            label="Radius of riding area"
            className={classes.textField}
              value={this.state.radius}
              onChange={this.handleChange('radius')}
            placeholder="Radius of riding area"
            
            margin="normal"
          />
          <FormGroup>
            Type

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.rideTypeRoad}
                  onChange={this.handleCheckboxChange('rideTypeRoad')}
                  value="road"
                />
              }
              label="Road Biking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.rideTypeMountain}
                  onChange={this.handleCheckboxChange('rideTypeMountain')}
                  value="mountain"
                />
              }
              label="Mountain Biking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.rideTypeHybrid}
                  onChange={this.handleCheckboxChange('rideTypeHybrid')}
                  value="hybrid"
                />
              }
              label="Hybrid Biking"
            />
            
            
          </FormGroup><br/>
          <FormGroup>
            Difficulty

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.difficultyEasy}
                  onChange={this.handleCheckboxChange('difficultyEasy')}
                  value="easy"
                />
              }
              label="Easy (15-25 miles)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.difficultyIntermediate}
                  onChange={this.handleCheckboxChange('difficultyIntermediate')}
                  value="intermediate"
                />
              }
              label="Intermediate (25-45 miles)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.difficultyHard}
                  onChange={this.handleCheckboxChange('difficultyHard')}
                  value="hard"
                />
              }
              label="Hard (Above 50 miles)"
            />
            
            
          </FormGroup>
        </CardContent>

        <CardActions>
          <Button raised  color="primary" 
                          className={classes.button}
                          onClick={this.submitChange}
                          >Submit
          </Button>
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

