import React,{useRef,useState,useEffect} from 'react'
import {currencyList, categories} from '../utils/constants';
import {BiImage} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { FetchDataFromApi } from '../utils/api';
import IsAuthNav from './Navbar/IsAuthNav';
import SlideMenuAuth from './Navbar/SlideMenuAuth';
import {useSelector} from 'react-redux'

const CreateProduct = () => {
  const transfromNow = useSelector(state => state.NavTransfrom);
  const navigate = useNavigate();
  const [imageBlob,setImageBlob] = useState('');
  const [showImg,setShowImg] = useState('hidden');
  const fileRef = useRef('');
  const nameRef = useRef('');
  const textAreaRef = useRef('');
  const priceRef = useRef(0);
  const currencyRef = useRef('');
  const categoryRef = useRef('');

  useEffect(() => {

  },[]);
  const allDataCheck = (name,description,price,currency,imageBlob,category) => {
    if(name.length < 1 || description.length < 1 || price.length < 1 || currency.length < 1 || imageBlob.length < 1 || category.length < 1){
      console.log("Please fill the data");
    }else{
      const obj = {
        name : name,
        description : description,
        price : price,
        currency : currency,
        image_url : imageBlob,
        category : category.toLowerCase().split(' ').join('')
      }
      sendDataOnDataBase(obj);
    }
  };
  const sendDataOnDataBase = async (obj) => {
    try {
      const data = await FetchDataFromApi('/new',{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(obj)
      });
      console.log(data);
      navigate('/SuccessCreatedProduct/true');
    } catch (error) {
        console.log(error);
        navigate('/SuccessCreatedProduct/false');
    }
  };
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
                {currencyList.map((value) => {
                  return (
                    <>
                      <option value={value.code}>{`${value.name}  ${value.symbol}`}</option>
                    </>
                  )
                })}
              </select>
            </div>

            <div>
              <label className='font-semibold text-primary' htmlFor="description">Select Category</label> <br />
              <select ref={categoryRef} className='border-2 border-primary outline-none rounded'>{categories.map((category) => {
                return(
                  <>
                    <option value={category}>{category}</option>
                  </>
                )
              })}</select>
            </div>

            <div onClick={() => fileRef.current.click()} style={{borderStyle : 'dashed'}} className='w-[100%] lg:w-[50%] flex justify-center items-center h-[250px] border-2 cursor-pointer border-primary my-5'>
              <div className='flex items-center flex-col text-primary'>
                <BiImage className='text-3xl'/>
                <h1>Click to Select Product Image</h1>
                <input onChange={(event) => {
                    const url = URL.createObjectURL(fileRef.current.files[0]);
                    setImageBlob(url);
                    setShowImg('block');
                }} ref={fileRef} className='hidden' type="file"/>
              </div>
            </div>

            <div className={`${showImg} w-[100%] my-5`}>
              <img className='w-[20%] rounded' src={imageBlob} alt="ProductImage" />
            </div>

            <div className='w-[100%] py-5 flex justify-center'>
              <button onClick={() => {
                allDataCheck(nameRef.current.value,textAreaRef.current.value,priceRef.current.value,currencyRef.current.value,imageBlob,categoryRef.current.value);
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
