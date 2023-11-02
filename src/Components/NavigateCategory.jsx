import React, { useEffect, useState } from 'react';
import { FetchDataFromApi } from '../utils/api';
import { useSelector } from 'react-redux';

const NavigateCategory = () => {
    const { SelectedCategory } = useSelector(state => state.storeCategory);
    const [ApiCategoryData, setApiData] = useState([]);
    useEffect(() => {
        const data = FetchDataFromApi(`/searchCategory?category=${SelectedCategory}`, {
            method: 'GET'
        });
        data.then((data) => {
            return data.json();
        }).then((jsonData) => {
            const { products } = jsonData;
            setApiData(products);
        }).catch((err) => {
            console.log(`Fetch Api in App js ${err.message}`);
        });
    }, [SelectedCategory]);

    if (ApiCategoryData?.length <= 0) {
        return(
            <div>
                <h1>This category products is not here</h1>
            </div>
        );
    } else {
        return (
            <div>
                {ApiCategoryData?.map((product, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div>
                                <div>
                                    <img src={product?.image_url} width={300} height={200} alt="" />
                                </div>
                                <span>{product?.name}</span>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    };
}

export default NavigateCategory
