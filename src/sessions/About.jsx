import React from 'react';
import About1 from '../assets/about1.jpg';
import About2 from '../assets/about2.jpg';
import WhyChooseUs from '../components/WhyChooseUs';
import Img1 from '../assets/star.png';
import Img2 from '../assets/verifie.png';
import Img3 from '../assets/ami.png';

const About = () => {
  return (
    <section className="flex flex-col h-screen justify-evenly">

      <div className="flex justify-around flex-wrap">
        <div className="w-2/5">
           <p className="text-3xl font-serif text-rose-400 pb-4">About Us</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatum tenetur, tempora quae, dignissimos odit quos, impedit obcaecati ullam accusamus reiciendis itaque totam nulla beatae debitis dolores! Odio, eum deleniti.</p>
        </div>
        <div className="w-96 h-52 relative">
            <img src={About1} alt="" className="absolute bottom-0 left-0 w-72 h-40 rounded-lg"/>
            <img src={About2} alt="" className="absolute top-0 right-0 w-40 h-32 rounded-lg"/>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-serif text-rose-400 pb-4">Why Choose Us</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.</p>
        </div>

          <ul className="flex justify-around pt-6 flex-wrap">
            <li>
               <WhyChooseUs img={Img1} title="Quality" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consectetur ipsa error, rerum pariatur facilis ut ad commodi id hic! Dolor totam officia fugit deleniti tempore, amet nostrum." />
            </li>
            <li>
               <WhyChooseUs img={Img2} title="Security" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consectetur ipsa error, rerum pariatur facilis ut ad commodi id hic! Dolor totam officia fugit deleniti tempore, amet nostrum." />
            </li>
            <li>
               <WhyChooseUs img={Img3} title="Community" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consectetur ipsa error, rerum pariatur facilis ut ad commodi id hic! Dolor totam officia fugit deleniti tempore, amet nostrum." />
            </li>
          </ul>
      </div>
    </section>
  )
}

export default About
