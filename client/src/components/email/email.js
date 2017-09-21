import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  input: {
    margin: theme.spacing.unit,
    width: 345,
  },
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
    <Input
      value="Hello! Would you like to join me on a bike ride on "
      className={classes.input}
      disabled
      inputProps={{
        'aria-label': 'Description',
      }}
      />
      <TextField
        id="datetime-local"
        label="Select date and time"
        step="300"
        type="datetime-local"
        defaultValue=" 2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button raised color="primary" className={classes.button} id="emailButton">Message</Button>
    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);





