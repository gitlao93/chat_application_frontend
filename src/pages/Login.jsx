import React from "react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/vnd.api+json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const { data } = await response.json();
            const { token, user } = data;

            console.log(token);
            console.log(user);

            navigate('/dashboard');
            Cookies.set('token', token, { expires: 7, path: '/' });
            Cookies.set('id', user.id, { expires: 7, path: '/' });
            Cookies.set('name', user.name, { expires: 7, path: '/' });
            Cookies.set('email', user.email, { expires: 7, path: '/' });
            
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container p-5">
            <div className="card">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;