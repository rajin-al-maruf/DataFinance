import React from 'react'
import LaptopImg from '../img/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white px-4 py-14'>
        <div className='md:grid grid-cols-2 max-w-5xl mx-auto'>
            <img className='p-8' src={LaptopImg} alt="laptop-img" />

            <div className='flex flex-col justify-center'>
                <p className='text-green-500 uppercase pt-2 font-bold md:text-xl lg:text-2xl'>Data analytics deshboard</p>
                <h1 className='text-xl font-bold pt-2 md:text-2xl lg:text-3xl'>Manage Data Analytics Centrally</h1>
                <p className='pt-2 text-gray-700 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugit repell animi error nam voluptatem quaerat 
                    doloribus, ex autem nobis ex minus! Placeat optio 
                    eligendi facilis possimus quas minima, alias fugiat.
                </p>
                <button className='bg-mainColor w-40 py-2 mt-4 rounded-lg text-white mx-auto md:mx-0 md:mt-6'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
