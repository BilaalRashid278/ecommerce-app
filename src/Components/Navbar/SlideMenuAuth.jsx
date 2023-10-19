import React from 'react'
import { useDispatch } from 'react-redux'
import { falseSlide } from '../../Features/reducer'
import { IoMenu } from 'react-icons/io5'

const SlideMenuAuth = () => {
  const dispatch = useDispatch();
  return (
    <div className='w-[100%]'>
       <div className='flex justify-end px-5 py-3 text-3xl text-white'>
          <IoMenu onClick={() => {
            dispatch(falseSlide())
          }} className='cursor-pointer'/>
       </div>
    </div>
  )
}

export default SlideMenuAuth
