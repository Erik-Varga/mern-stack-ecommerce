import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { LuTrash } from 'react-icons/lu';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={'YOUR'} text2={'CART'} />
        </div>

        <div className="">
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b border-gray-300 dark:border-gray-700 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className="flex items-center gap-6">
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 dark:bg-slate-900'>{item.size}</p>
                      <span className='text-sm'>qty</span>
                      <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                    </div>

                  </div>
                </div>
                <div className="flex justify-end">
                  <BsTrash onClick={()=>updateQuantity(item._id,item.size,0)} className='text-2xl cursor-pointer text-gray-500 hover:text-red-700 dark:hover:text-red-300' />
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Cart