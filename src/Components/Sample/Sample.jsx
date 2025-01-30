import React from 'react';
import './Sample.scss';
import img1 from ''
import Footer from '../Home/Footer';

const Sample = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-container1">
          <a href="https://drive.google.com/file/d/1rUgwTmqn2Oshu3EfOma92YpKepGwEcm7/view?usp=sharing " target="_blank"><div className="grid-item1">
            <span>Service Deck</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/1AQHYD2AH3-eeB4juiijpCqbU3_9o1wnm/view?usp=drive_link" target="_blank"><div className="grid-item2">
            <span>Article/ Blog</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/1YLsJCLaoFXxooxL8aQ2QmVNGXBOpsQox/view?usp=sharing " target="_blank"><div className="grid-item3">
            <span>Newsletter</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>


        </div>

        <div className="grid-container2">
          <a href="https://drive.google.com/file/d/1H5ROCiJwGnNyqRrTR4770C5At8jlfznY/view?usp=sharing " target="_blank"><div className="grid-item5">
            <span>Copywriting</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/15wZhYaKnXhknvcuqeLjn2OU-OktDOTxr/view?usp=sharing" target="_blank"><div className="grid-item6">
            <span>Case Study</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/1YrJTV4v3tQuYjg3L6wP7lKVJp0y98X3R/view?usp=drive_link" target="_blank"><div className="grid-item7">
            <span>Website Content</span>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div></a>

          <a href="https://drive.google.com/file/d/1uBPSxkOSEPMN8Ahq0LOpbqBl4byKt2ww/view?usp=drive_link" target="_blank"><div className="grid-item8">
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
