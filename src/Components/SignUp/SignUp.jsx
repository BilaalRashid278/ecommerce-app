import React,{useEffect} from 'react'
// import { AiFillEyeInvisible, AiTwotoneEye } from 'react-icons/ai'
// import bgImg from '../assets/blur-abstract-color-background-tantalizing-tan_950053-11631.avif'
import '../../App.css'
import SelectCountry from './SelectCountry';
import {useSelector} from 'react-redux'



const SignUp = () => {
  const animate1 = useSelector(state => state.animate1);
  const animate2 = useSelector(state => state.animate2);
  useEffect(() => {
    localStorage.setItem('checked1',false);
    console.log(localStorage.getItem('checked1'))
},[]);
  return (
    <header className='h-[100vh] py-12'>
      <section className='flex justify-center'>
        <div className='flex w-[80%] md:w-[60%] lg:w-[40%] relative justify-between'>
          <div className='flex flex-col items-center gap-y-3'>
            <h1 className={`${localStorage.getItem('checked1') === false ? 'bg-green-700' : 'bg-primary'} w-6 h-6 text-white lg:scale-125 text-center rounded-full`}>1</h1>
            <p className='text-xs'>Select Country</p>
          </div>
          <div className='flex flex-col items-center gap-y-3 text-center'>
            <h1 className='bg-primary w-6 h-6 text-white lg:scale-125 text-center rounded-full'>2</h1>
            <p className='text-xs'>About Your <br /> Self Infromation</p>
          </div>
          <div className='flex flex-col items-center gap-y-3'>
            <h1 className='bg-primary w-6 h-6 text-white lg:scale-125 text-center rounded-full'>3</h1>
            <p className='text-xs'>Register Account</p>
          </div>
          <div className={`absolute left-[14%] lg:left-[13%] top-[19%] h-[2px] ${animate1} bg-primary`}></div>
          <div className={`absolute left-[53.5%] lg:left-[55%] top-[19%] h-[2px] ${animate2} bg-primary`}></div>
        </div>
      </section>
      <main>
        <SelectCountry/>
      </main>
    </header>
  )
}

export default SignUp
