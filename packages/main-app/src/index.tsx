import React from 'react';
import ReactDOM from "react-dom";
import {LoginForm} from "./auth/LoginForm";

export const App = () => {
    return <LoginForm />
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
