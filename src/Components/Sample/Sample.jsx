import React from 'react';
import './Sample.scss';
import img1 from '../../assets/bar-logo.png'
import Footer from '../Home/Footer';

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

    <Footer />



    </div>
  );
};

export default Sample;
