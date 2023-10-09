import React from 'react'
import {ImGithub} from 'react-icons/im';
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaHome} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-5'>
                <img alt="logolight"/>
                <p>Danny.com</p>
                <img alt="paymentlog0"/>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                    </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Adress:Some address here</p>
                    <p>Phone:123454234</p>
                    <p>Email:dfsa</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Support</h2>
                <div>
                    <p>Help and support</p>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <input type="text" className='bg-transparent border px-4 py-2 text-sm'/>
                <button className='border text-white hover:bg-gray-500'>Subscribe</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer