import React from 'react'
import now from '../assets/now.jpg'

function Hero() {
  return (
    <div className='w-full h-screen'>
      <img src={now} alt="" className='object-cover h-full w-full' />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Gateways</h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae aliquam laborum consequatur odit quos enim nulla velit? Itaque, quidem.
            </p>
            <button className='bg-white text-black'>Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

