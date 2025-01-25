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





import React, { useState, useEffect } from 'react';
import './Home.scss';
import MainImg from '../../assets/Home Page Main Img.png';


import OfferMiddle3DImage from '../../assets/Offer.png';

import FAQImage from '../../assets/FAQ.png';

import Footer from './Footer';


import a1 from './HD_Brand Images/2 (8).png'
import a2 from './HD_Brand Images/pixelcut-export (1).png'
import a3 from './HD_Brand Images/pixelcut-export (2).png'
import a4 from './HD_Brand Images/pixelcut-export (3).png'
import a5 from './HD_Brand Images/pixelcut-export (4).png'
import a6 from './HD_Brand Images/pixelcut-export (5).png'
import a7 from './HD_Brand Images/pixelcut-export (6).png'
import a8 from './HD_Brand Images/pixelcut-export (7).png'
import a10 from './HD_Brand Images/pixelcut-export.png'
import a11 from './HD_Brand Images/1732698245310-removebg-preview.png'




//import CompLogoL from '../../assets/Trusted By Brands.png';
//import CompLogoD from '../../assets/Trusted By BrandsD.png';

const Home = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [wordCount, setWordCount] = useState(0); // Starting value
  const [serviceMultiplier, setServiceMultiplier] = useState(0); // Default service multiplier
{/*}
  const [checkedFAQ, setCheckedFAQ] = useState(null);

  const handleCheckboxChange = (id) => {
    setCheckedFAQ(checkedFAQ === id ? null : id);
  };*/}

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
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });

    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener('change', handleCheckboxChange);
      });
    };
  }, []);

  return (
    <div className={`HomePage ${theme}`}>
      <div className='ContactSection'>
        <div className='Text'>
          <h1 style={{marginBottom:'10px',fontFamily:'poppins' }}>Maximize your outbound revenue</h1>
          <p>    <br />  We specialize in providing high-quality content written by professional writers to boost your SEO rankings, get customers, and drive up your inbound sales.</p>
          
          <button className='ContactButton' onClick={() => window.open('https://forms.gle/wuMZsMWHA3fnRo739', '_blank')}>
            Contact Us &#8594;
          </button>

          <p><br />Pay as little as ₹0.60 per word and start immediately</p> <br /><br />
        </div>
        <img src={MainImg} alt="MainImg" className="MainImg" />
      </div>

      <div className='Companies'> 
        {/*<div className="CompaniesHeading" style={{ marginTop: '30px', marginBottom: '-60px' }}>
          <img src={theme === 'light' ? CompLogoL : CompLogoD} alt='Background' className='CompaniesSlider' />
        </div>*/}
       <div className="WhatsIncludedHeading" style={{ fontSize: '30px', marginTop: '0px', marginBottom: '-50px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>Trusted by Brands</h3>
    </div>
 {/*       <div className='tech-slideshow'>
          <div className='mover-1'></div>
          <div className='mover-2'></div>
           </div>
*/}
      </div>




<div className="carousel">
        <div className="group">
          <div className="card"><img src={a1} alt="Image 1" /></div>
          <div className="card"><img src={a2} alt="Image 2" /></div>
          <div className="card"><img src={a3} alt="Image 3" /></div>
          <div className="card"><img src={a4} alt="Image 4" /></div>
          <div className="card"><img src={a5} alt="Image 5" /></div>
          <div className="card"><img src={a6} alt="Image 6" /></div>
          <div className="card"><img src={a7} alt="Image 7" /></div>
          <div className="card"><img src={a8} alt="Image 8" /></div>
          <div className="card"><img src={a11} alt="Image 9" /></div>
          <div className="card"><img src={a10} alt="Image 10" /></div>
        </div>
        <div aria-hidden className="group">
        <div className="card"><img src={a1} alt="Image 1" /></div>
          <div className="card"><img src={a2} alt="Image 2" /></div>
          <div className="card"><img src={a3} alt="Image 3" /></div>
          <div className="card"><img src={a4} alt="Image 4" /></div>
          <div className="card"><img src={a5} alt="Image 5" /></div>
          <div className="card"><img src={a6} alt="Image 6" /></div>
          <div className="card"><img src={a7} alt="Image 7" /></div>
          <div className="card"><img src={a8} alt="Image 8" /></div>
          <div className="card"><img src={a11} alt="Image 9" /></div>
          <div className="card"><img src={a10} alt="Image 10" /></div>
        </div>
      </div>

      <div className='WhatsIncludedSection'>
  {/*<div className="WIHeading" style={{ marginTop: '0px', marginBottom: '0px' }}>
    <img src={theme === 'light' ? WhatsIncludedL : WhatsIncludedD} alt='Background' className='WhatsIncluded' />
  </div>*/}
  <div className="WhatsIncludedHeading" style={{ fontSize: '30px', marginTop: '-20px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>What's Included?</h3>
    </div>
  <div className="WICards">
    <div className="Card">
      <h2 style={{fontFamily:'poppins'}}>No Quality Compromise</h2>
      <p style = {{marginTop: '10px'}}>Always maintaining top standards.
      </p>
    </div>
    <div className="Card">
      <h2 style={{fontFamily:'poppins'}}>Feature Images</h2>
      <p style = {{marginTop: '10px'}}>Feature images are key visuals that represent content.</p>
    </div>
    <div className="Card">
      <h2 style={{fontFamily:'poppins'}}>No AI contents</h2>
      <p style = {{marginTop: '10px'}}> No AI contents means only human-written content is allowed.
      </p>
    </div>
  </div>
</div>






<div className="Offer">
  {/*<div className="OfferHeadingImaga" style={{ marginTop: '30px', marginBottom: '-60px' }}>
    <img src={theme === 'light' ? OfferL : OfferD} alt="Background" className="OfferHeading" />
  </div>*/}

  <div className="OfferHeading" style={{ fontSize: '30px', marginTop: '50px', marginBottom: '-20px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>What do we offer?</h3>
    </div>

    <img src={OfferMiddle3DImage} alt="OfferMiddle3DImage" className="OfferMiddle3DImage" />

  <div className="offerContainer">
    <div className="offerColumn">
      <div className="Cardof0">
        <h2>SEO-Optimization</h2>
      </div>
      <div className="Cardof1">
        <h2>Lightning-Fast Turnaround</h2>
      </div>
      <div className="Cardof2">
        <h2>Stunning Graphics</h2>
      </div>
    </div>

    <div className="offerColumn">
      <div className="Cardof3">
        <h2>Content That Drives Business</h2>
      </div>
      <div className="Cardof4">
        <h2>Two Revisions Included</h2>
      </div>
      <div className="Cardof5">
        <h2>24/7 Support</h2>
      </div>
    </div>
  </div>
</div>





<div className="Why-select-us">
    <div className="Why-us" style={{ fontSize: '30px', marginTop: '30px', marginBottom: '20px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>Why should you choose us?</h3>
    </div>
    <div className="Reasons">
    <ul>
              <li>
                <div className="count">100M+</div>
                <div className="text">Words</div>
              </li>
              <li>
                <div className="count">15+</div>
                <div className="text">Countries</div>
              </li>
              <li>
                <div className="count">100K+</div>
                <div className="text">Content Pieces</div>
              </li>
              <li>
                <div className="count">3000+</div>
                <div className="text">Businesses</div>
              </li>
            </ul>
    </div>
  </div>







  <div className="estmp" >
    <h3 style={{ fontSize: '30px', marginTop:'0px',marginBottom: '20px', textAlign:'center', fontFamily: 'Times New Roman, Times, serif' }}>Pricing Calculator</h3>
  </div>
  <div className="coolor">
    <div className="service-selector">
      <label className="service-label" htmlFor="service-select">
        Select a Service:
      </label>
      <select
        className="service-dropdown"
        id="service-select"
        onChange={(e) => {
          const selectedValue = e.target.value;
          if (selectedValue === "placeholder") {
            return; // Do nothing for the placeholder
          }
          setServiceMultiplier(parseFloat(selectedValue));
          document.getElementById("service-select").options[0].disabled = true; // Disable placeholder
        }}
      >
        <option value="placeholder" defaultValue>
          Select a Service
        </option>
        <option value="1">Copywritting</option>
        <option value="0.6">Blog</option>
        <option value="0.6">Article</option>
        <option value="0.7">Website Content</option>
        <option value="0.8">Social Media</option>
        <option value="1">Emailers</option>
        <option value="0.6">Newsletter</option>
        <option value="0.9">Casestudy</option>
      </select>
    </div>

    <div className="slider-container">
      <label className="slider-label" htmlFor="word-slider">
        Word Count (Use the slider below): {wordCount}
      </label>
      <input
        className="word-slider"
        type="range"
        id="word-slider"
        min="350"
        max="10000"
        step="50"
        value={wordCount}
        onChange={(e) => setWordCount(parseInt(e.target.value))}
        style={{ background: theme === 'light' ?
           `linear-gradient(to right, #000000 
          ${ ((wordCount - 350) / (10000 - 350)) * 100 }%, rgb(255, 255, 255) 
          ${ ((wordCount - 350) / (10000 - 350)) * 100 }%)` : 
          `linear-gradient(to right, #cfcfcf 
          ${ ((wordCount - 350) / (10000 - 350)) * 100 }%, #000000 
          ${ ((wordCount - 350) / (10000 - 350)) * 100 }%)`, 
          border: theme === 'light' ? '2px solid black' : '2px solid white' }}
      />
    </div>

    <div className="total-display">
      <p className="total-text" style={{fontSize:'20px'}}>
        Total: INR{" "}
        <span className="price">
          {serviceMultiplier === 0 || serviceMultiplier === "placeholder"
            ? "0.00"
            : (wordCount * serviceMultiplier).toFixed(2)}
        </span>
      </p>
    </div>
  </div>





  
 {/*<section className="feedback-section">
  <div className="feedback-title" style={{fontSize: '30px', margin: '50px 0 -20px 0'}}>
    <h3>What do our clients say about us?</h3> 
  </div>
  */}
  {/*
  <div className="feedback-collage">
    <div className="feedback-item feedback-1">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"They are simply amazing! The support I’ve received from the WriteOn founder is fantastic. It’s not just the writers; the whole founding team is involved in finding the best solutions for my needs. The support is truly excellent!"</p>
        <p>- CEO</p>
      </div>
    </div>
    <div className="feedback-item feedback-2">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"Outstanding Quality and Reliable Service. WriteOn has been great for our blogs. They suggest topics that fit our audience and write in a way that makes our posts interesting and shareable. Since we started using their services, more people are reading our blog. They are always on time and easy to work with. We highly recommend them!"</p>
        <p>- SEO Head</p>
      </div>
    </div>
    <div className="feedback-item feedback-3">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"I stay with WriteOn because they offer a great balance of low prices, high-quality writing, and fast turnaround— delivering everything in just one day. This combination is very helpful for my company, and I plan to keep using their services."</p>
        <p>- Content Promotion Head</p>
      </div>
    </div>
    <div className="feedback-item feedback-4">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"They don’t just write content; they create innovative and engaging posts that our customers love. I’ve seen almost a 100% increase in customer activity on our social media and blog sections, which is wonderful!"</p>
        <p>- Head of Marketing</p>
      </div>
    </div>
    <div className="feedback-item feedback-5">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"Beyond their service, I really appreciate their support. Whether it’s a Sunday, a holiday, or any day, the team answers calls and is always ready to help. That’s truly a special gesture."</p>
        <p>- Digital Marketing Manager</p>
      </div>
    </div>
    <div className="feedback-item feedback-6">
      <img src="https://via.placeholder.com/400x200" alt="Client feedback background" className="feedback-bg" />
      <div className="feedback-content">
        <p>"WriteOn provides exactly what we need with high efficiency and quality. The turnaround time is impressive, making our content strategy run smoothly."</p>
        <p>- Social Media Manager</p>
      </div>
    </div>
  </div>
*/}
{/*</section> */}


<div className="Why-us" style={{ fontSize: '30px', marginTop: '60px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>What do our clients say about us?</h3>
    </div>


<div className="carouself">
        <div className="groupf">
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 1" /><p>"They are simply amazing! The support I’ve received from the WriteOn founder is fantastic. It’s not just the writers; the whole founding team is involved in finding the best solutions for my needs. The support is truly excellent!"</p>
          <br/><p style={{textAlign:'right'}}>- CEO</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 2" /><p>"I stay with WriteOn because they offer a great balance of low prices, high-quality writing, and fast turnaround— delivering everything in just one day. This combination is very helpful for my company, and I plan to keep using their services."</p>
          <br/><p style={{textAlign:'right'}}>- Content Promotion Head</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 3" /><p>"Outstanding Quality and Reliable Service. WriteOn has been great for our blogs. They suggest topics that fit our audience and write in a way that makes our posts interesting and shareable. They are always on time and easy to work with. "</p>
          <br/><p style={{textAlign:'right'}}>- SEO Head</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 4" /><p>"They don’t just write content; they create innovative and engaging posts that our customers love. I’ve seen almost a 100% increase in customer activity on our social media and blog sections, which is wonderful!"</p>
          <br/><p style={{textAlign:'right'}}>- Head of Marketing</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 5" /><p>"Beyond their service, I really appreciate their support. Whether it’s a Sunday, a holiday, or any day, the team answers calls and is always ready to help. That’s truly a special gesture."</p>
          <br/><p style={{textAlign:'right'}}>- Digital Marketing Manager</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 6" /><p>"WriteOn provides exactly what we need with high efficiency and quality. The turnaround time is impressive, making our content strategy run smoothly."</p>
          <br/><p style={{textAlign:'right'}}>- Social Media Manager</p></div>
        </div>
        <div aria-hidden className="groupf">
        <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 1" /><p>"They are simply amazing! The support I’ve received from the WriteOn founder is fantastic. It’s not just the writers; the whole founding team is involved in finding the best solutions for my needs. The support is truly excellent!"</p>
        <br/><p style={{textAlign:'right'}}>- CEO</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 2" /><p>"I stay with WriteOn because they offer a great balance of low prices, high-quality writing, and fast turnaround— delivering everything in just one day. This combination is very helpful for my company, and I plan to keep using their services."</p>
          <br/><p style={{textAlign:'right'}}>- Content Promotion Head</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 3" /><p>"Outstanding Quality and Reliable Service. WriteOn has been great for our blogs. They suggest topics that fit our audience and write in a way that makes our posts interesting and shareable. They are always on time and easy to work with. "</p>
          <br/><p style={{textAlign:'right'}}>- SEO Head</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 4" /><p>"They don’t just write content; they create innovative and engaging posts that our customers love. I’ve seen almost a 100% increase in customer activity on our social media and blog sections, which is wonderful!"</p>
          <br/><p style={{textAlign:'right'}}>- Head of Marketing</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 5" /><p>"Beyond their service, I really appreciate their support. Whether it’s a Sunday, a holiday, or any day, the team answers calls and is always ready to help. That’s truly a special gesture."</p>
          <br/><p style={{textAlign:'right'}}>- Digital Marketing Manager</p></div>
          <div className="cardf"><img src="https://via.placeholder.com/300x200" alt="Image 6" /><p>"WriteOn provides exactly what we need with high efficiency and quality. The turnaround time is impressive, making our content strategy run smoothly."</p>
          <br/><p style={{textAlign:'right'}}>- Social Media Manager</p></div>
        </div>        
      </div>

<section className="faqs-section">
  <div className="faqs-title" style={{ fontSize: '30px', margin: '20px 0 30px' }}>
    <h3 style={{fontFamily:'poppins'}}>FAQ’s</h3>
  </div>
  <div className='All-FAQ-Content'>
  <img src={FAQImage} alt="FAQImage" className="FAQImage" />
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

    <input type="checkbox" name="faq" id="faq4" className="faq-toggle" />
    <label htmlFor="faq4" className="faq-question">What kind of services do you offer?</label>
    <div className="faq-answer">
      <p>We specialize in a variety of content writing services, including blogs, articles, social media posts, email writing, website content, and more. If you have specific writing needs or ideas in mind, feel free to reach out to us at sairaj@writeon.in</p>
    </div>

    <input type="checkbox" name="faq" id="faq5" className="faq-toggle" />
    <label htmlFor="faq5" className="faq-question">How do you handle deadlines?</label>
    <div className="faq-answer">
      <p>We take deadlines seriously and are committed to meeting them. If you have a rush job, let us know, and we’ll do our best to accommodate your needs.</p>
    </div>

    <input type="checkbox" name="faq" id="faq6" className="faq-toggle" />
    <label htmlFor="faq6" className="faq-question">Can I see samples of your work?</label>
    <div className="faq-answer">
      <p>Yes, we can provide samples or case studies of our previous projects. Just ask at sairaj@writeon.in</p>
    </div>
  </div>
  </div>
</section>


{/*}
<section className="faqs-section">
      <div className="faqs-title" style={{ fontSize: '30px', margin: '20px 0 30px' }}>
        <h3 style={{ fontFamily: 'Poppins' }}>FAQ’s</h3>
      </div>
      <div className="All-FAQ-Content">
        <img src={FAQImage} alt="FAQImage" className="FAQImage" />
        <div className="faqs-container">
          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq1"
              className="faq-toggle"
              checked={checkedFAQ === 'faq1'}
              onChange={() => handleCheckboxChange('faq1')}
            />
            <label htmlFor="faq1" className="faq-question">
              What is the pricing for your services?
            </label>
            <div className="faq-answer">
              <p>
                It completely depends on your requirements but usually, we charge ₹0.60 per word for any type of content. (This price is temporary and may change soon. However, if you register at this rate of ₹0.60 before we announce any new pricing, you'll be charged this rate for your purchase.)
              </p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq2"
              className="faq-toggle"
              checked={checkedFAQ === 'faq2'}
              onChange={() => handleCheckboxChange('faq2')}
            />
            <label htmlFor="faq2" className="faq-question">
              How can WriteOn help me obtain the right content?
            </label>
            <div className="faq-answer">
              <p>
                We have a team of dedicated in-house content writers with expertise in creating engaging content for blogs, social media, and more. We ensure that your content is both interesting and captivating for your customers.
              </p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq3"
              className="faq-toggle"
              checked={checkedFAQ === 'faq3'}
              onChange={() => handleCheckboxChange('faq3')}
            />
            <label htmlFor="faq3" className="faq-question">
              Why choose a content writing company instead of hiring in-house writers?
            </label>
            <div className="faq-answer">
              <p>
                Content writing companies provide professional services with specialized expertise. If you find a company that offers high-quality content at a low price, why not take advantage of this opportunity? Additionally, you have the flexibility to cancel anytime or add services as needed.
              </p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq4"
              className="faq-toggle"
              checked={checkedFAQ === 'faq4'}
              onChange={() => handleCheckboxChange('faq4')}
            />
            <label htmlFor="faq4" className="faq-question">
              What kind of services do you offer?
            </label>
            <div className="faq-answer">
              <p>
                We specialize in a variety of content writing services, including blogs, articles, social media posts, email writing, website content, and more. If you have specific writing needs or ideas in mind, feel free to reach out to us at sairaj@writeon.in
              </p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq5"
              className="faq-toggle"
              checked={checkedFAQ === 'faq5'}
              onChange={() => handleCheckboxChange('faq5')}
            />
            <label htmlFor="faq5" className="faq-question">
              How do you handle deadlines?
            </label>
            <div className="faq-answer">
              <p>
                We take deadlines seriously and are committed to meeting them. If you have a rush job, let us know, and we’ll do our best to accommodate your needs.
              </p>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="faq"
              id="faq6"
              className="faq-toggle"
              checked={checkedFAQ === 'faq6'}
              onChange={() => handleCheckboxChange('faq6')}
            />
            <label htmlFor="faq6" className="faq-question">
              Can I see samples of your work?
            </label>
            <div className="faq-answer">
              <p>
                Yes, we can provide samples or case studies of our previous projects. Just ask at sairaj@writeon.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

*/}
{/*<Footer />*/}
<Footer />



    </div>
  );
};

export default Home;



{/* */}