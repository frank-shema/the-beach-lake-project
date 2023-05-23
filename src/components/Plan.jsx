import React from 'react'
import clear from '../assets/clear.jpg'
import click from '../assets/click.jpg'
import josh from '../assets/josh.jpg'
import okay from  '../assets/okay.jpg'
import then from '../assets/then.jpg'

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
          <img src={clear} alt="" className='object-cover w-full h-full p-2 row-span-3'/>
          <img src={click} alt="" className='object-cover  h-full p-2 row-span-2 w-96'/>
          <img src={josh} alt="" className='object-cover h-full p-2 row-span-2 w-96'/>
          <img src={okay} alt="" className='object-cover w-full h-full p-2 row-span-3'/>
          <img src={then} alt="" className='object-cover h-52 p-2 row-span2 w-96'/>
        </div>

        <div className='flex flex-col h-full justify-center w-3/5'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit!</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus facere perferendis hic, non delectus consectetur minus quis adipisci. Rerum ut atque quaerat tempore perferendis optio est deserunt quod eum?</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div> 
    </div>
    
  )
}

export default Plan
