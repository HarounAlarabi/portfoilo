import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { close, menu, logo, logotext } from "../assets";

const Navbar = () => {
  const [ active, setActive ] = useState("");
  const [ toggle, setToggle ] = useState(false);


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

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link
          to="/"
          className=""
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

        </Link>
        <ul className="navabr__menu">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className='navabr__menu-item'
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="navabr__menu-item--link">{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute
                top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? "menu-open" : "menu-close"}`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="close-icon"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem]
                items-start justify-end mt-[10rem] -ml-[35px]"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? "text-french" : "text-eerieBlack"
                      } text-[88px] font-bold font-arenq
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="menu-icon"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
