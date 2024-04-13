
import React, { useState } from "react";
import logo from "../../images/logo.png";
import Icon from "../Icon";
import NavItems from "./NavItems";

function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(open => !open);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="#main">
                    <img src={logo} alt="logo" className="navbar__logo-img" />
                </a>
            </div>
            <button className="navbar__toggle" onClick={toggleMenu}>
                <Icon
                    icon={isMenuOpen ? 'close' : 'menu'}
                    className="navbar__toggle-icon"
                />
            </button>

            <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
                <NavItems title="About" sectionId="about" className="navbar__menu-item" />
                <NavItems title="Projects" sectionId="projects" className="navbar__menu-item" />
                <NavItems title="Contact" sectionId="contact" className="navbar__menu-item" />
            </ul>
        </nav>
    );
}

export default Navbar;
