import React from 'react';
import { useParams } from 'react-router-dom';

const SuccessCreatedProduct = () => {
  const {message} = useParams();
  if(message === 'true'){
    return(
        <div className='flex justify-center items-center text-primary font-bold h-[100vh]'>
            <h1>Your Product is Created Now</h1>
        </div>
    )
  }else{
    return(
        <div className='flex justify-center items-center text-primary font-bold h-[100vh]'>
            <h1>Your Product is Not Ccreated</h1>
        </div>
    )
  }
}

export default SuccessCreatedProduct
