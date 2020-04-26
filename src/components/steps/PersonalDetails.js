import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

const PersonalDetails = ({ values, handleChange }) => {
  const styles = makeStyles((theme) => ({
    textField: {
      width: '30%',
      margin: '0 auto',
    },
  }));
  const classes = styles();

  return (
    <React.Fragment>
      <Title stepTitle='Enter your personal details' />
      <br />
      <TextField
        className={classes.textField}
        label='Your Occupation'
        onChange={handleChange('occupation')}
        defaultValue={values.occupation}
      />
      <br />
      <TextField
        className={classes.textField}
        label='Your City'
        onChange={handleChange('city')}
        defaultValue={values.city}
      />
      <br />
      <TextField
        className={classes.textField}
        label='Your Bio'
        onChange={handleChange('bio')}
        defaultValue={values.bio}
      />
    </React.Fragment>
  );
};

export default PersonalDetails;
