import React from 'react';
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar'; // Import your Navbar component
import logo from './images/rdonlinetv.svg';
import MyButton from './components/MyButton';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="app">
      <Navbar />
      <div className="background">
        {/* Add your content here */}
        <div className="content">
          <img src={logo} style={{ width: '720px', height: '137px' }} />
          <MyButton onClick={handleClick} className="my-button">
            KANALI
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default App;