import React from 'react'
import '../App.css';
import NoAuthNav from './Navbar/NoAuthNav'
import IsAuthNav from './Navbar/IsAuthNav'
import SlideMenuAuth from './Navbar/SlideMenuAuth'
import SlideMenuNoAuth from './Navbar/SlideMenuNoAuth'
import {useSelector} from 'react-redux'
import NavSearchBar from './Navbar/NavSearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const transfromNow = useSelector(state => state.NavTransfrom);
  const isAuth = true
  const navigate = useNavigate();
  return (
    <div className='relative'>
        <div>
            {isAuth ? <IsAuthNav/> : <NoAuthNav/> }
        </div>
        <div className='block md:hidden w-[85%] m-auto'>
          <NavSearchBar/>
        </div>
        <div>
          <button onClick={() => {
            navigate('/createProduct');
          }} className='bg-primary outline-none px-2 py-1 text-white mx-7 my-10'>Create Product</button>
        </div>
        <div className={`absolute w-72 nav-sliding ${transfromNow} h-[100vh] bg-primary top-0`}>
          {isAuth ? <SlideMenuAuth/> : <SlideMenuNoAuth/>}
        </div>
    </div>
  )
}

export default Home
