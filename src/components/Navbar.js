import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../images/rdonlinetv.svg';
import ExYuFlag from '../images/flags/exyu.png';
import EngFlag from '../images/flags/Eng.png';
import { useTranslation } from './LanguageContext';

const Navbar = () => {
    const { translate, setCurrentLanguage } = useTranslation();

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
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
                    <Link onClick={() => scrollToSection('#home')}>{translate('home')}</Link>
                    <Link onClick={() => scrollToSection('#channels')}>{translate('channels')}</Link>
                    <Link onClick={() => scrollToSection('#offers')}>{translate('offers')}</Link>
                    {/* Add more links as needed */}
                </div>
                <div className="flags">
                    <img src={EngFlag} alt="Eng Flag" className="flag" onClick={() => handleLanguageChange('en')} />
                    <img src={ExYuFlag} alt="ExYu Flag" className="flag" onClick={() => handleLanguageChange('exyu')} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;