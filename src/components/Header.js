import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logo,cartIcon} from '../assets/index'

const Header = () => {
  
  const productData=useSelector(state=>state.ecom.productData);
  const userInfo = useSelector(state=>state.ecom.userInfo);
  return (
    <div className='w-full h-16 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <img className='max-w-12 max-h-12' src={logo}/>
        </Link>
      
      <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>

        </ul>
        <Link to="/cart"><div className='relative'>
          <img className="w-6" src={cartIcon}  alt="cartImage"/>
          <span className='absolute w-6 top-2 left-0'>{productData.length}</span>
        </div></Link>
        <Link to='/login'><img src={userInfo ? userInfo.image : '#'} className='w-8 h-8' alt="userimage"/></Link>
        {userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  )
}

export default Header