import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { FormGroup, FormControl, FormControlLabel } from 'material-ui/Form';
import API from '../../utils/API';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';

import TextField from 'material-ui/TextField';
import { indigo } from 'material-ui/colors';

import './profile.css';

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
  formGroup:{
    margin: theme.spacing.unit,
  },
   formControl: {
    margin: theme.spacing.unit,
  },
  button: {
    width: '100%'
  },
  primaryColor: {
      background: primaryColor 
   },
});

class Profile extends Component {
  // const classes = props.classes;
  //const bull = <span className={classes.bullet}>•</span>;

  state = {
    username: 'carne asada fries',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    phonenum: '',
    radius: '',
    rideTypeRoad: false,
    rideTypeMountain: false,
    rideTypeOther: false,
    difficultyEasy: false,
    difficultyIntermediate: false, 
    difficultyHard: false 
  };

  componentDidMount = () => {
    console.log("profile component mount");

    API.userProfile()
     .then(res => {
        console.log("res.data");
        console.log(res.data.username);
        if(res.data){
          
          this.setState({ 
            username:             res.data.username,
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
        }
        else{
          console.log("no data")
          console.log(res)
          
        }
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

    API.createUserProfile(this.state).then((response) => {
      this.props.parent.setState({isLoggedIn: true});
      console.log('login this.props', this.props);
      this.props.history.push('/');
    });

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
    <div className="rm-profile-layout-container">
         <div className="rm-profile-name-container">
         <br/><br/>
           <Typography type="display1" color="inherit" >
            Profile - {this.state.username}
           </Typography>
           <FormControl className={classes.formControl}>
             <TextField
              
              id="firstname"
              name="firstname"
              label="First Name"
              className={classes.textField}
                value={this.state.firstname}
                onChange={this.handleChange('firstname')}
              placeholder="First Name"
              margin="normal"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
            
            id="lastname"
            name="lastname"
            label="Last Name"
            className={classes.textField}
              value={this.state.lastname}
              onChange={this.handleChange('lastname')}
            placeholder="Last Name"
            
            margin="normal"
          />
          </FormControl>
         </div> 
         <div className="rm-profile-address-container">
         <FormControl className={classes.formControl}>
          <TextField
            id="address"
	          name="address"
	          label="Address"
	          className={classes.textField}
          	  value={this.state.address}
          	  onChange={this.handleChange('address')}
	          placeholder="Address"
	          
	          margin="normal"
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
	          
            id="city"
	          name="city"
	          label="City"
	          className={classes.textField}
          	  value={this.state.city}
          	  onChange={this.handleChange('city')}
	          placeholder="City"
	          
	          margin="normal"
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
	          
            id="state"
	          name="state"
	          label="State"
	          className={classes.textField}
          	  value={this.state.state}
          	  onChange={this.handleChange('state')}
	          placeholder="State"
	          
	          margin="normal"
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
	          
            id="zipcode"
	          name="zipcode"
	          label="Zipcode"
	          className={classes.textField}
          	  value={this.state.zipcode}
          	  onChange={this.handleChange('zipcode')}
	          placeholder="Zipcode"
	          
	          margin="normal"
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
	          
            id="email"
	          name="email"
	          label="Email"
	          className={classes.textField}
          	  value={this.state.email}
          	  onChange={this.handleChange('email')}
	          placeholder="Email"
	          
	          margin="normal"
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
	          
            id="phonenum"
	          name="phonenum"
	          label="Phone Number"
	          className={classes.textField}
          	  value={this.state.phonenum}
          	  onChange={this.handleChange('phonenum')}
	          placeholder="Phone Number"
	          
	          margin="normal"
          />
          </FormControl>
          </div>
          <br/><br/><br/>
          <Typography type="display1" color="inherit" >
            Biking Preferences
           </Typography>
          <FormControl className={classes.formControl}>
          <TextField
            
            id="radius"
            name="radius"
            label="Riding Area Radius (miles)"
            className={classes.textField}
              value={this.state.radius}
              onChange={this.handleChange('radius')}
            placeholder="Radius of riding area"
            
            margin="normal"
          />
          </FormControl><br/><br/><br/>
          <div className="rm-profile-biking-settings">
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
                  checked={this.state.rideTypeOther}
                  onChange={this.handleCheckboxChange('rideTypeOther')}
                  value="hybrid"
                />
              }
              label="Hybrid Biking"
            />
            
            
          </FormGroup><br/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
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
          </div><br/><br/>
          <Button raised  color="primary" 
                          className={classes.button}
                          onClick={this.submitChange}
                          >Save
          </Button>
    </div>
  );
}
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

