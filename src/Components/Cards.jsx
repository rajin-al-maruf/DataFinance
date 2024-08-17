import React from 'react'
import Single from '../img/single.png'
import Double from '../img/double.png'
import Triple from '../img/triple.png'

const Cards = (props) => {
  return (
    <div className='w-full px-4 py-16 bg-white'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8'>

        <div className='flex flex-col shadow-xl rounded-xl hover:scale-105 duration-200'>
           <img className='w-20 mx-auto -mt-4' src={Single} alt="single-png" />
           <h2 className='text-center text-2xl font-bold py-4'>Single User</h2>
           <p className='text-center text-4xl font-bold py-4'>$149</p>

            <div className='text-center font-medium'>
                <p className='py-2 border-b border-t mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 User Allowed</p>
                <p className='py-2 border-b mx-8'>Sand Upto 2 GB</p>
            </div>
            <button className='bg-green-500 w-40 py-2 my-6 rounded-lg
             text-mainColor mx-auto '>Start Trial</button> 
        </div>  

        <div className='flex flex-col shadow-xl rounded-xl hover:scale-105 duration-200'>
           <img className='w-20 mx-auto -mt-4' src={Double} alt="single-png" />
           <h2 className='text-center text-2xl font-bold py-4'>Partnership</h2>
           <p className='text-center text-4xl font-bold py-4'>$199</p>

            <div className='text-center font-medium'>
                <p className='py-2 border-b border-t mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>3 User Allowed</p>
                <p className='py-2 border-b mx-8'>Sand Upto 10 GB</p>
            </div>
            <button className='bg-green-500 w-40 py-2 my-6 rounded-lg
             text-mainColor mx-auto '>Start Trial</button> 
        </div>  

        <div className='flex flex-col shadow-xl rounded-xl hover:scale-105 duration-200'>
           <img className='w-20 mx-auto -mt-4' src={Single} alt="single-png" />
           <h2 className='text-center text-2xl font-bold py-4'>Group Package</h2>
           <p className='text-center text-4xl font-bold py-4'>$299</p>

            <div className='text-center font-medium'>
                <p className='py-2 border-b border-t mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 User Allowed</p>
                <p className='py-2 border-b mx-8'>Sand Upto 20 GB</p>
            </div>
            <button className='bg-green-500 w-40 py-2 my-6 rounded-lg
             text-mainColor mx-auto '>Start Trial</button> 
        </div>  

      </div>
    </div>
  )
}

export default Cards
