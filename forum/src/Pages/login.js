
// src/Login.js
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:5000/login', {
        //         email,
        //         password
        //     });

        //     if (response.data.success) {
        //         // Redirect to the weather app 
        //         navigate('/weatherApp', { state: { email } });
        //     } else {
        //         setError(response.data.message);
        //     }
        // } catch (error) {
        //     setError('Something went wrong 😓');
        // }
    };

    return (
        <div className='login-container'>

            <center>

                <form onSubmit={handleSubmit} className='login-form'>
                    <div className='login-profile'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                        </svg>
                    </div>
                    <h2>Login</h2>
                    <div className='login-info'>
                        <div className='email-input'>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Email'
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder=' Password'
                            />
                        </div>
                    </div>

                    <div className='buttons'>

                        <p> <input type='checkbox' className='checkbox' /> Remember Me</p>
                        <Link className='forgot-link' to="/forgotpassword">Forgot Password</Link>


                    </div>
                    <button type="submit" className='login-button'>Login</button>
                    <div className='register'>
                        <p>Don't have an account?</p>
                        <Link className='register-link' to="/register">SIGN UP</Link>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </center>
        </div>
    );
};

export default Login;
