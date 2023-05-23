import React, { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

function ImageSlider() {
  const slides = [
    {
      url: '/saource.jpg',
      title: 'Lobster',
    },
    {
      url: '/food.jpg',
      title: 'Sushi',
    },
    {
      url: '/veg.jpg',
      title: 'Pasta',
    },
    {
      url: '/come.jpg',
      title: 'Salmon',
    },
    {
      url: '/eat.jpg',
      title: 'Food',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full ml-96 py-16 px-4 relative top-10">
      <div
        className="h-full w-3/4 rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer" onClick={handlePrevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-96 text-2xl rounded-full p-2 bg-black text-white cursor-pointer" onClick={handleNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default ImageSlider;
