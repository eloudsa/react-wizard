import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Step1 = ({ values, nextStep, handleChange }) => {
  const _nextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <React.Fragment>
      <AppBar title='Enter User Details' />
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
      <br />
      <Button color='primary' variant='contained' onClick={_nextStep}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default Step1;
