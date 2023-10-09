import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md'
import { HiArrowLeft } from 'react-icons/hi'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {resetCart,incrementQty,decrementQty,deleteItem} from '../reduxstore/ecomSlice'

const CartItem = () => {
    const dispatch=useDispatch();

    const productData = useSelector(state=>state.ecom.productData)
    console.log(productData)
  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont'>Shopping Cart</h2>
        </div>
        <div>
            {productData.map((item)=>(
                <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                    <div className='flex items-center gap-2'>
                        <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id)) && toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-300 cursor-pointer duration-300'/>
                        <img className='w-32 h-32 object-cover' src={item.image} alt="productImage"/>
                        </div> 
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-10'>{item.price}</p>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button onClick={()=>
                                {dispatch(
                                    decrementQty({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        quantity:1,
                                        description:item.description,
                                    }))}} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white curosr-pointer duration-300 active:bg-black'>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>{dispatch(
                                incrementQty({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        quantity:1,
                                        description:item.description,
                                }))}} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white curosr-pointer duration-300 active:bg-black'>+</button>
                
                        </div>
                        <p>${item.quantity*item.price}</p>
              </div>   
                </div>
            ))}
        </div>
        <button onClick={()=>{dispatch(resetCart())&&toast.error("Cart empty")}} className='bg-black text-white'>Reset Cart</button>
        <Link to="/">
            <button className='mt-6 ml-7'>
                <span>
                    <HiArrowLeft/>
                </span>
                GO shopping
            </button>
        </Link>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  )
}

export default CartItem