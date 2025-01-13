import React from 'react';
import './Sample.scss'; // Import the CSS file
import img1 from '../../assets/bar-logo.png'
import Typewriter from "typewriter-effect";

const Sample = () => {
  return (
    <div>
    <div className="grid-container">
      <div className="grid-container1">
      <a href="#" target="_blank"><div className="grid-item1"> 1
      <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div> 
</div></a>

<a href="#" target="_blank"><div className="grid-item2">2
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div></a>
        <a href="#" target="_blank"><div className="grid-item3">3
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div> 
        </div></a>
        <a href="#" target="_blank"><div className="grid-item4">4
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div></a>
      </div>
      <div className="grid-container2">
      <a href="#" target="_blank"> <div className="grid-item5">5
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div> </a>
        <a href="#" target="_blank"><div className="grid-item6">6
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div> </a>
        <a href="#" target="_blank"><div className="grid-item7">7
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div> </a>
        <a href="#" target="_blank"><div className="grid-item8">8
        <div className="image">
    <img src={img1} alt="" style={{ display: 'block', margin: ' 90px auto -60px' }} />
  </div>
        </div> </a>
      </div>
    </div>



    <footer className="vep-footer">
  <div className="vep-footer-center">
    <p className="vep-tagline" style={{fontFamily:'poppins', fontSize:'40px', textAlign:'center', color:'black'}}>Content That Accelerates Growth!</p>
    
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
{/*}
    <div className="Text-Effect">
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .changeDelay(50) // Set the typing speed (lower value means faster typing)
        .typeString("<span class='typewriter-text'>Ready For your Content?</span>")
        .pauseFor(1000)
        .deleteAll()
        .typeString("<span class='typewriter-text'>Get in Touch with Us!</span>")
        .start();
    }}
  />
</div> */}

<div className="Text-Effect">
  <Typewriter
    options={{
      loop: true, // Enable looping
      delay: 50, // Set the typing speed
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("<span class='typewriter-text'>Ready For Content?</span>")
        .pauseFor(1000)
        .deleteAll()
        .typeString("<span class='typewriter-text'>Get in Touch!</span>")
        .pauseFor(1000)
        .deleteAll()
        .start(); // Start the typewriter effect
    }}
  />
</div>




    <div className ="Right">

    <p style={{textAlign: 'right'}}>
      {/*<strong style={{fontSize: '28px', color:'black', fontFamily:'poppins'}}>Contacts</strong>
      <br/><br/>*/}<a href="mailto:sairaj@writeon.in" className="vep-footer-link">
        sairaj@writeon.in
      </a>
      <a href="tel:+7008289924" className="vep-footer-link">
        +91 7008289924
      </a>
    </p>
    </div>
    
    </div>
    <p style={{ fontSize:'10px',fontFamily:'poppins', textAlign:'center', color:'black'}}>&copy; 2024 WriteOn. All rights reserved.</p>
</footer>



    </div>
  );
};

export default Sample;
