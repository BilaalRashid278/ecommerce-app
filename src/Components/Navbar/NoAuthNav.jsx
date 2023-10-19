import React from 'react'
import {IoMenu} from 'react-icons/io5'
import NavSearchBar from './NavSearchBar';
import {FaCartShopping} from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {trueSlide} from '../../Features/reducer'
const NoAuthNav = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
        <nav className='h-[40px] md:h-[56px] flex justify-between px-10 md:px-3 lg:justify-around items-center'>
          <div className="menubar md:hidden text-3xl text-primary">
            <IoMenu onClick={() => {
              dispatch(trueSlide())
            }} className='cursor-pointer'/>
          </div>
          <div className="log text-primary text-2xl md:text-3xl cursor-pointer">
            <Link to='/'>
              <span className='text-yellow-400'>E</span>Store
            </Link>
          </div>
          <div className='hidden md:block w-[50%]'>
            <NavSearchBar/>
          </div>
          <div className='hidden md:block relative text-2xl lg:text-3xl px-3 py-2 cursor-pointer'>
             <span className='text-sm text-white absolute top-0 right-[-7px] w-[20px] text-center h-[20px] rounded-full bg-primary'>0</span>
             <FaCartShopping/>
          </div>
          <div className='hidden md:block text-xs lg:text-sm'>
              <Link to='/login'>
                 <button className='bg-primary w-16 lg:w-20 py-1 mx-2 rounded-sm text-white'>Login</button>
              </Link>
              or
              <Link to='/signup'>
                  <button className='bg-primary w-16 lg:w-20 py-1 mx-2 rounded-sm text-white'>SignUp</button>
              </Link>
          </div>
        </nav>
    </React.Fragment>
  )
}

export default NoAuthNav
