import React from 'react';
import Message from '../components/Message';

const Reviews = () => {
  return (
    <section className="h-screen flex flex-col justify-evenly">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-serif text-rose-400 pb-4">Our Happy Clients</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.</p>
      </div>
      <div>
        <Message/>
      </div>
    </section>
  )
}

export default Reviews
