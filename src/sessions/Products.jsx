import React from 'react';
import CarouselSlider from '../components/CarouselSlider';

const Products = () => {
  return (
    <section className="flex flex-col h-screen justify-evenly">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-serif text-rose-400 pb-4">Our Products</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.</p>
      </div>
      <div className="flex justify-center">
        <CarouselSlider/>
      </div>
    </section>
  )
}

export default Products
