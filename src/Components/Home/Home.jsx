import React from 'react';
import './Home.scss'
const Home = () => {
  return (
    <div className='HomePage'>
      <div className='ContactSection'>
        <div className='Text'>
          <h1>Welcome to the Home Page</h1>
          <p>This is a simple home page.</p>

          <button className='Contack Button'
      onClick={() => window.open('https://forms.gle/yourGoogleFormID', '_blank')}
    >
      Contact Us &#8594;
    </button>
        </div>  
      </div>
    </div>
  );
};

export default Home;
