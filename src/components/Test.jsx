import React from 'react';
import BuyButton from './BuyButton';
import FaceBook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';

const Test = () => {
  return (
    <section className="flex items-center justify-around h-screen space-x-20">
        <div className="bg-rose-100 h-80 w-1/2 p-8">
          <p className="pb-4 text-3xl">
            Make Your Place A <br/> <span className="font-black text-3xl">Better Living</span>
          </p>
          <p className="pb-4 text-2xl">
            Nouhaila shoop furniture with modern, simple and elegant designs for your home.
          </p>
          <BuyButton/>
        </div>
        <div className=" flex flex-col justify-around max-sm:hidden h-80">
          <div>
            <img src={FaceBook} alt="facebook" width={50} height={50}/>
          </div>
          <div>
            <img src={Instagram} alt="instagram" width={50} height={50}/>
          </div>
          <div>
            <img src={Twitter} alt="twitter" width={50} height={50}/>
          </div>
        </div>
    </section>
  )
}

export default Test
