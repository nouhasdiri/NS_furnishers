import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BuyNow from '../components/BuyButton';
import desk from '../assets/desk.png';
import sofa from '../assets/sofa.png';
import recliner from '../assets/recliner.png';
import mirror from '../assets/mirror.png';

const CarouselSlider = () => {
  const products = [
    {
      id: 1,
      image: desk,
      name: 'Office table',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.',
      price: 50
    },
    {
      id: 2,
      image: sofa,
      name: 'Sofa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.',
      price: 60
    },
    {
      id: 3,
      image: recliner,
      name: 'Recliner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.',
      price: 60
    },
    {
      id: 4,
      image: mirror,
      name: 'mirror',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse sequi adipisci consequatur.',
      price: 60
    },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="w-3/4 flex justify-between">
      {products.map(product => (
        <div key={product.id} className="p-4">
          <img src={product.image} alt={product.name} className="w-64 rounded-lg h-80 mb-2"/>
          <h3 className="text-lg font-semibold pb-2">{product.name}</h3>
          <p className="text-rose-600 pb-2">${product.price}</p>
          <p className="text-gray-600 pb-2">{product.description}</p>
          <BuyNow/>
        </div>
      ))}
    </Slider>
  )
}

export default CarouselSlider
