import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy'
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { handleClick, currentColor } = useStateContext();

  return (
    <div className='nav-item absolute bg-white right-1 top-16 w-96 p-8 dark:bg-[#42464D]'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-gray-500 text-lg dark:text-gray-200'>User Profile</p>
        <button
          type='button'
          onClick={() => handleClick('userProfile')}
          style={{color:'rgb(153,171,180)', borderRadius: '50%'}}
          className= 'text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
        <img src={avatar} className='h-24 w-24 rounded-full' alt='user-profile'/>
        <div>
          <p className='text-gray-600 font-semibold text-xl dark:text-gray-200'>Rohit Kumar</p>
          <p className='text-gray-500 text-sm dark:text-gray-400'>Administrator</p>
          <p className='text-gray-500 text-sm dark:text-gray-400'>rk@shoppy.com</p>
        </div>
      </div>

      <div>
        {userProfileData.map((item,index) => (
          <div key={index} className='flex gap-5 border-color border-b-1 p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]'>
            <button 
              type='button'
              style={{color: `${item.iconColor}`, backgroundColor: `${item.iconBg}`}}
              className='text-xl rounded-lg p-3 hover:bg-light-gray'
            >
              {item.icon}
            </button>
            <div>
              <p className='font-semibold text-gray-500 dark:text-gray-200'>{item.title}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-5'>
        <button
          type='button'
          style={{backgroundColor: `${currentColor}`}}
          className='w-full text-white rounded-lg p-1.5'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile