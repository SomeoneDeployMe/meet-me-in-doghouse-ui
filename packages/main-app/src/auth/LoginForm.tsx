import React, {FC, useState} from 'react';
import {Button, Col, Input, Row} from '@mmid/uikit';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = (v: string) => {
    setEmail(v);
  };

  const handlePassChange = (v: string) => {
    setPass(v);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Input value={email} onChange={handleEmailChange} />
        </Col>

        <Col span={12}>
          <Input value={pass} onChange={handlePassChange} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button primary>Login</Button>
        </Col>

        <Col>
          <Button primary severity="success">
            Login
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <></>

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
