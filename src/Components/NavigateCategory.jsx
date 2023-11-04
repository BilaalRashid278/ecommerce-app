import React, { useEffect, useState } from 'react';
import { FetchDataFromApi } from '../utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { increaseProgressValue } from '../Features/progressSlice';
import { useNavigate } from 'react-router-dom';
import { currencyList } from '../utils/constants';
const NavigateCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { SelectedCategory } = useSelector(state => state.storeCategory);
    const [ApiCategoryData, setApiData] = useState([]);
    useEffect(() => {
        dispatch(increaseProgressValue(40));
        const data = FetchDataFromApi(`/searchCategory?category=${SelectedCategory}`, {
            method: 'GET'
        });
        dispatch(increaseProgressValue(60));
        data.then((data) => {
            dispatch(increaseProgressValue(80));
            return data.json();
        }).then((jsonData) => {
            const { products } = jsonData;
            setApiData(products);
            dispatch(increaseProgressValue(100));
        }).catch((err) => {
            console.log(`Fetch Api in App js ${err.message}`);
            dispatch(increaseProgressValue(100));
            navigate('/notRespond');
        });
    }, [SelectedCategory]);

    if (ApiCategoryData?.length <= 0) {
        return (
            <div>
                <h1>This category products is not here</h1>
            </div>
        );
    } else {
        return (
            <div className='wrapper flex flex-wrap justify-center gap-1 w-[100%] sm:justify-evenly'>
                {ApiCategoryData?.map((product, index) => {
                    const myvalue = currencyList.filter((value) => {
                        const actualValue = (value.code === product?.currency);
                        return actualValue
                    });
                    const symbol = myvalue?.map((curreny, index) => {
                        return (
                            <React.Fragment key={index}>
                                <span>{curreny.symbol}</span>
                            </React.Fragment>
                        )
                    });
                    return (
                        <React.Fragment key={index}>
                            <div onClick={() => {
                                navigate(`/productDetails/${product?._id}`)

                            }} className='mt-3 h-[300px] w-[90%] sm:w-[300px] md:w-[280px] lg:w-[250px] xl:w-[230px] flex flex-col rounded cursor-pointer'>
                                <div className='w-[100%] h-[65%]'>
                                    <img className='w-[100%] h-[100%] object-cover rounded-xl' src={product?.image_url} alt='Image Not Found' />
                                </div>
                                <div>
                                    <h1 className='font-bold'>{product?.name}</h1>
                                    <h2>{`${product?.description?.slice(0, 27)}...`}</h2>
                                    <h3 className='text-primary'>{product?.price}{symbol}</h3>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        );
    };
}

export default NavigateCategory
