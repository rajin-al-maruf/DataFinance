import React from 'react'

function Newsletter() {
  return (
    <div className='w-full px-4 py-16'>
       <div className='max-w-5xl mx-auto md:grid grid-cols-3'>
        <div className='col-span-2'>
          <h1 className='text-white font-medium text-2xl sm:text-3xl'>Want tips & trics to optimize your flow?</h1>
          <p className='text-white sm:text-lg md:mt-4'>Sign up to our newslatter and stay up to date</p>
        </div>
        
        
        <div className='flex flex-col items-center justify-center lg:flex-row'>
          <input type="email" placeholder='Enter your email' className='w-full px-2 py-2 rounded-lg mt-6 md:mt-0'/>
          <button className='bg-green-500 w-40 py-2 mt-4 rounded-lg text-mainColor mx-auto md:mx-0 md:mt-2 lg:mt-0 lg:ml-2'>Sign Up</button>  
        </div>  
       </div>
    </div>
  )
}

export default Newsletter
