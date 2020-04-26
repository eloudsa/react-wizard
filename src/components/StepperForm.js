import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stepper0 from './Stepper0';
import Stepper1 from './Stepper1';
import Stepper2 from './Stepper2';
import Stepper3 from './Stepper3';
import Stepper4 from './Stepper4';

const StepperForm = () => {
  // Styles
  const styles = makeStyles((theme) => ({
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
    grid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    steps: {
      minHeight: '200px',
    },
  }));
  const classes = styles();

  // Steps
  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return [
      'Introduction',
      'Select master blaster campaign settings',
      'Create an ad group',
      'Create an ad',
      'Summary',
    ];
  };
  const steps = getSteps();

  // State variables
  const [wizardValues, setWizardValues] = useState({
    step: 1,
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
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.steps}>
              {activeStep === 0 && (
                <Stepper0 values={wizardValues} handleChange={handleChange} />
              )}
              {activeStep === 1 && (
                <Stepper1 values={wizardValues} handleChange={handleChange} />
              )}
              {activeStep === 2 && (
                <Stepper2 values={wizardValues} handleChange={handleChange} />
              )}
              {activeStep === 3 && (
                <Stepper3 values={wizardValues} handleChange={handleChange} />
              )}
              {activeStep === 4 && (
                <Stepper4 values={wizardValues} handleChange={handleChange} />
              )}
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
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
