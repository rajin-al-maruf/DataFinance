import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

  const [nav, setNav] = React.useState(false)

  function toggle() {
    setNav(!nav)
  }

  return (
    <div className='flex items-center justify-between h-16 max-w-5xl mx-auto px-4'>
      <h1 className='text-green-500 text-2xl font-bold'>REACT.</h1>
      <ul className='text-white hidden sm:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={toggle} className='block sm:hidden'>
        {nav? <AiOutlineClose size={20} className='text-white'/> : <AiOutlineMenu size={20} className='text-white'/>}
        <div className={nav? 'fixed top-0 left-0 text-white w-96 h-full border-r border-gray-700 bg-mainColor ease-in-out duration-500' : "fixed -left-36 top-0"}>
          <h1 className='text-green-500 text-2xl font-bold m-5'>REACT.</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-700'>Home</li>
            <li className='p-4 border-b border-gray-700'>Company</li>
            <li className='p-4 border-b border-gray-700'>Resources</li>
            <li className='p-4 border-b border-gray-700'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
      </div>

      
    </div>
    
  )
}

export default Navbar
