import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { FetchDataFromApi } from '../utils/api';

const ProductDetail = () => {
  const {productID} = useParams();
  const [apiProductOne,setProductOne] = useState([]);
  useEffect(() => {
    FetchDataFromApi(`/${productID}`,{
        method : 'GET'
    }).then((res) => {
        return res.json();
    }).then((data) => {
        const {product} = data
        setProductOne(product);
    }).catch((err) => console.log(err));
  },[]);
  return (
    <div>
      {apiProductOne?.map((product,index) => {
        return (
            <React.Fragment key={index}>
                <h1>{product?.name}</h1>
            </React.Fragment>
        )
      })}
    </div>
  )
}

export default ProductDetail
