import React, { useEffect } from 'react';
import './AllServices.scss'; 
import MainImg from '../../assets/Hero Banner (1).png';
import WorkImg from '../../assets/How its work.png';
import { FaStar } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

import FAQImage from '../../assets/FAQ_Img.png'



const Service5 = () => {

  
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
        <h1 style={{fontSize: '70px', marginBottom: '10px', fontFamily: 'poppins' }}>Blog</h1>
        <p>70% of Consumers Prefer Brands That Share Insightful Blogs
Never miss a chance to lose your customer. With us make your blog
engaging, meaningful, data or fact-based, interesting.</p>
        <button className='ContactButtonx' onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}>
          Contact Us &#8594;
        </button>

      </div>
      <img src={MainImg} alt="MainImg" className="MainImgx" />
    </div>


    <div className='WhatsIncludedSectionx'>
  <div className="WhatsIncludedHeadingx" style={{ fontSize: '30px', marginTop: '-20px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>Our blogs can help you in</h3>
    </div>
  <div className="WICardsx">
  <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Plagiarism-free</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Plagiarism-free</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Plagiarism-free</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
    </div>

    <div className="Cardx">
      <h2 style={{fontSize: '20px', fontFamily:'poppins', backgroundColor: '#ffdd00', borderRadius: '50px', padding: '10px'}}>Plagiarism-free</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
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

      <p style = {{marginTop: '10px'}}>Content paragraph 1</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
    <div className="Cardfb">

      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
    <div className="Cardfb">

      <p style = {{marginTop: '10px'}}>Content paragraph 3</p>
      <div> {[...Array(5)].map((_, index) => ( <FaStar key={index} color="orange" /> ))} </div>
    </div>
  </div>
</div>
    

<section className="faqs-section">
  <div className="faqs-title" style={{ fontSize: '30px', margin: '20px 0 30px' }}>
    <h3 style={{fontFamily:'poppins'}}>FAQ’s</h3>
  </div>
  <div className='All-FAQ-Content'>
  <img src={FAQImage} alt="FAQImage" className="FAQImage" style={{marginTop: '-30px'}} />
  <div className="faqs-container">
    <input type="checkbox" name="faq" id="faq1" className="faq-toggle" />
    <label htmlFor="faq1" className="faq-question">What is the pricing for your services?</label>
    <div className="faq-answer">
      <p>It completely depends on your requirements but usually, we charge ₹0.60 per word for any type of content. (This price is temporary and may change soon. However, if you register at this rate of ₹0.60 before we announce any new pricing, you'll be charged this rate for your purchase.)</p>
    </div>

    <input type="checkbox" name="faq" id="faq2" className="faq-toggle" />
    <label htmlFor="faq2" className="faq-question">How can WriteOn help me obtain the right content?</label>
    <div className="faq-answer">
      <p>We have a team of dedicated in-house content writers with expertise in creating engaging content for blogs, social media, and more. We ensure that your content is both interesting and captivating for your customers.</p>
    </div>

    <input type="checkbox" name="faq" id="faq3" className="faq-toggle" />
    <label htmlFor="faq3" className="faq-question">Why choose a content writing company instead of hiring in-house writers?</label>
    <div className="faq-answer">
      <p>Content writing companies provide professional services with specialized expertise. If you find a company that offers high-quality content at a low price, why not take advantage of this opportunity? Additionally, you have the flexibility to cancel anytime or add services as needed.</p>
    </div>

    <input type="checkbox" name="faq" id="faq6" className="faq-toggle" />
    <label htmlFor="faq6" className="faq-question">Can I see samples of your work?</label>
    <div className="faq-answer">
      <p>Yes, we can provide samples or case studies of our previous projects. Just ask at sairaj@writeon.in</p>
    </div>
  </div>
  </div>
</section>



<footer className="vep-footer">
  <div className="vep-footer-center">
    <p className="vep-tagline" style={{fontFamily:'poppins', fontSize:'44px', textAlign:'center', color:'black'}}>Content That accelerates Growth!</p>
    
  </div>
  <div className="vep-footer-w">
    <div className="vep-social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
        <img src="path-to-instagram-placeholder.png" alt="Instagram" className="vep-social-icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
        <img src="path-to-linkedin-placeholder.png" alt="LinkedIn" className="vep-social-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="vep-footer-link">
        <img src="path-to-twitter-placeholder.png" alt="Twitter" className="vep-social-icon" />
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
      {/*<strong style={{fontSize: '30px', color:'black', fontFamily:'poppins'}}>Contacts</strong>
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
 
export default Service5;
