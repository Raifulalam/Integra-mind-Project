import React, { useState } from 'react';

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
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className='send-linkBtn' type="submit">Send Reset Link</button>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </center></div>
    );
};

export default ForgotPassword;
