import React, { useEffect } from 'react';
import './AllServices.scss'; 
import MainImg from './Service Main Img/Newsletter Writing.png';
import WorkImg from '../../assets/How its work.png';
import { FaStar } from 'react-icons/fa';


import FAQImage from '../../assets/FAQ.png';

import Footer from '../Home/Footer'

const Service4 = () => {

  
  useEffect(() => {
    const handleCheckboxChange = (event) => {
      const checkboxes = document.querySelectorAll('.faq-toggle');
      checkboxes.forEach((checkbox) => {
        if (checkbox !== event.target) {
          checkbox.checked = false;
        }
      });
    };

    const checkboxes = document.querySelectorAll('.faq-toggle');
    // Capture the current set of checkboxes in a variable
    const checkboxArray = Array.from(checkboxes);

    checkboxArray.forEach((checkbox) => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Use the captured variable in the cleanup function
    return () => {
      checkboxArray.forEach((checkbox) => {
        checkbox.removeEventListener('change', handleCheckboxChange);
      });
    };
  }, []);
  
  return (
    <div className='Service'>
    <div className='ContactSectionx'>
      <div className='Textx'>
        <h1 style={{fontSize: '70px', marginBottom: '10px', fontFamily: 'poppins' }}>Newsletter writing</h1>
        <br/><p style={{fontSize: '1.5rem'}}>Your News, Made to Impress. </p>
        <br/><p>
        We create newsletters that grab attention and engage
readers. With personalized content, we help generate leads and
boost your business with every update.</p>
        <button className='ContactButtonx' onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}>
          Contact Us &#8594;
        </button>

      </div>
      <img src={MainImg} alt="MainImg" className="MainImgx" />
    </div>


    <div className='WhatsIncludedSectionx'>
  <div className="WhatsIncludedHeadingx" style={{ fontSize: '30px', marginTop: '20px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>Our Newsletters can help you in</h3>
    </div>
  <div className="WICardsx">
  <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Creating Captivating Content</h2>
      <p style = {{marginTop: '10px'}}>Write engaging newsletters that
      inform and captivate your audience.</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Personalizing for Impact</h2>
      <p style = {{marginTop: '10px'}}>Customize newsletters to match
      subscribers’ preferences and boost engagement.</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Driving Subscriber Interaction</h2>
      <p style = {{marginTop: '10px'}}>Use strong calls-to-action to boost
      clicks and build connections.</p>
    </div>

    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Enhancing Consistency and Quality</h2>
      <p style = {{marginTop: '10px'}}>Ensure newsletters are
      high-quality, on-brand, and informative.</p>
    </div>
  </div>
</div>


<div className="WhatsIncludedHeadingx" style={{ fontSize: '30px', marginTop: '60px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>How does the process work?</h3>
    </div>
<img src={WorkImg} alt="WorkImg" className="WorkImg" />






<div className='WhatsIncludedSectionfb'>
  <div className="WhatsIncludedHeadingfb" style={{ fontSize: '30px', marginTop: '60px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>What are customers saying?</h3>
    </div>
  <div className="WICardsfb">
    <div className="Cardfb">

      <p style = {{marginTop: '10px'}}>The newsletters are a hit! Engaging content boosted open rates and
      interactions.</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
    <div className="Cardfb">

      <p style = {{marginTop: '10px'}}>WriteOn provides engaging content that aligns with our goals.</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
    <div className="Cardfb">

      <p style = {{marginTop: '10px'}}>High-quality newsletters boosted engagement and improved brand
      communication.</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
  </div>
</div>
    

<section className="faqs-section">
  <div className="faqs-title" style={{ fontSize: '30px', margin: '20px 0 30px' }}>
    <h3 style={{fontFamily:'poppins'}}>FAQ’s</h3>
  </div>
  <div className='All-FAQ-Content'>
    <img src={FAQImage} alt="FAQImage" className="FAQImage" style={{marginTop: '-80px'}} />
  <div className="faqs-container">
    <input type="checkbox" name="faq" id="faq1" className="faq-toggle" />
    <label htmlFor="faq1" className="faq-question">How do you ensure the quality of your content?</label>
    <div className="faq-answer">
      <p>Every piece of content is reviewed twice to catch any errors, correct
      grammar issues, and ensure there’s no plagiarism.</p>
    </div>

    <input type="checkbox" name="faq" id="faq2" className="faq-toggle" />
    <label htmlFor="faq2" className="faq-question">How many revision rounds are allowed?</label>
    <div className="faq-answer">
      <p>You can request up to 2 rounds of revision.</p>
    </div>

    <input type="checkbox" name="faq" id="faq3" className="faq-toggle" />
    <label htmlFor="faq3" className="faq-question">How many days will it take to deliver?</label>
    <div className="faq-answer">
      <p>It depends on the number of contents, but typically, if the total is
      under 7,000 words, we can deliver within 24 hours.</p>
    </div>
    <input type="checkbox" name="faq" id="faq4" className="faq-toggle" />
    <label htmlFor="faq4" className="faq-question">What’s the best way to get in touch with you?</label>
    <div className="faq-answer">
      <p>Contact at sairaj@writeon.in</p>
    </div>
  </div>
  </div>
</section>


<Footer />



    </div>
  );
};
 
export default Service4;
