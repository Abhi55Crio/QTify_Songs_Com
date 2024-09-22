import React from 'react';
import headphone from '../assets/svg/headphone.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__box flex justify-center align-center gap-10 flex-wrap">
        <div className="hero__heading text-center h-100 moveInLeft-animation">
          <h1 className="hero__title">100 Thousand Songs, ad-free</h1>
          <h1 className="hero__title">Over Thousands podcast episodes</h1>
        </div>
        <img src={headphone} alt="Headphone Icon" className="hero__image moveInRight-animation" />
      </div>
    </div>
  );
}

export default Hero;
