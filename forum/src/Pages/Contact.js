import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;