import React, { useState } from 'react';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const App = () => {
  const [isCaptchaVisible, setCaptchaVisible] = useState(false);
  const [phone, setPhone] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [step, setStep] = useState(1);

  const networkRequest = () => {
    console.log('NETWORK REQUEST');
  };

  const onSubmit = async (token?: string) => {
    if (!captchaToken && !token) {
      return setCaptchaVisible(true);
    }
    networkRequest();
    // some network request
    setStep(2);
  };

  if (step === 1) {
    return (
      <FirstStep
        isCaptchaVisible={isCaptchaVisible}
        phone={phone}
        setPhone={setPhone}
        onSubmit={onSubmit}
        setCaptchaToken={setCaptchaToken}
      />
    );
  }

  if (step === 2) {
    return <SecondStep setStep={setStep} />;
  }

  return null;
};

export default App;
