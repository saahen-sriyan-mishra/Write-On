import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../assets/logo-white.png';
import logo_dark from '../../assets/logo-black.png';
import logo_light_s from '../Home/HD_Brand Images/bs.png';
import logo_dark_s from '../Home/HD_Brand Images/pixelcut-export (8).png';
import toggle_light from '../../assets/day.png';
import toggle_dark from '../../assets/night.png';

const Navbar = ({ theme, setTheme }) => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const isToggling = useRef(false);
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const getLogo = () => {
    if (windowWidth < 450) {
      return theme === 'light' ? logo_dark_s : logo_light_s;
    }
    return theme === 'light' ? logo_dark : logo_light;
  };

  return (
    <div className="Navbar">
      <img src={getLogo()} alt="Logo" className="Logo" />
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={toggleServices}
          className={
            isActive('/article') ||
            isActive('/blog') ||
            isActive('/casestudy') ||
            isActive('/newsletter') ||
            isActive('/copywriting') ||
            isActive('/emailers') ||
            isActive('/website-content') ||
            isActive('/social-media')
              ? 'active'
              : ''
          }
        >
          Services
        </li>
        <li className={isActive('/sample') ? 'active' : ''}>
          <Link to="/sample">Samples</Link>
        </li>
      </ul>

      <img onClick={toggle_mode} src={theme === 'light' ? toggle_dark : toggle_light} alt="Toggle Icon" className="Toggle-Icon" />

      {isServicesVisible && (
        <div className={`services-box ${theme === 'light' ? 'light' : 'dark'}`}>
          <div className="services-grid">
            <Link to="/article" className={`service-item ${theme}`}>Article</Link>
            <Link to="/blog" className={`service-item ${theme}`}>Blog</Link>
            <Link to="/casestudy" className={`service-item ${theme}`}>Casestudy</Link>
            <Link to="/newsletter" className={`service-item ${theme}`}>Newsletter</Link>
            <Link to="/copywriting" className={`service-item ${theme}`}>Copywriting</Link>
            <Link to="/emailers" className={`service-item ${theme}`}>Emailers</Link>
            <Link to="/website-content" className={`service-item ${theme}`}>Website Content</Link>
            <Link to="/social-media" className={`service-item ${theme}`}>Social Media</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
