import React from "react";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/vnd.api+json',
            },
            body: JSON.stringify({ name, email, password, password_confirmation: passwordConfirm }),
          });

        const data = await response.json();

        const { status, data: responseData } = data;
        if (status === 'Request was Succesful.') {
            console.log(status );
            const { user, token } = responseData;

            localStorage.setItem('token', token);

            
            navigate('/dashboard');
        } else {
            console.log(status);
        }

    }
    
    return (
        <div className="container p-5">
            <div className="card">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password_confirm" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="password_confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;