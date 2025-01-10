import React from 'react';
import './AllServices.scss'; 
import MainImg from '../../assets/Hero Banner (1).png';  // Make sure to provide the correct path to your image file

const Service1 = () => {
  return (
    <div className='Service'>
    <div className='ContactSectionx'>
      <div className='Textx'>
        <h1 style={{fontSize: '70px', marginBottom: '10px', fontFamily: 'poppins' }}>Blog</h1>
        <p>We specialize in providing high-quality content written by professional writers to boost your SEO rankings, get customers, and drive up your inbound sales.</p>
        <button className='ContactButtonx' onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}>
          Contact Us &#8594;
        </button>
        <p>Pay as little as ₹0.60 per word and start immediately</p>
      </div>
      <img src={MainImg} alt="MainImg" className="MainImgx" />
    </div>


    <div className='WhatsIncludedSectionx'>
  <div className="WhatsIncludedHeadingx" style={{ fontSize: '30px', marginTop: '-20px', marginBottom: '30px', textAlign:'center' }}>
      <h3 style={{fontFamily:'poppins'}}>What's Included?</h3>
    </div>
  <div className="WICardsx">
    <div className="Cardx">
      <h2 style={{fontFamily:'poppins'}}>SEO-Optimization</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 1</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontFamily:'poppins'}}>Plagiarism-free</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 2</p>
    </div>
    <div className="Cardx">
      <h2 style={{fontFamily:'poppins'}}>Up to 2 revisions</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 3</p>
    </div>

    <div className="Cardx">
      <h2 style={{fontFamily:'poppins'}}>Up to 2 revisions</h2>
      <p style = {{marginTop: '10px'}}>Content paragraph 3</p>
    </div>
  </div>
</div>
    </div>
  );
};
 
export default Service1;
