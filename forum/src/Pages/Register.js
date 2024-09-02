import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //     setError("Passwords do not match.");
        //     return;
        // }
        // try {
        //     const response = await axios.post('http://localhost:5000/register', {
        //         email,
        //         password
        //     });
        //     if (response.data.success) {
        //         alert("Registration successful! You can now log in.");
        //         setError('')
        //         navigate('/'); // Redirect to login page
        //     } else {
        //         setError(response.data.message);

        //     }
        // } catch (error) {
        //     setError('Something went wrong 😓');
        // }
    };

    return (
        <div className='register-container'>
            <center>
                <form onSubmit={handleSubmit} className='register-form'>
                    <h1>Register</h1>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </form>
            </center>
        </div>
    );
};

export default Register;
