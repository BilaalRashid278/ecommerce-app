import React from 'react'
import { useSelector } from 'react-redux';

const ShowAllProducts = () => {
    const {api} = useSelector(state => state.apiSlice);
  return (
    <div>
      hello
    </div>
  )
}

export default ShowAllProducts;
