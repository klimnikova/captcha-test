import React, { useState } from 'react';

import Captcha from './Captcha';

const SecondStep = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return <button onClick={() => setStep(1)}>GO BACK</button>;
};

export default SecondStep;
