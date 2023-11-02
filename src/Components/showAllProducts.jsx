import React from 'react'
import { useSelector } from 'react-redux';
import { currencyList } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
const ShowAllProducts = () => {
  const {api} = useSelector(state => state.apiSlice);
  const navigate = useNavigate();
  return (
    <div className='wrapper flex flex-wrap justify-center gap-1 w-[100%] sm:justify-evenly'>
      {api?.map((product,index) => {
        const myvalue = currencyList.filter((value) => {
          const actualValue = (value.code === product?.currency);
          return actualValue
        });
        const symbol = myvalue?.map((curreny,index) => {
          return(
            <React.Fragment key={index}>
              <span>{curreny.symbol}</span>
            </React.Fragment>
          )
        });
        console.log(product._id);
        return(
          <React.Fragment key={index}>
            <div onClick={() => {
                navigate(`/productDetails/${product?._id}`)
                
            }} className='mt-3 h-[300px] w-[90%] sm:w-[300px] md:w-[280px] lg:w-[250px] xl:w-[230px] flex flex-col rounded cursor-pointer'>
              <div className='w-[100%] h-[65%]'>
                <img className='w-[100%] h-[100%] object-cover rounded-xl' src={product?.image_url} alt="" />
              </div>
              <div>
                <h1 className='font-bold'>{product?.name}</h1>
                <h2>{`${product?.description?.slice(0,27)}...`}</h2>
                <h3 className='text-primary'>{product?.price}{symbol}</h3>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ShowAllProducts;
