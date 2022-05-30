import React from  "react";
import {NavLink} from 'react-router-dom';
const Nav = (props) => {
    return (
        // <div className="layout">
            <nav className="sub-nav">
                <ul className="sub-links">
                    <NavLink to="Namaz" className="sub-nav-links" ><li >Namaz</li> <div className="bottom"></div> </NavLink>
                    <NavLink to="Quran" className="sub-nav-links"><li >Quran</li> <div className="bottom"></div> </NavLink>
                    <NavLink to="Hadees" className="sub-nav-links"><li >Hadees</li> <div className="bottom"></div> </NavLink>
                    <NavLink to="letrature" className="sub-nav-links"><li >Letrature</li> <div className="bottom"></div> </NavLink>
                    <NavLink to="meetings" className="sub-nav-links"><li >Meetings</li> <div className="bottom"></div></NavLink>
                </ul>
            </nav>
        // </div>
      
    )
    }

export default Nav;