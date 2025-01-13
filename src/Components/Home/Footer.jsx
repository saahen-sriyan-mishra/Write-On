// components/Footer.jsx
import React from 'react';
import Typewriter from 'typewriter-effect'; // Make sure to install this if not already

const Footer = () => (
  <footer className="vep-footer">
    <div className="vep-footer-center">
      <p className="vep-tagline" style={{ fontFamily: 'poppins', fontSize: '40px', textAlign: 'center', color: 'black' }}>
        Content That Accelerates Growth!
      </p>
    </div>
    <div className="vep-footer-w">
      <div className="vep-social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
          <img src="path-to-instagram-placeholder.png" alt="" className="vep-social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
          <img src="path-to-linkedin-placeholder.png" alt="" className="vep-social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
          <img src="path-to-twitter-placeholder.png" alt="" className="vep-social-icon" />
        </a>
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
          <a href="mailto:sairaj@writeon.in" className="vep-footer-link">
            sairaj@writeon.in
          </a>
          <a href="tel:+7008289924" className="vep-footer-link">
            +91 7008289924
          </a>
        </p>
      </div>
    </div>
    <p style={{ fontSize: '10px', fontFamily: 'poppins', textAlign: 'center', color: 'black' }}>
      &copy; 2024 WriteOn. All rights reserved.
    </p>
  </footer>
);

export default Footer;
