import React from  "react";
import {NavLink} from 'react-router-dom';
const Nav = (props) => {
    return (
       
            <nav className="sub-nav">
                <ul className="sub-links">
                    <NavLink to="Namaz" className="sub-nav-links" ><li >Namaz</li> <div class="bottom"></div> </NavLink>
                    <NavLink to="Quran" className="sub-nav-links"><li >Quran</li> <div class="bottom"></div> </NavLink>
                    <NavLink to="Hadees" className="sub-nav-links"><li >Hadees</li> <div class="bottom"></div> </NavLink>
                    <NavLink to="letrature" className="sub-nav-links"><li >Letrature</li> <div class="bottom"></div> </NavLink>
                    <NavLink to="meetings" className="sub-nav-links"><li >Meetings</li> <div class="bottom"></div></NavLink>
                </ul>
            </nav>
      
    )
    }

export default Nav;