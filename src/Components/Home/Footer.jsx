// components/Footer.jsx
import React from 'react';
import Typewriter from 'typewriter-effect'; // Make sure to install this if not already
import ins from '../../assets/Instagram_Bg.png';
import link from '../../assets/Linkedin_Bg.png';

const Footer = () => (
  
  <footer className="vep-footer">
    <div className="vep-footer-center">
    
      <p className="vep-tagline" style={{ fontFamily: 'poppins', fontSize: '1.8rem', textAlign: 'center', color: 'black', lineHeight: '4.5rem' }}>
        Content That Accelerates Growth!
        <br/>
      </p>
    </div>
    <div className="vep-footer-w">
      <div className="vep-social-icons">
      <a href="https://www.instagram.com/writeon_in/" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
  <img src={ins} alt="" className="vep-social-icon" style={{ width: '60px', height: '60px' }} />
</a>
<a href="https://www.linkedin.com/company/www.write-on.co.in/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
  <img src={link} alt="" className="vep-social-icon" style={{ width: '60px', height: '60px' }} /> 
</a>

        {/*<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
          <img src="path-to-twitter-placeholder.png" alt="" className="vep-social-icon" />
        </a>*/}
      </div>

      <div className="Text-Effect">
        <Typewriter
          options={{
            loop: true,
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='typewriter-text'>Ready For Content?</span>")
              .pauseFor(1000)
              .deleteAll()
              .typeString("<span class='typewriter-text'>Get in Touch!</span>")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>

      <div className="Right">
        <p style={{ textAlign: 'right' }}>
          <strong style={{ fontFamily: 'poppins', fontSize: '1.8rem', textAlign: 'center', color: 'black', lineHeight: '1.8rem' }}>Contacts</strong>
          <br/><br/>
          <a href="mailto:sairaj@writeon.in" className="vep-footer-link">
            sairaj@writeon.in
          </a>
          <a href="tel:+7008289924" className="vep-footer-link">
            +91 7008289924
          </a>
        </p>
      </div>
    </div>
    <p style={{ fontSize: '10px', fontFamily: 'poppins', textAlign: 'center', color: 'black' }}> <br/><br/>
      &copy; 2024 WriteOn. All rights reserved.
    </p>
    <br/>
  </footer>
);

export default Footer;
