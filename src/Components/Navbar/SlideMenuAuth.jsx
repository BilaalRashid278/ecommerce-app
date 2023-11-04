import React from 'react'
import { useDispatch } from 'react-redux'
import { falseSlide } from '../../Features/reducer'
import { IoMenu } from 'react-icons/io5'
import { searchCategories } from '../../utils/constants'
import { searchCategory } from '../../Features/categorySlice'
import { useNavigate, Link } from 'react-router-dom'
const SlideMenuAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='w-[100%]'>
      <div className='flex justify-end px-5 py-3 text-3xl text-white'>
        <IoMenu onClick={() => {
          dispatch(falseSlide())
        }} className='cursor-pointer' />
      </div>
      <div>
        <ul className='flex flex-col justify-between h-[100%]'>
          {searchCategories.map((category, index) => {
            return (
              <React.Fragment key={index}>
                <li onClick={() => {
                  const convertedCategoryinLowercase = category.databaseName.toLowerCase().trim();
                  dispatch(searchCategory(convertedCategoryinLowercase));
                  navigate(`/searchCategory`);
                }} className='text-xs hover:shadow hover:scale-105 hover:px-4 h-[100%] px-2 cursor-pointer mt-1 border-b-1 border-white text-white ml-2 mr-4 my-2 flex justify-between items-center'>
                  <span>{category.name}</span>
                  <span className='text-sm'>{category.icon}</span>
                </li>
              </React.Fragment>
            )
          })}
        </ul>
      </div>
      <div className='w-[100%] my-5 mx-2'>
        <Link to='/createProduct' className='w-[80%]'>
          <button onClick={() => dispatch(falseSlide())} className='w-[60%] text-sm bg-white py-1 mx-2 rounded-sm text-primary'>Add Item</button>
        </Link>
      </div>
    </div>
  )
}

export default SlideMenuAuth
