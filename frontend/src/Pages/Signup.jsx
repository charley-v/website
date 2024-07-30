import React, { useState } from 'react';
import './CSS/Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false); // State to track if signup is successful

    const signupUser = () => {
        // Set isSignedUp to true to display success message
        setIsSignedUp(true);
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className='login'>
            <div className="login-box">
                <h2>Signup</h2>
                {!isSignedUp ? (
                    <>
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="textbox">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                name='username'
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="textbox">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="button" className="btn" onClick={signupUser}>Sign Up</button>
                    </>
                ) : (
                    <p className="success-message">Account successfully created!</p>
                )}
                <div className="go-back">
                    <a href="#" onClick={goBack}>Go Back</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
