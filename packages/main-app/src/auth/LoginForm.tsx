import React, {ChangeEvent, FC, useState} from 'react';
import './main.scss';
import {Button} from '@mmid/uikit';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  return (
    <div>
      <input value={email} onChange={handleEmailChange} />
      <br />
      <br />
      <input value={pass} onChange={handlePassChange} />
      <br />
      <br />
      <></>
      <Button>Login</Button>
    </div>
  );
};
