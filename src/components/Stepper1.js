import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Stepper1 = ({ values, handleChange }) => {
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
        Select campaign settings...
      </Typography>
      <br />
      <TextField
        label='First Name'
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
      />
      <br />
      <TextField
        label='Last Name'
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
      />
    </React.Fragment>
  );
};

export default Stepper1;
