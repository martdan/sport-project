import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (isNewUser) {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Account created successfully');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Logged in successfully');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>{isNewUser ? 'Register' : 'Login'}</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsNewUser(!isNewUser)}>
                {isNewUser ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Login;
