import React from 'react'
import { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

function Login() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            })
    };

    return (
        <div className="login">
            <div className="login_background">
                <img className="login_logo" onClick={() => history.push('/')} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix-logo" />

                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <button className="login_btn" onClick={signIn}>Sign In</button>
                    <div className="login_footer">
                        <div className="login_rememberMe">
                            <input type="checkbox" />Remember me
                        </div>
                        <h6>Need help?</h6>
                    </div>

                    <h4>New To Netflix? <span onClick={register}>Sign Up Now.</span></h4>

                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!show && <span onClick={() => setShow(true)}> Learn more.</span>}</p>

                    {show && <p>The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy">Privacy Policy </a>and 
                                <a href="https://policies.google.com/terms"> Terms of Service</a>, and is used for providing, maintaining, and improving
                                the reCAPTCHA service and for general security purposes (it is not used for personalised
                                advertising by Google).</p>}
                </form>
            </div>
        </div>
    )
}

export default Login
