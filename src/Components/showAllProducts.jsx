import React from 'react'
import { useSelector } from 'react-redux';

const ShowAllProducts = () => {
    const {api} = useSelector(state => state.apiSlice);
  return (
    <div className='wrapper flex flex-wrap w-[95%] m-auto border border-red-700 '>
      {api?.map((product,index) => {
        return(
          <>
            <div key={index}>
              <div>
                <h1 className='font-bold'>{product?.name}</h1>
                <h2>{product?.description}</h2>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ShowAllProducts;
