import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Stepper3 = ({ values, handleChange }) => {
  const classes = makeStyles((theme) => ({
    root: {
      width: '60%',
      margin: '0 auto',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  return (
    <React.Fragment>
      <Typography className={classes.instructions}>
        This is the bit I really care about!
      </Typography>
      <br />
      <h1>Step 3</h1>
    </React.Fragment>
  );
};

export default Stepper3;
