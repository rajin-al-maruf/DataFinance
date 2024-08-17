import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full px-4 py-16 grid md:grid-cols-2 max-w-5xl mx-auto'>
        <div>
        <h1 className='text-green-500 text-2xl font-bold mb-6'>REACT.</h1>
        <p className='text-gray-400 text-sm mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            At possimus quia vitae aut itaque beatae saepe optio repellendus 
            deserunt odit</p>
        <div className='text-white flex'>
            <FaFacebookSquare size={20}/>
            <FaInstagram size={20} className='ml-4'/>
            <FaTwitterSquare size={20} className='ml-4'/>
        </div>
        </div>
    </div>
  )
}

export default Footer
