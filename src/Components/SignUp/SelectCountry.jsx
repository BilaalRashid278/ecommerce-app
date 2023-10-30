import React,{useRef} from 'react'
import AllCountries from '../../constant.js';
import { useDispatch } from 'react-redux';
import {setAnimation1} from '../../Features/reducer.js'

const SelectCountry = () => {
    const dispatch = useDispatch();
    const countrySelectRef = useRef(null);

  return (
    <div className='flex flex-col items-center my-14'>
        <select ref={countrySelectRef} className={`border-primary border-2 text-primary outline-none w-[30%] py-1 rounded-md`}>
            {AllCountries.map((country,index) => {
                return(
                    <>
                        <option key={index} value={country}>{country}</option>
                    </>
                )
            })}
        </select>
        <div>
            <button onClick={() => {
                console.log(countrySelectRef.current.value);
                dispatch(setAnimation1())
            }} className='bg-primary my-7 w-40 py-1 text-white rounded-lg hover:brightness-125'>OK</button>
        </div>
    </div>
  )
}

export default SelectCountry
