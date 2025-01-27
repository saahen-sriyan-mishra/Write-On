import React from 'react';
import './Sample.scss';
import img1 from '../../assets/bar-logo.png'
import Footer from '../Home/Footer';

const Sample = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-container1">
          <a href="#" target="_blank"><div className="grid-item1">
            <span>Article</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="#" target="_blank"><div className="grid-item2">
            <span>Blog</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="#" target="_blank"><div className="grid-item3">
            <span>Newsletter</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/1AphHC9fmW4WEH_MmKXBz0n6qSlwIlW84/view?usp=drive_link" target="_blank"><div className="grid-item4">
            <span>Case Study</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>
        </div>

        <div className="grid-container2">
          <a href="#" target="_blank"><div className="grid-item5">
            <span>Copywriting</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="#" target="_blank"><div className="grid-item6">
            <span>Emailers</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="#" target="_blank"><div className="grid-item7">
            <span>Website Content</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="#" target="_blank"><div className="grid-item8">
            <span>Social Media</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sample;
