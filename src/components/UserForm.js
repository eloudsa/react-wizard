import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Instructions from './steps/Instructions';
import UserDetails from './steps/UserDetails';
import PersonalDetails from './steps/PersonalDetails';
import Confirm from './steps/Confirm';
import Submit from './steps/Submit';

const UserForm = () => {
  // Styles
  const styles = makeStyles((theme) => ({
    root: {
      width: '60%',
      margin: '0 auto',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      fontSize: '30px',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    grid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    steps: {
      minHeight: '300px',
    },
  }));
  const classes = styles();

  // Steps
  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ['Instructions', 'User details', 'Personal information', 'Confirm'];
  };
  const steps = getSteps();

  // State variables
  const [wizardValues, setWizardValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  // Actions
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handleChange = (input) => (e) => {
    setWizardValues({ ...wizardValues, [input]: e.target.value });
  };

  // Rendering
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Submit />
            <Button variant='contained' color='primary' onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div className={classes.steps}>
              {activeStep === 0 && (
                <Instructions
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 1 && (
                <UserDetails
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 2 && (
                <PersonalDetails
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 3 && <Confirm values={wizardValues} />}
              {activeStep === 4 && <Submit />}
            </div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
