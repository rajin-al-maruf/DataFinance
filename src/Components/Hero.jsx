import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
        <div className='max-w-5xl -mt-14 w-full h-screen mx-auto flex flex-col items-center justify-center text-center'>
            <p className='text-green-500 uppercase text-xs md:text-base lg:text-xl'>Growing with data analytics</p>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Grow with data.</h1>
            
            <div className='flex items-center font-semibold mt-2'>
                <p className='text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl '>Fast, Flaxible financing for</p>
                <ReactTyped className='text-green-500 pl-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                strings={['BTB','BTC','SASS']}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            
            </div>
            <p className='text-gray-400 pt-3'>Monitor your data analytics to increase revinue for BTB, BTC & SASS platform</p>

            <button className='bg-green-500 px-6 py-2 mt-4 rounded-lg text-mainColor'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
