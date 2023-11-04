import React,{useRef,useState, useEffect} from 'react'
import {currencyList, searchCategories} from '../utils/constants';
import {BiImage} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { FetchDataFromApi } from '../utils/api';
import IsAuthNav from './Navbar/IsAuthNav';
import SlideMenuAuth from './Navbar/SlideMenuAuth';
import {useSelector, useDispatch} from 'react-redux'
import { increaseProgressValue } from '../Features/progressSlice';
import { fastSlide } from '../Features/reducer';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const transfromNow = useSelector(state => state.NavTransfrom);
  const navigate = useNavigate();
  const [showImageUrl,setShowImageUrl] = useState('');
  const [showImg,setShowImg] = useState('hidden');
  const [scrollValue,setScroll] = useState(0);
  const urlRef = useRef('');
  const nameRef = useRef('');
  const textAreaRef = useRef('');
  const priceRef = useRef(0);
  const currencyRef = useRef('');
  const categoryRef = useRef('');
  const allDataCheck = (name,description,price,currency,imageUrl,category) => {
    dispatch(increaseProgressValue(30));
    if(name.length < 1 || description.length < 1 || price.length < 1 || currency.length < 1 || imageUrl.length < 1 || category.length < 1){
      alert("Please fill the data");
      dispatch(increaseProgressValue(100));
    }else{
      dispatch(increaseProgressValue(40));
      const obj = {
        name : name,
        description : description,
        price : price,
        currency : currency,
        image_url : imageUrl,
        category : category.toLowerCase()
      };
      dispatch(increaseProgressValue(60));
      sendDataOnDataBase(obj);
    }
  };
  const sendDataOnDataBase = async (obj) => {
    dispatch(increaseProgressValue(80));
    try {
      const data = await FetchDataFromApi('/new',{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(obj)
      });
      dispatch(increaseProgressValue(100));
      navigate('/SuccessCreatedProduct/true');
    } catch (error) {
        console.log(error);
        dispatch(increaseProgressValue(100));
        navigate('/SuccessCreatedProduct/false');
    }
  };
  const controllScroll = () => {
    if(scrollValue >= 1){
      dispatch(fastSlide());
    }else{
      setScroll(window.scrollY);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',controllScroll);
  },[scrollValue]);
  useEffect(() => {
    dispatch(increaseProgressValue(100));
  },[]);
  return (
    <div>
      <IsAuthNav/>
      <div className='flex justify-center py-14 w-[100%] h-[100vh]'>
        <div className='w-[90%] lg:w-[50%] py-10 flex px-5'>
          <div className='w-[100%]'>

            <div className='w-[100%] md:w-[50%]'>
              <label className='font-semibold text-primary' htmlFor="name">Product Name</label><br />
              <input ref={nameRef} className='outline-none border-2 border-primary rounded px-2 py-1 my-2 w-[100%]' type="text" id="name" required />
            </div>
            <div>
              <label className='font-semibold text-primary' htmlFor="description">Description</label> <br />
              <textarea ref={textAreaRef} className='resize-none outline-none border-2 border-primary rounded px-2 py-1 my-2 w-[100%]' id="description" cols="30" rows="10" placeholder='Write a detailed description for product' required />
            </div>

            <div className='w-[100%] md:w-[50%] my-3'>
              <label className='font-semibold text-primary' htmlFor="price">Add Price</label> <br />
              <input ref={priceRef}  className='outline-none border-2 border-primary rounded px-2 py-1 my-2 w-[100%]' type="number" id="price" required />
              <label className='font-semibold text-primary' htmlFor="currency">Select Currency</label> <br />
              <select ref={currencyRef} id='currency' className='border-2 border-primary outline-none rounded w-[100%]'>
                {currencyList.map((value,index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={value.code}>{`${value.name}  ${value.symbol}`}</option>
                    </React.Fragment>
                  )
                })}
              </select>
            </div>

            <div>
              <label className='font-semibold text-primary' htmlFor="description">Select Category</label> <br />
              <select ref={categoryRef} className='border-2 border-primary outline-none rounded'>{searchCategories.map((category,index) => {
                return(
                  <React.Fragment key={index}>
                    <option value={category.databaseName}>{category.name}</option>
                  </React.Fragment>
                )
              })}</select>
            </div>

            <div className='w-[100%]flex justify-center items-center cursor-pointer my-5'>
              <div>
                <label className='font-semibold text-primary' htmlFor='imgUrl'>Paste the Product Image url</label>
                <input id='imgUrl' ref={urlRef} onChange={() => {
                  setShowImageUrl(urlRef.current?.value);
                  setShowImg('block');
                  }} className='outline-none border-2 border-primary rounded px-2 py-1 my-2 w-[100%]' type="text"/>
              </div>
            </div>

            <div className={`${showImageUrl.length <= 0 ? 'hidden' : showImg} w-[100%] my-5`}>
              <img className='w-[20%] rounded' src={showImageUrl} alt="ProductImage" />
            </div>

            <div className='w-[100%] py-5 flex justify-center'>
              <button onClick={() => {
                allDataCheck(nameRef.current.value,textAreaRef.current.value,priceRef.current.value,currencyRef.current.value,urlRef.current.value,categoryRef.current.value);
              }} className='w-[100%] px-2 py-1 bg-primary hover:bg-orange-600 text-white rounded'>Create Project</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute w-72 nav-sliding ${transfromNow} h-[100vh] bg-primary top-0`}>
          <SlideMenuAuth/>
        </div>
    </div>
  )
}

export default CreateProduct;
