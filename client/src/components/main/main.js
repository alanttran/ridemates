import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';

import TextField from 'material-ui/TextField';
import { indigo} from 'material-ui/colors';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import API from '../../utils/API';
import { BrowserRouter as Link } from "react-router-dom";

import './main.css'

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
   formControl: {
    minWidth: 150,
  }
});

class Main extends Component {
  // const classes = props.classes;
  //const bull = <span className={classes.bullet}>•</span>;

  state = {
    test: '',
    where: '',
    when: '',
    biketype: '',
    hardness: ''

  };

    // componentDidMount(){
    //   fetch('/api/test')
    //     .then(res => res.json())
    //     .then(test => this.setState({ test }));
    // }

  submitChange = event => {
    event.preventDefault();
    // sessionStorage.setItem("where":where);
    // sessionStorage.setItem("when":when);
    // sessionStorage.setItem("biketype":biketype);
    // sessionStorage.setItem("hardness":hardness);

    API.request().then( (res) => {

      //window.location = res.request.responseURL;
    });

    this.setState({
      where: '',
      when: '',
      biketype: '',
      hardness: ''
    })
  };


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
  	const classes = this.props.classes;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <TextField
  	          required
  	          id="where-id"
  	          label="Where"
  	          className={classes.textField}
            	  value={this.state.where}
            	  onChange={this.handleChange('where')}       
  	          placeholder="Destination"
  	          margin="none"
              fullWidth
            />
            
            <TextField
  	          required
  	          id="when-id"
  	          label="When"
  	          className={classes.textField}
            	  value={this.state.when}
            	  onChange={this.handleChange('when')}
  	          placeholder="When"
              margin="normal"
              fullWidth
            /><br/><br/>
            <FormControl className={classes.formControl} margin="none">
            <InputLabel htmlFor="bike-type-simple">Type of Biking</InputLabel>
            <Select
            	id ="bike-type"
              fullWidth
              value={this.state.biketype}
              onChange={this.handleChange('biketype')}
              input={<Input id="bike-type-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mountain Bike">Mountain Bike</MenuItem>
              <MenuItem value="Road Bike">Road Bike</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
            </FormControl><br/><br/>
            <FormControl className={classes.formControl} margin="none">
            <InputLabel htmlFor="age-simple">Level of Difficulty</InputLabel>
            <Select
            	id ="hardness"
              fullWidth
              value={this.state.hardness}
              onChange={this.handleChange('hardness')}
              input={<Input id="hardness-simple" />}
            >
              <MenuItem value=""><em>None</em>
              </MenuItem>
              <MenuItem value='Easy (15 - 25 miles)'>Easy (15 - 25 miles)</MenuItem>
              <MenuItem value='Intermediate (25 - 45 miles)'>Intermediate (25 - 45 miles)</MenuItem>
              <MenuItem value='Hard (Above 50 miles)'>Hard (Above 50 miles)</MenuItem>
            </Select>
            </FormControl>
        </CardContent>

        <CardActions>
          <Link to="/results">
            <Button raised color="primary" className="rm-main-button" onClick={this.submitChange} >Find Mates!</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
