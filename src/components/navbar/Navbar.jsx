import React, { useState } from "react";
import logo from "../../images/logo.png";
import Icon from "../Icon";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const navLinks = [
        {
            id: 'about',
            title: 'About',
        },
        {
            id: 'projects',
            title: 'Projects',
        },
        {
            id: 'contact',
            title: 'Contact',
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(open => !open);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/main" >
                    <img src={logo} alt="logo" className="navbar__logo-img" />
                </Link>
            </div>
            <button className="navbar__toggle" onClick={toggleMenu}>
                <Icon
                    icon={isMenuOpen ? 'close' : 'menu'}
                    className="navbar__toggle-icon"
                />
            </button>

            <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map((item) => (
                    <NavItems
                        key={item.id}
                        title={item.title}
                        className="navbar__menu-item"
                    />
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
