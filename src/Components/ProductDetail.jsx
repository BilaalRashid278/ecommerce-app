import React,{useEffect,useState,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { FetchDataFromApi } from '../utils/api';
import { useDispatch } from 'react-redux';
import { increaseProgressValue } from '../Features/progressSlice';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productID} = useParams();
  const [apiProductOne,setProductOne] = useState([]);
  const [show,setShow] = useState('hidden');
  useEffect(() => {
      dispatch(increaseProgressValue(10));
      FetchDataFromApi(`/${productID}`,{
          method : 'GET'
      }).then((res) => {
        dispatch(increaseProgressValue(60));
          return res.json();
      }).then((data) => {
          const {product} = data
          setProductOne(product);
          dispatch(increaseProgressValue(100));
          setShow('block');
      }).catch((err) => {
        console.log(err)
        dispatch(increaseProgressValue(100));
        navigate('/notRespond');
      });
    },[]);
  return (
    <div className={`${show}`}>
      {apiProductOne?.map((product,index) => {
        return (
            <div key={index}>
                <h1>{product?.name}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default ProductDetail
