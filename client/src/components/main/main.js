import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import "./main.css";

const Main = props =>
  <div >
  	 <FormControl className="rm-main-fields">
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="name-simple" value="" onChange=""/>
     </FormControl>
  </div>;

export default Main;
