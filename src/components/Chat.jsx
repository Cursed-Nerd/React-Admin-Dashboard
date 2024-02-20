import React from 'react'
import { chatData } from '../data/dummy'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'

const Chat = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    // Just make it a "nav-item" & put it's position as "absolute"
    <div className='nav-item absolute bg-white right-5 md:right-52 top-16 dark:bg-[#42464D] p-8 w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-gray-500 text-lg dark:text-gray-200'>Messages</p>
          <button type='button' className='text-white text-xs rounded p-1 px-2 bg-[#FFA500]'>
            4 New
          </button>
        </div>
        <button
            type='button'
            onClick={() => handleClick('chat')}
            style={{color: 'rgb(153,171,180)', borderRadius: '50%'}}
            className='text-2xl p-3 hover:drop-shadow-xl hover: bg-light-gray'
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className='mt-5'>
        {chatData.map((item,index) => (
          <div key={index} className='flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer'>
            <img src={item.image} className='rounded-full h-10 w-10' alt='item.message'/>
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>{item.desc}</p>
              <p className='text-gray-500 dark:text-gray-400 text-xs'>{item.time}</p>
            </div>
          </div>
        ))}
        <button
          type='button'
          style={{backgroundColor: `${currentColor}`, color:"white", borderRadius:"10px"}}
          className='justify-center w-full p-2 hover:drop-shadow-xl mt-2'
        >
          See all messages
        </button>
      </div>
    </div>
  )
}

export default Chat