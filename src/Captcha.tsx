import React, { useCallback, useEffect } from 'react';
import { InvisibleSmartCaptcha } from '@yandex/smart-captcha';

interface CaptchaProps {
  setCaptchaToken: React.Dispatch<React.SetStateAction<string>>;
  isCaptchaVisible: boolean;
  onResolve: (captchaToken: string) => void;
}

const Captcha = ({
  setCaptchaToken,
  isCaptchaVisible,
  onResolve,
}: CaptchaProps): JSX.Element => {
  const onCaptchaResolve = (captchaToken: string) => {
    setCaptchaToken(captchaToken);

    if (onResolve && typeof onResolve === 'function') {
      onResolve(captchaToken);
    }
  };

  return (
    <InvisibleSmartCaptcha
      sitekey='YOUR_KEY'
      shieldPosition='bottom-right'
      visible={isCaptchaVisible}
      onSuccess={onCaptchaResolve}
    />
  );
};

export default Captcha;
