import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  return (
    <div className='flex flex-1 items-center justify-center'>
      <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 dark:text-gray-200'>
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800 dark:bg-gray-200" />
        </div>
        
        {currentState === 'Login' ? '' : <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required /> }

        <input type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />
        <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {
            currentState === "Login" 
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> 
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p> 
            
          }
        </div>
      </form>
    </div>
  )
}

export default Login