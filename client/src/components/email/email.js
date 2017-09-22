import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent, CardHeader, CardTitle, CardText } from 'material-ui/Card';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 230,
  },
  input: {
    margin: theme.spacing.unit,
    width: 230,
  },
  card: {
    maxWidth: 340,
    marginBottom: 10,
  },
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <div>
    <Card className={classes.card}>
    <CardContent>
    
      
    <Input
      value="Hello! Would you like to join me on a bike ride at {this.props.where} on {this.props.when} "
      multiline
      className={classes.input}
      disabled
      inputProps={{
        'aria-label': 'Description',
      }}
      /> 
      
        
      <TextField
        id="time"
        label="At this time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
          label="Address of the meeting place"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />
      </CardContent>
      
      <CardActions>
      <Button raised color="primary" className={classes.button} id="emailButton">Message</Button>
      </CardActions>
    
    </Card>

    </div>  
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);





