import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo_light from '../../assets/logo-white.png';
import logo_dark from '../../assets/logo-black.png';
import toggle_light from '../../assets/day.png';
import toggle_dark from '../../assets/night.png';

const Navbar = ({ theme, setTheme }) => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const toggleServices = () => {
    setIsServicesVisible(!isServicesVisible);
  };

  // Close the services box when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-box') && !e.target.closest('.Navbar')) {
        setIsServicesVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar">
      <img src={theme === 'light' ? logo_dark : logo_light} alt="" className="Logo" />
      <ul>
        <li>Home</li>
        <li onClick={toggleServices}>Services</li>
        <li>Samples</li>
      </ul>

      <img onClick={toggle_mode} src={theme === 'light' ? toggle_dark : toggle_light} alt="" className="Toggle-Icon" />

      {/* Services Box */}
      {isServicesVisible && (
       <div className={`services-box ${theme === 'light' ? 'light' : 'dark'}`}>
        <div className="services-grid">
          <div className="service-item">Service 1</div>
          <div className="service-item">Service 2</div>
          <div className="service-item">Service 3</div>
          <div className="service-item">Service 4</div>
          <div className="service-item">Service 5</div>
          <div className="service-item">Service 6</div>
          <div className="service-item">Service 7</div>
          <div className="service-item">Service 8</div>
        </div>
      </div>

)}

    </div>
  );
};

export default Navbar;
