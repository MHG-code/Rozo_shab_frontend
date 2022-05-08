import React from  "react";
import {NavLink, Link} from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = (props) => {
    return (
        <header className="navbar">
            <nav>
                <ul className="main-links">

                    <NavLink to="/home" className="first-left-nav-links left-nav-links nav-links" ><li >Home</li></NavLink>
                    <NavLink to="/team" className="second-left-nav-links left-nav-links nav-links"><li >Team</li></NavLink>
                    <Link to="/" className="logo "><li ><img src={logo} alt="logo" /></li></Link>
                    <NavLink to="/profile" className="first-right-nav-links right-nav-links nav-links"><li >Profile</li></NavLink>
                    <NavLink to="/dairy" className="second-right-nav-links right-nav-links nav-links"><li >Dairy</li></NavLink>
                </ul>
            </nav>
        </header>
    )
    }

export default Navbar;