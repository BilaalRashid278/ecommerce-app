import React from 'react'
import ErrorImg from '../assets/InternalError.avif';
const NoApiRespond = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <img className='w-[50%]' src={ErrorImg} alt="Internal Server Error 500" />
    </div>
  )
}

export default NoApiRespond
