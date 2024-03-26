import React from 'react';
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar'; // Import your Navbar component
import logo from './images/rdonlinetv.svg';
import MyButton from './components/MyButton';
import test from './images/test.jpg'
import BiH from './images/flags/BiH.svg'
import Hrv from './images/flags/Hrv.svg'
import Srb from './images/flags/srb.webp'
import Slo from './images/flags/Slo.png'




function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        {/* Add your content here */}
        <div className="homeContent">
          <img src={logo} style={{ width: '720px', height: '137px' }} />
          <MyButton onClick={handleClick} className="my-button">
            KANALI
          </MyButton>
        </div>
      </div>
      <div id="channels">
        <div className="homeContent">
          <h1 onClick={handleClick} className="channelsTitle">
            Kanali
          </h1>
        </div>
        <div className="contentColumn">
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
        </div>
      </div>
    </div>
  );
}

export default App;