import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:5000/forgot-password', { email });
        //     if (response.data.success) {
        //         setMessage('Password reset link has been sent to your email.');
        //         setError('');
        //     } else {
        //         setError(response.data.message);
        //         setMessage('');
        //     }
        // } catch (error) {
        //     setError('Something went wrong 😓');
        //     setMessage('');
        // }
    };

    return (
        <div className='forgot-container'><center>

            <form onSubmit={handleSubmit} className='forgot-form'>
                <h1>Forgot Password</h1>
                <div className='email'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                    />
                </div>
                <button className='send-linkBtn' type="submit">Send Reset Link</button>
                <Link className='register-link' to="/">Back to Login</Link>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </center></div>
    );
};

export default ForgotPassword;
