import React, {FC, useEffect, useState} from 'react';
import {Button, Checkbox, Col, Form, FormItem, Input, Modal, Row, Title} from '@mmid/uikit';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleEmailChange = (v: string) => {
    setEmail(v);
  };

  const handlePassChange = (v: string) => {
    setPass(v);
  };

  const footer = () => (
    <>
      <Button>Cancel</Button>
      <Button primary>Login</Button>
    </>
  );

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <div>
      <Form>
        <FormItem label="E-mail">
          <Input value={email} onChange={handleEmailChange} />
        </FormItem>

        <FormItem label="Password">
          <Input type="password" value={pass} onChange={handlePassChange} />
        </FormItem>

        <FormItem>
          <Button primary onClick={() => setVisible(true)}>
            Login
          </Button>
        </FormItem>
      </Form>
      <Title>h1</Title>
      <Title level={2}>h2</Title>
      <Title level={3}>h3</Title>
      <Title level={4}>h4</Title>
      <Title level={5}>h5</Title>
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
          <Button primary onClick={() => setVisible(true)}>
            Login
          </Button>
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

      <br />
      <br />

      <Checkbox checked={checked} onChange={(val) => setChecked(val)}>
        Check me
      </Checkbox>

      {visible && (
        <Modal onClose={() => setVisible(false)} title="Login form" footer={footer()}>
          <Row>
            <Col>
              <Input value={pass} onChange={handlePassChange} />
            </Col>
          </Row>
          <Row>
            <Col />
          </Row>
        </Modal>
      )}
    </div>
  );
};
