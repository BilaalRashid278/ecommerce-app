import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FetchDataFromApi } from '../utils/api';
import { useDispatch } from 'react-redux';
import { increaseProgressValue } from '../Features/progressSlice';
import { useNavigate } from 'react-router-dom';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import {IoMenu} from 'react-icons/io5';
// import { currencyList } from '../utils/constants';
import { searchCategories } from '../utils/constants';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productID } = useParams();
  const [apiProductOne, setProductOne] = useState([]);
  const [show, setShow] = useState('hidden');
  useEffect(() => {
    dispatch(increaseProgressValue(10));
    FetchDataFromApi(`/${productID}`, {
      method: 'GET'
    }).then((res) => {
      dispatch(increaseProgressValue(60));
      return res.json();
    }).then((data) => {
      const { product } = data
      setProductOne(product);
      dispatch(increaseProgressValue(100));
      setShow('block');
    }).catch((err) => {
      console.log(err)
      dispatch(increaseProgressValue(100));
      navigate('/notRespond');
    });
  }, []);
  return (
    <React.Fragment>
      <nav className='w-[90%] m-auto flex justify-between items-center h-[50px]'>
        <div className="log text-primary text-2xl md:text-3xl cursor-pointer">
          <Link to='/'>
            <span className='text-yellow-400'>E</span>Store
          </Link>
        </div>
        <div className='text-3xl text-primary'>
          <IoMenu className='cursor-pointer'/>
        </div>
      </nav>
      <main className='flex flex-col md:flex-row md:justify-between sm:px-10 py-5 w-[100%]'>
        <section className={`${show} w-[100%] md:w-[60%] lg:w-[70%] p-2`}>
          {apiProductOne?.map((product, index) => {
            const myvalue = searchCategories.filter((value) => {
              const actualValue = (value.databaseName === product?.category);
              return actualValue
            });
            const category = myvalue?.map((category,index) => {
              return(
                <React.Fragment key={index}>
                  <span>{category.name}</span>
                </React.Fragment>
              )
            });
            const convertInInteger1 = parseInt(product?.price);
            const convertInInteger2 = parseInt(product?.price);
            const result = convertInInteger1+convertInInteger2;
            const convertpercentage = result/convertInInteger1
            const priceInPercentage = 100 / convertpercentage
            return (
              <div key={index} className='flex flex-col lg:flex-row'>
                <section className='lg:w-[50%] h-[300px]'>
                  <img className='w-[100%] h-[100%] rounded-md' src={product?.image_url} alt="Product Image Not Found" />
                </section>
                <section className='lg:w-[50%] px-5'>
                  <div className='text-primary font-bold'>
                    <span className='text-sm mr-[2px]'>{product?.currency}</span>
                    <span className='text-2xl'>{product?.price}</span>
                    <del className='ml-2 text-sm'>{product?.currency}{result}</del>
                    <span className='ml-2 text-sm'>{`-${priceInPercentage}%`}</span>
                  </div>
                  <div className='text-lg font-bold mt-1'>
                    <h1>{product?.name}</h1>
                  </div>
                  <div className='mt-2 text-sm font-bold'>
                    <p>{`${product?.description.slice(0,100)}...`}</p>
                  </div>
                  <div className='mt-3 text-sm font-bold'>
                    <h1 className='text-lg'>Category</h1>
                    <h4 className='text-sm'>{category}</h4>
                  </div>
                </section>
              </div>
            )
          })}
          <hr className='h-[1px] bg-black/[0.5] my-5' />
          <div className='detailDescription font-bold'>
            <h1 className='text-lg'>Detail Description</h1>
            <h4>{apiProductOne?.map((product,index) => {
              return(
                <span key={index} className='text-sm font-normal'>
                  {product?.description}
                </span>
              )
            })}</h4>
          </div>
        </section>
        <AddToCart />
      </main>
    </React.Fragment>
  )
}

export default ProductDetail
