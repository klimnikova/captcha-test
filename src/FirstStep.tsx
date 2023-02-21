import React, { useState } from 'react';

import Captcha from './Captcha';

const FirstStep = ({
  isCaptchaVisible,
  phone,
  setPhone,
  setCaptchaToken,
  onSubmit,
}: {
  isCaptchaVisible: boolean;
  phone: string;
  onSubmit: (captchaToken?: string) => void;
  setCaptchaToken: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <input
          value={phone}
          name='phone'
          onChange={(evt) => {
            setPhone(evt.target.value);
          }}
        />
      </div>

      <div>
        <button type='submit'>GET CODE</button>
      </div>

      <Captcha
        isCaptchaVisible={isCaptchaVisible}
        setCaptchaToken={setCaptchaToken}
        onResolve={onSubmit}
      />
    </form>
  );
};

export default FirstStep;
