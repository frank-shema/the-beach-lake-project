import React from 'react'
import house1 from '../assets/house4.jpg'
import house2 from '../assets/room1.jpg'
import house3 from '../assets/room8.jpg'


function ImageSlider() {
  return (
   <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap4">
    <div className="lg:top-20 relative lg:col-span-1 col-span-2">
      <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
      <p className="pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto pariatur, consequatur et doloribus incidunt error nemo. Veniam, pariatur adipisci.
      </p>
    </div>
    <div className='grid grid-cols-2 col-span-2 gap-2'>
      <img src={house1} alt="" className='object-cover w-full h-96'/>
      <img src={house2} alt="" className='object-cover row-span-2 w-full h-full'/>
      <img src={house3} alt="" className='object-cover w-full h-96'/>
    </div>
   </div>
  )
}

export default ImageSlider
