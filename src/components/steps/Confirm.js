import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

const Confirm = ({ values }) => {
  const styles = makeStyles((theme) => ({
    list: {
      width: '30%',
      margin: '0 auto',
    },
  }));
  const classes = styles();

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <React.Fragment>
      <Title stepTitle='Check your information' />
      <br />
      <List className={classes.list}>
        <ListItem>
          <ListItemText primary='First Name' secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Occupation' secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary='City' secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Bio' secondary={bio} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default Confirm;
