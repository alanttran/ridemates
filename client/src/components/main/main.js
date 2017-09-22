import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import { indigo, pink } from 'material-ui/colors';
import { withTheme } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

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
   formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
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

  componentDidMount(){
    fetch('/api/test')
      .then(res => res.json())
      .then(test => this.setState({ test }));
  }



  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
  	const classes = this.props.classes;
  return (
    <div>
      <Card className={classes.card}>
      	<CardHeader style={styles.primaryColor} className={classes.title}
			title = {this.state.test}
        />

        <CardContent>
          
          <TextField
	          required
	          id="where-id"
	          label="Where"
	          className={classes.textField}
          	  value={this.state.where}
          	  onChange={this.handleChange('where')}       
	          placeholder="Where"
	          margin="normal"
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
          />

          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="bike-type-simple">Type of Biking</InputLabel>
          <Select
          	id ="bike-type"
            
            value={this.state.biketype}
            onChange={this.handleChange('biketype')}
            input={<Input id="bike-type-simple" />}
          >
            <option value="" />
            <option value={'Mountain Bike'}>Mountain Bike</option>
            <option value={'Road Bike'}>Road Bike</option>
            <option value={'Hybrid'}>Hybrid</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Level of Difficulty</InputLabel>
          <Select
          	id ="hardness"
    
            value={this.state.hardness}
            onChange={this.handleChange('hardness')}
            input={<Input id="hardness-simple" />}
          >
            <option value="" />
            <option value={'Easy (15 - 25 miles)'}>Easy (15 - 25 miles)</option>
            <option value={'Intermediate (25 - 45 miles)'}>Intermediate (25 - 45 miles)</option>
            <option value={'Hard (Above 50 miles)'}>Hard (Above 50 miles)</option>
          </Select>
        </FormControl>
        </CardContent>

        <CardActions>
          <Button raised color="primary" className={classes.button}>Submit</Button>
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
