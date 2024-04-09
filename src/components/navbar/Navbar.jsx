// import React, { useState } from "react";
// import logo from "../../images/logo.png";
// import Icon from "../Icon";
// import NavItems from "./NavItems";
// import { Link } from "react-router-dom";

// function Navbar() {
//     const [ isMenuOpen, setIsMenuOpen ] = useState(false);

//     const navLinks = [
//         {
//             id: 'about',
//             title: 'About',
//             link: '/about',
//         },
//         {
//             id: 'projects',
//             title: 'Projects',
//             link: '/projects',
//         },
//         {
//             id: 'contact',
//             title: 'Contact',
//             link: '/contact',
//         },
//     ];

//     const toggleMenu = () => {
//         setIsMenuOpen(open => !open);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar__logo">
//                 <Link to="/main">
//                     <img src={logo} alt="logo" className="navbar__logo-img" />
//                 </Link>
//             </div>
//             <button className="navbar__toggle" onClick={toggleMenu}>
//                 <Icon
//                     icon={isMenuOpen ? 'close' : 'menu'}
//                     className="navbar__toggle-icon"
//                 />
//             </button>

//             <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
//                 {navLinks.map((item) => (
//                     <NavItems
//                         key={item.id}
//                         title={item.title}
//                         link={item.link}
//                         className="navbar__menu-item"
//                     />
//                 ))}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
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
