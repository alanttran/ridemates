import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import { MenuItem } from "material-ui/Menu";

import TextField from "material-ui/TextField";
import { indigo } from "material-ui/colors";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import API from "../../utils/API";
import {  Link } from "react-router-dom";
import Typography from 'material-ui/Typography';

import "./main.css";

const primaryColor = "#F44336";

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.9)'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: indigo[50],
    backgroundColor: indigo[500]
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary
  },
  primaryColor: {
    background: primaryColor
  },
  formControl: {
    minWidth: 150
  }
});

class Main extends Component {
  // const classes = props.classes;
  //const bull = <span className={classes.bullet}>•</span>;

  state = {
    where: "",
    biketype: "",
    difficulty: "",
    
  };

  // componentDidMount(){
  //   fetch('/api/test')
  //     .then(res => res.json())
  //     .then(test => this.setState({ test }));
  // }

  submitChange = (event, where, biketype, difficulty) => {
    event.preventDefault();

    console.log("in signup submitchange");
    const searchObj = this.state;

    if(this.state.biketype === "Road Bike") {
      searchObj.biketype = "rideTypeRoad"
    } 
    else if(this.state.biketype ===  "Mountain Bike") {
      searchObj.biketype = "rideTypeMountain"
    }
    else if(this.state.biketype === "Hybrid") {
      searchObj.biketype = "rideTypeOther"
    };

    if(this.state.difficulty === "Easy (15 - 25 miles)") {
      searchObj.difficulty = "difficultyEasy"
    } 
    else if(this.state.difficulty === "Intermediate (25 - 45 miles)") {
      searchObj.difficulty = "difficultyIntermediate"
    }
    else if(this.state.difficulty === "Hard (Above 50 miles)") {
      searchObj.difficulty = "difficultyHard"
    };

    API.results(searchObj).then(res => {
      console.log("res: ", res);
      //window.location = res.request.responseURL;
      // debugger;
      this.props.parent.setState({result: res.data, receivedData: true})
      this.props.history.push('/results'); 
    });
    //this.props.getMatchedPeople(this.state.where, this.state.when, this.state.biketype, this.hardness);

    this.setState({
      where: "San Diego, CA",
      biketype: "",
      difficulty: ""
    });
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
            <Typography type="headline" color="inherit" >
                Where would you like to ride?
              </Typography>
            <TextField
              required
              id="where-id"
              label="Where"
              className={classes.textField}
              value={this.state.where}
              onChange={this.handleChange("where")}
              placeholder="Destination"
              margin="none"
              fullWidth
            />
            <br />
            <br />
            <FormControl className={classes.formControl} margin="none">
              <InputLabel htmlFor="bike-type-simple">Type of Biking</InputLabel>
              <Select
                id="bike-type"
                fullWidth
                value={this.state.biketype}
                onChange={this.handleChange("biketype")}
                input={<Input id="bike-type-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Mountain Bike">Mountain Bike</MenuItem>
                <MenuItem value="Road Bike">Road Bike</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl className={classes.formControl} margin="none">
              <InputLabel htmlFor="age-simple">Level of Difficulty</InputLabel>
              <Select
                id="difficulty"
                fullWidth
                value={this.state.difficulty}
                onChange={this.handleChange("difficulty")}
                input={<Input id="difficulty-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Easy (15 - 25 miles)">
                  Easy (15 - 25 miles)
                </MenuItem>
                <MenuItem value="Intermediate (25 - 45 miles)">
                  Intermediate (25 - 45 miles)
                </MenuItem>
                <MenuItem value="Hard (Above 50 miles)">
                  Hard (Above 50 miles)
                </MenuItem>
              </Select>
            </FormControl>
          </CardContent>

          <CardActions>
        
              <Button
                raised
                color="primary"
                className="rm-main-button"
                onClick={this.submitChange}
              >
            
                Find Mates!
             
             </Button>

             
          </CardActions>
        </Card>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
