import React, { useState, useRef } from 'react'
import { AiFillEyeInvisible, AiTwotoneEye } from 'react-icons/ai'
import bgImg from '../assets/blur-abstract-color-background-tantalizing-tan_950053-11631.avif'

const SignUp = () => {
  const passRef = useRef(null);
  const passErrorRef = useRef(null);
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(<AiFillEyeInvisible className='text-primary' />);
  const styles = {
    borderWidth: '1.5px',
    borderRadius: '5px'
  }

  const passwordFunction = (Length) => {
    if (Length > 8) {
      passErrorRef.current.innerHTML = ''
      console.log(Length)
    } else if (Length <= 0) {
      passErrorRef.current.innerHTML = ''
    }
    else {
      passErrorRef.current.innerHTML = 'Please enter a password minimum 8 characters Long'
    }
  };
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='h-[100vh] w-[100%] flex justify-center items-center'>
      <form action='http://localhost:5000/api/v1/signup' method='post' className='px-2 py-2 w-[30%] min-w-[280px] max-w-[400px] bg-white h-[250px] rounded-lg'>
        <div className='flex gap-2'>
          <div className='w-[100%]'> <input name='name' style={styles} className='outline-none w-[100%] border-primary py-1 px-3' type="text" placeholder='Name' required /> </div>
        </div>
        <div className='mt-3'>
          <input style={styles} name='email' value={email} onChange={(value) => {
            setEmail(value.target.value);
          }} className='outline-none border border-primary py-1 px-3 w-[100%]' type="email" placeholder='Email' required />
          <h6 ref={passErrorRef} className='text-xs text-red-600'> email</h6>
        </div>
        <div className='mt-3 relative'>
          <input ref={passRef} name='password' onChange={() => {
            const Length = passRef.current.value.length
            passwordFunction(Length);
          }} style={styles} className='outline-none border border-primary py-1 px-3 w-[100%]' type="password" placeholder='Password' required />
          <span onClick={() => {
            if (visible.type.name === 'AiFillEyeInvisible') {
              setVisible(<AiTwotoneEye className='text-primary' />)
              passRef.current.type = 'text'
              setTimeout(() => {
                setVisible(<AiFillEyeInvisible className='text-primary' />)
                passRef.current.type = 'password'
              }, 2000)
            } else {
              setVisible(<AiFillEyeInvisible className='text-primary' />)
              passRef.current.type = 'password'
            }
          }} className='absolute right-2 top-[28%] cursor-pointer'>
            {visible}
          </span>
          <h6 ref={passErrorRef} className='text-xs text-red-600'> </h6>
        </div>
        <div>
          <button className='mt-3 rounded-sm bg-primary text-white w-[100%] py-1' type='submit'>Sumbit Now</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
