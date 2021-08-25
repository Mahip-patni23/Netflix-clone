import React, { useState, useEffect } from 'react'
import './Header.css';
import {auth} from './firebase';
import {useGlobalContext} from './Context';
import { useHistory } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    const {user} = useGlobalContext();
    const history = useHistory();

    const transitionNavbar = () => {
        if(window.scrollY>100)
        {
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    const userAuthentication = () => {
        if(user){
            auth.signOut();
            history.push('/');
        }else{
            history.push('/login');
        }
    }

    const navigate = () => {
        if(user){
            history.push('/');
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        
            <div className={`header_navbar ${show && 'header_navbar_white'}`}>
               <img onClick={navigate} className={show?"header_logo_small":"header_logo"} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix-logo" />
               <button className="header_btn" onClick={userAuthentication}>{user ? "Sign Out":"Sign In >"}</button>
            </div>
        
    )
}

export default Header
