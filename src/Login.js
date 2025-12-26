import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

      const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    console.log(userData);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.password === password && userData.username === username ) {
            navigate("/dashboard");

        } else {
            alert("Invalid")
        }
    }

    return (
        <>
            <h1 className="login-title">Login</h1>
            <form className="greet-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn primary">Login</button>
                </div>
            </form>
        </>
    );
}

export default Login;