import React from 'react';

const WhyChooseUs = (props) => {
  return (
  <section className="w-80 px-4 flex flex-col gap-2">
        <img src={props.img} alt="image" className="w-6 h-6 drop-shadow-xl" />
        <p className="font-bold">{props.title}</p>
        <p>
          {props.text} 
        </p> border-solid border-2 border-rose-300
        <div className="flex justify-end">
          <button className="w-24 h-8 bg-rose-400 rounded-lg text-white hover:border-solid hover:border-2 hover:border-rose-400 hover:text-rose-400 hover:bg-inherit">More</button>
        </div>
    </section>
  )
}

export default WhyChooseUs
