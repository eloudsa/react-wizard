import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Step1 from './Step1';
import Step2 from './Step2';

const WizardForm = () => {
  const [wizardValues, setWizardValues] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  // move to next step
  const nextStep = () => {
    const { step } = wizardValues;
    setWizardValues({ ...wizardValues, step: step + 1 });
  };

  // go back to previous step
  const prevStep = () => {
    const { step } = wizardValues;
    setWizardValues({ ...wizardValues, step: step === 1 ? 1 : step - 1 });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setWizardValues({ ...wizardValues, [input]: e.target.value });
  };
  const { step } = wizardValues;

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        {step === 1 && (
          <Step1
            values={wizardValues}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <Step2
            values={wizardValues}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        )}
      </div>
    </MuiThemeProvider>
  );
};

export default WizardForm;
