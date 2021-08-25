import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <div className="nav-contents">
                <Link to='/homescreen'>
                    <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix-logo" />
                </Link>
                <Link to='/planform'>
                    <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile-avatar" />
                </Link>
            </div>     
        </div>
    )
}

export default Navbar
