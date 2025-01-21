import React from 'react';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className="flex justify-between bg-rose-50 h-20 items-center px-5 mb-0">
        <p>2024@copyright nouhaila</p>
        <div className="flex justify-evenly w-28">
           <a href="#"> <img src={Facebook} alt="facebook" className="w-5 h-5" /></a>
           <a href="#"> <img src={Instagram} alt="instagram" className="w-5 h-5" /></a>
           <a href="#"> <img src={Twitter} alt="twitter" className="w-5 h-5" /></a>
        </div>
      </div>
  )
}

export default Footer
