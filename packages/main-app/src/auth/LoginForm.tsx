import React, {ChangeEvent, FC, useState} from 'react';

export const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }

    const handleSubmit = () => {}

    return <div>
        <input value={email} onChange={handleEmailChange} />
        <br />
        <br />
        <input value={pass} onChange={handlePassChange} />
        <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
    </div>;
};
