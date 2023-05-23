import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

function Navbar () {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    if(!nav){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='scroll'
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <FiMenu
        className='z-20 text-white cursor-pointer'
        size={25}
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 flex'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10 '
        }
      >
        <ul className='flex-col fixed w-full h-full items-center justify-center flex'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Destinations</li>
          <li className='font-bold text-3xl p-8'>Reservations</li>
          <li className='font-bold text-3xl p-8'>Amenities</li>
          <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
