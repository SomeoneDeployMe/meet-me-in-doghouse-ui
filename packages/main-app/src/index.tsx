import {Hello} from '@mmid/components';
import React from 'react';
import ReactDOM from 'react-dom';
import {LoginForm} from './auth/LoginForm';
import '@mmid/theme/src/main.sass';

export const App = () => <LoginForm />;

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
