import React from 'react';
import BuyButton from '../components/BuyButton';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import BgHome from '../assets/home_bg.png';

const Home = () => {
  return (
    <section className="bg-no-repeat flex items-center justify-around h-screen space-x-20" style={{ 
      backgroundImage: `url(${BgHome})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
       // ou toute autre hauteur souhaitée
    }}>
    <div className="h-80 w-1/2 p-8">
      <p className="pb-8 text-3xl font-serif">
        Make Your Place A <br/> <span className="font-bold text-4xl text-rose-400 mt-10">Better Living</span>
      </p>
      <p className="pb-8 text-2xl italic">
        Nouhaila shoop furniture with modern, simple and elegant designs for your home.
      </p>
      <BuyButton/>
    </div>
    <div className=" flex flex-col justify-evenly max-sm:hidden h-80">
      <div>
        <a href="#">
          <img src={Facebook} alt="facebook" width={45} height={45}/>
        </a>
      </div>
      <div>
        <a href="#">
          <img src={Instagram} alt="instagram" width={45} height={45}/>
        </a>
      </div>
      <div>
        <a href="#">
          <img src={Twitter} alt="twitter" width={45} height={45}/>
        </a>
      </div>
    </div>
</section>
  )
}

export default Home
