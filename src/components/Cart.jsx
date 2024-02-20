import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { cartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {Button} from '../components';

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    // The transparent screen
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      {/* The white part on the right on top of the transparent screen*/}
      <div className='float-right h-screen duration-1000 ease-in-out
                     dark:text-gray-200 bg-white dark:bg-[#484B52] 
                     transition-all md:w-400 p-8'>
        
        {/* Header & Cancel Button */}
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Shopping Cart</p>
          <button
            type='button'
            onClick={() => handleClick('cart')} // To do
            style={{color: 'rgb(153,171,180)', borderRadius: '50%'}}
            className='text-2xl p-3 hover:drop-shadow-xl hover: bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Implementing cart's Data */}
        {cartData.map((item,index) => (
          <div key={index}>
            <div>
              <div className='flex items-center leading-8 gap-5 border-b-1 
                              border-color dark:border-gray-600 pb-2 pt-2'>
                <img className='rounded-lg h-80 w-24' src={item.image} alt=''/>
                <div>
                  <p className='font-semibold'>
                    {item.name}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm
                                  font-semibold'>
                    {item.category}
                  </p>
                  <div className='flex gap-4 mt-2 items-center'>
                    <p className='font-semibold text-lg'>
                      {item.price}
                    </p>
                    <div className='flex items-center border-1 border-color rounded'>
                      <button className='p-2 border-r-1 dark:border-gray-600
                      border-color text-red-600'
                        onClick={(item) => {}}
                      >
                        <AiOutlineMinus />
                      </button>
                      <p className='pl-2 pr-2 border-r-1 dark:border-gray-600
                                  border-color text-black-600'>
                        {item.quantity}
                      </p>
                      <button 
                        className='p-2 text-green-600'
                        onClick={(item) => {}}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Total Amount section*/}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-200'>Sub Total</p>
            <p className='font-semibold'>$890</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-200'>Total</p>
            <p className='font-semibold'>$890</p>
          </div>
        </div>

        {/* Place order section */}
        <div className='mt-5'>
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width='full'
          />
        </div>
      </div>
    </div>
  )
}

export default Cart