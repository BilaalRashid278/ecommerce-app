import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import NoAuthNav from './Navbar/NoAuthNav'
import IsAuthNav from './Navbar/IsAuthNav'
import SlideMenuAuth from './Navbar/SlideMenuAuth'
import SlideMenuNoAuth from './Navbar/SlideMenuNoAuth'
import ShowAllProducts from './showAllProducts';
import { useSelector, useDispatch } from 'react-redux'
import NavSearchBar from './Navbar/NavSearchBar';
import ImageSlider from './ImageSlider';
import { searchCategories } from '../utils/constants';
import { searchCategory } from '../Features/categorySlice';
import { FetchDataFromApi } from '../utils/api';
import { getApiData } from '../Features/apiSlice';
import { increaseProgressValue } from '../Features/progressSlice';
import { falseSlide } from '../Features/reducer';

const Home = () => {
  const dispatch = useDispatch();
  // const {api} = useSelector(state => state.apiSlice);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(0);
  const [scrollValue,setScroll] = useState(0);
  const transfromNow = useSelector(state => state.NavTransfrom);
  const navigate = useNavigate();
  const isAuth = true
  const controllScroll = () => {
    if(scrollValue >= 1){
      dispatch(falseSlide());
    }else{
      setScroll(window.scrollY);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',controllScroll);
  },[scrollValue]);
  useEffect(() => {
    dispatch(increaseProgressValue(50));
    const data = FetchDataFromApi(`/?page=${page}&limit=${limit}`, {
      method: 'GET'
    });
    dispatch(increaseProgressValue(80));
    data.then((data) => {
      return data.json();
    }).then((jsonData) => {
      const { products } = jsonData
      dispatch(getApiData(products));
    }).catch((err) => {
      console.log(`Fetch Api in App js ${err.message}`);
      navigate('/notRespond');
    });
    dispatch(increaseProgressValue(100));
  }, [page,limit]);
  return (
    <div className='relative'>
      <div>
        {isAuth ? <IsAuthNav /> : <NoAuthNav />}
      </div>
      <div className='block md:hidden w-[85%] m-auto'>
        <NavSearchBar />
      </div>
      <div className={`absolute w-72 z-20 nav-sliding ${transfromNow} h-[100vh] bg-primary top-0`}>
        {isAuth ? <SlideMenuAuth /> : <SlideMenuNoAuth />}
      </div>
      <div className='flex w-[100%] md:px-5 gap-2 mt-5'>
        <div className='hidden md:block w-[300px] h-[400px] border-2 border-primary bg-primary text-white rounded'>
          <ul className='flex flex-col justify-between h-[100%]'>
            {searchCategories.map((category, index) => {
              return (
                <React.Fragment key={index}>
                  <li onClick={() => {
                    const convertedCategoryinLowercase = category.databaseName.toLowerCase().trim();
                    dispatch(searchCategory(convertedCategoryinLowercase));
                    navigate(`/searchCategory`);
                  }} className='text-xs hover:shadow hover:scale-105 hover:px-4 h-[100%] px-2 cursor-pointer mt-1 border-b-1 border-white flex justify-between items-center'>
                    <span>{category.name}</span>
                    <span className='text-sm'>{category.icon}</span>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </div>
        <div className='w-[100%]'>
          <ImageSlider />
        </div>
      </div>

      <div className='flex my-10 px-5'>
        <ShowAllProducts />
      </div>
    </div>
  )
}

export default Home
