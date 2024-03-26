import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../images/rdonlinetv.svg';

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId); // Replace '#channels' with the ID of the section you want to scroll to
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='container'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} onClick={() => scrollToSection('#home')} alt="Logo" />
                </div>
                <div className="navbar-links">
                    <Link onClick={() => scrollToSection('#channels')}>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {/* Add more links as needed */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;