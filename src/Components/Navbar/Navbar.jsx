import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../assets/logo-white.png';
import logo_dark from '../../assets/logo-black.png';
import toggle_light from '../../assets/day.png';
import toggle_dark from '../../assets/night.png';

const Navbar = ({ theme, setTheme }) => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const isToggling = useRef(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const toggleServices = () => {
    setIsServicesVisible((prev) => {
      isToggling.current = !prev;
      return !prev;
    });
  };

  useEffect(() => {
    const handleClick = () => {
      if (!isToggling.current) {
        setIsServicesVisible(false);
      } else {
        isToggling.current = false;
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="Navbar">
      <img src={theme === 'light' ? logo_dark : logo_light} alt="" className="Logo" />
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleServices} className={isActive('/service1') || isActive('/service2') || isActive('/service3') || isActive('/service4') || isActive('/service5') || isActive('/service6') || isActive('/service7') || isActive('/service8') ? 'active' : ''}>
          Services
        </li>
        <li className={isActive('/sample') ? 'active' : ''}>
          <Link to="/sample">Samples</Link>
        </li>
      </ul>

      <img onClick={toggle_mode} src={theme === 'light' ? toggle_dark : toggle_light} alt="" className="Toggle-Icon" />

      {isServicesVisible && (
        <div className={`services-box ${theme === 'light' ? 'light' : 'dark'}`}>
          <div className="services-grid">
            <Link to="/service1" className={`service-item ${theme}`}>Service 1</Link>
            <Link to="/service2" className={`service-item ${theme}`}>Service 2</Link>
            <Link to="/service3" className={`service-item ${theme}`}>Service 3</Link>
            <Link to="/service4" className={`service-item ${theme}`}>Service 4</Link>
            <Link to="/service5" className={`service-item ${theme}`}>Service 5</Link>
            <Link to="/service6" className={`service-item ${theme}`}>Service 6</Link>
            <Link to="/service7" className={`service-item ${theme}`}>Service 7</Link>
            <Link to="/service8" className={`service-item ${theme}`}>Service 8</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
