import React from 'react'
import {BiSearch} from 'react-icons/bi'

const NavSearchBar = () => {
  return (
    <div className='w-[100%] flex h-[32px] border-primary border-2 rounded-sm'>
      <input className='outline-none rounded-tl-sm rounded-bl-sm grow px-3' type="text" placeholder='Search Product'/>
      <button className='bg-primary rounded-tr-sm rounded-br-sm  text-white w-[50px] flex justify-center items-center text-2xl'><BiSearch/></button>
    </div>
  )
}

export default NavSearchBar
