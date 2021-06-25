import {Hello} from '@mmid/components';
import React from 'react';
import ReactDOM from 'react-dom';
import {LoginForm} from './auth/LoginForm';

export const App = () => <LoginForm />;

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
