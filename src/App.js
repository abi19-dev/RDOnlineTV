import React, { useState, useEffect } from 'react';
import ShowKanali from './ShowKanali';
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar'; // Import your Navbar component
import logoEng from './images/pocetnaEng.png';
import logoExYu from './images/pocetnaBiH.png';
import MyButton from './components/MyButton';
import SearchBar from './components/MySearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faDiscord, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logoRdLive from './images/rdLive.png';
import { useTranslation } from './components/LanguageContext';

function App() {
  const { translate, currentLanguage } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId); // Replace '#channels' with the ID of the section you want to scroll to
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        {/* Add your content here */}
        <div className="homeContent">
          <div className='rdOnlineTvLogo'>
            <img src={currentLanguage === 'en' ? logoEng : logoExYu} />
          </div>
          <MyButton onClick={() => scrollToSection('#channels')} className="my-button">
            <h4 className='btnTxt'>{translate('channels')}</h4>
          </MyButton>
          <div className="logoBottomRight">
            <h3 className='poweredBy'>Powered by:</h3>
            <a href="https://rd-live.com/" target="_blank" rel="noopener noreferrer">
              <div className='logoRdLive'>
                <img src={logoRdLive} alt="Logo" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="channels">
        <ShowKanali />
      </div>
      <div id="offers">
        <div className='offerBoxes'>
          <div className='offerBox'>
            <h3 className='months'>{translate('freeTrial')}</h3>
            <h1 className='offerBoxTxt'>0€</h1>
          </div>
          <div className='offerBox'>
            <h3 className='months'>{translate('oneMonth')}</h3>
            <h1 className='offerBoxTxt'>10€</h1>
          </div>
          <div className='offerBox'>
            <h3 className='months'>{translate('sixMonths')}</h3>
            <h1 className='offerBoxTxt'>50€</h1>
          </div>
          <div className='offerBox'>
            <h3 className='months'>{translate('twelveMonths')}</h3>
            <h1 className='offerBoxTxt'>90€</h1>
          </div>
        </div>
        <div className='order'>
          <div className='orderIPTV'>{translate('offerText')}</div>
          <div className='social'>
            <a href="https://www.instagram.com/rd.live_/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href="https://discordapp.com/users/486081779997081602" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' icon={faDiscord} />
            </a>
            <a href='https://t.me/rdowsk1' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='icon' icon={faTelegram} />
            </a>
            <div className="tooltip-container">
              <div className="mail-icon">
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
              </div>
              <div className="tooltip-text">
                Email: rd.vip4@gmail.com
              </div>
            </div>
            <div className="tooltip-container">
              <div className="mail-icon">
                <FontAwesomeIcon className='icon' icon={faViber} />
              </div>
              <div className="tooltip-text">
                Number: +38766123456
              </div>
            </div>
            <div className="tooltip-container">
              <div className="mail-icon">
                <FontAwesomeIcon className='icon' icon={faWhatsapp} />
              </div>
              <div className="tooltip-text">
                Number: +38766123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;