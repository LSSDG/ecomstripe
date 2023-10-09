import React ,{useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'



const Cart = () => {
  const productData = useSelector(state=>state.ecom.productData);
  const [totalAmt,setTotalAmt] = useState(0);
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price+=item.price*item.quantity;
      return price
    })
    setTotalAmt(price)
  },[productData])
  return (
    <div>
      <div>
        <img className='w-full h-6 object-cover'/>
        <div className='max-w-screen-xl mx-auto py-20 flex'>
          <CartItem/>
          <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-4'>
            <h2 className='text-2xl font-medium'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>${totalAmt}</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem ipsum amet
              </span>
            </p>
            </div>
          
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            
            Total<span className='text-xl font-bold'>${totalAmt}</span>
          </p>
          <button className='bg-black text-white'>Proceed to checkout</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart