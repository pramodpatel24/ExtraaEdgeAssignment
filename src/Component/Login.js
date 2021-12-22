import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/slice';
import './Login.css';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        })
        )
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input type="name" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit' className='submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default Login;
