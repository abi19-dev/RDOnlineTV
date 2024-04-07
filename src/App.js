import React, { useState, useEffect } from 'react';
import ShowKanali from './ShowKanali';
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar'; // Import your Navbar component
import pocetnaEng from './images/pocetnaEng.png';
import MyButton from './components/MyButton';
import SearchBar from './components/MySearch';
import test from './images/test.jpg'
import BiH from './images/flags/BiH.svg'
import Hrv from './images/flags/Hrv.svg'
import Srb from './images/flags/srb.webp'
import Slo from './images/flags/Slo.png'




function App() {

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
          <img src={pocetnaEng} style={{ width: '720px', height: 'auto' }} />
          <MyButton onClick={() => scrollToSection('#channels')} className="my-button">
            CHANNELS
          </MyButton>
        </div>
      </div>
      <div id="channels">

        <div className="homeContent">
          {/* <SearchBar /> */}
          {/* <h1 onClick={handleClick} className="channelsTitle">
            Kanali
          </h1> */}
        </div>
        <ShowKanali />
        {/* <div className="contentColumn">
          <div className="contentRow">
            <div className="flagBox">
              <img src={BiH} className='flag' />
              <h3 className='nameOfCountry'>Bosna i Hercegovina</h3>
            </div>
            <div className="flagBox">
              <img src={Hrv} className='flag' />
              <h3 className='nameOfCountry'>Hrvatska</h3>
            </div>
            <div className="flagBox">
              <img src={Srb} className='flag' />
              <h3 className='nameOfCountry'>Srbija</h3>
            </div>
            <div className="flagBox">
              <img src={Slo} className='flag' />
              <h3 className='nameOfCountry'>Slovenija</h3>
            </div>
          </div>
          <div className="contentRow">
            <div className="flagBox">
              <img src={Hrv} className='flag' />
              <h3 className='nameOfCountry'>Hrvatska</h3>
            </div>
            <div className="flagBox">
              <img src={BiH} className='flag' />
              <h3 className='nameOfCountry'>Bosna i Hercegovina</h3>
            </div>
            <div className="flagBox">
              <img src={Slo} className='flag' />
              <h3 className='nameOfCountry'>Slovenija</h3>
            </div>
            <div className="flagBox">
              <img src={Srb} className='flag' />
              <h3 className='nameOfCountry'>Srbija</h3>
            </div>
          </div>
          <div className="contentRow">
            <div className="flagBox">
              <img src={Srb} className='flag' />
              <h3 className='nameOfCountry'>Srbija</h3>
            </div>
            <div className="flagBox">
              <img src={Slo} className='flag' />
              <h3 className='nameOfCountry'>Slovenija</h3>
            </div>
            <div className="flagBox">
              <img src={Hrv} className='flag' />
              <h3 className='nameOfCountry'>Hrvatska</h3>
            </div>
            <div className="flagBox">
              <img src={BiH} className='flag' />
              <h3 className='nameOfCountry'>Bosna i Hercegovina</h3>
            </div>
          </div>
        </div> */}
      </div>
      <div id="contact">

        <div className="homeContent">
        </div>
      </div>
    </div>
  );
}

export default App;