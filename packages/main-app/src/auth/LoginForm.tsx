import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Input} from '@mmid/uikit';

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
      <Input value={email} onChange={handleEmailChange} />
      <br />
      <br />
      <Input value={pass} onChange={handlePassChange} />
      <br />
      <br />
      <></>
      <Button primary>Login</Button>

      <Button primary severity="success">
        Login
      </Button>

      <Button primary severity="danger">
        Login
      </Button>

      <Button primary severity="warning">
        Login
      </Button>

      <br />
      <br />

      <Button>Login</Button>
      <Button severity="success">Login</Button>
      <Button severity="danger">Login</Button>
      <Button severity="warning">Login</Button>
    </div>
  );
};
