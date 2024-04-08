
import Logo from "../../assets/logo_spatta.png"
import './Navbar.css';

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';






const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="nav__navbar">
            <div className="nav__navbar-links">
                <div className="nav__navbar-links_logo">
                    <h4 className="spota">SPOTTA <span>NG</span></h4>
                </div>
               
            </div>
            <div className="nav__navbar-sign">
               
                <a href="/login"><button type="button">LOGIN</button></a>
            </div>
            <div className="nav__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#ee0e0e" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#650bf7" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="nav__navbar-menu_container">
                        <div className="nav__navbar-menu_container-links">
                             <a href="/login"><button type="button">LOGIN</button></a>
                        </div>
                       
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;