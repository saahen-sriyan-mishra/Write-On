{/*import React from 'react';
import './Home.scss';
import mainbg from '../../assets/bar-logo.png';

import CompLogoL from '../../assets/logo-black.png';
import CompLogoD from '../../assets/logo-white.png'; // Assume a white logo for dark theme

import toggle_light from '../../assets/day.png'; // Path to your light mode icon
import toggle_dark from '../../assets/night.png'; // Path to your dark mode icon

const Home = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`HomePage ${theme}`}>
      <div className='ContactSection'>
        <div className='Text'>
          <h1>Welcome to the Home Page</h1>
          <p>This is a simple home page.</p>
          <button className='ContactButton' onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}>
            Contact Us &#8594;
          </button>
        </div>
      </div>

      <div className='Companies'>
        <div className="CompaniesHeading" style={{ marginTop: '30px', marginBottom: '-60px' }}>
          <img src={theme === 'light' ? CompLogoL : CompLogoD} alt='Background' className='CompaniesSlider' />
        </div>
        <div className='tech-slideshow'>
          <div className='mover-1'></div>
          <div className='mover-2'></div>
        </div>
      </div>


    </div>
  );
};

export default Home;
*/}





import React from 'react';
import './Home.scss';
import mainbg from '../../assets/bar-logo.png';

import CompLogoL from '../../assets/logo-black.png';
import CompLogoD from '../../assets/logo-white.png'; // Assume a white logo for dark theme

import toggle_light from '../../assets/day.png'; // Path to your light mode icon
import toggle_dark from '../../assets/night.png'; // Path to your dark mode icon

const Home = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`HomePage ${theme}`}>
      <div className='ContactSection'>
        <div className='Text'>
          <h1 style={{fontSize: '40px',marginBottom:'10px' }}>Maximize your outbound <br/> revenue</h1>
          <p>    <br />  We specialize in providing high-quality content written by professional writers to boost your SEO rankings, get customers, and drive up your inbound sales.</p>
          
          <button className='ContactButton' onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}>
            Contact Us &#8594;
          </button>

          <p><br />Pay as little as ₹0.60 per word and start immediately</p>
        </div>
      </div>

      <div className='Companies'>
        <div className="CompaniesHeading" style={{ marginTop: '30px', marginBottom: '-60px' }}>
          <img src={theme === 'light' ? CompLogoL : CompLogoD} alt='Background' className='CompaniesSlider' />
        </div>
        <div className='tech-slideshow'>
          <div className='mover-1'></div>
          <div className='mover-2'></div>
        </div>
      </div>


    </div>
  );
};

export default Home;
