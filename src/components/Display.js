import React from 'react';
import mobile from '../assets/mobile-0819 (1).jpg';
import boxshot from '../assets/boxshot.png';
import Section from './Section';

function Display() {
  return (
    <Section
      image={mobile}
      title="Download your shows to watch offline"
      description="Save your favorites easily and always have something to watch."
   
    >
    
      <div className="row d-flex justify-content-center align-items-center mt-0">
        <div className="  col-6 mx-5 d-flex justify-content-center align-items-center border border-gray rounded">
          <img
            className="mt-2 mb-2 mx-2 px-0"
            src={boxshot}
            width="55"
            height="55"
            alt=""
          />
          <p className="px-2 text-white mytxt">
            Stranger Things <br />
            <span className="px-2 px-lg-2 text-primary mytxt">Downloading...</span>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Display;
