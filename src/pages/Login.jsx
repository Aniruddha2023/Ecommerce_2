import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const onSumbitHandler = async (e) => {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={onSumbitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
     {currentState === 'Login' ? '': <input 
        type="text"
        className="w-full px-3 py-2 border border-gray-800 placeholder-gray-500"
        placeholder="Username"
      />} 
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 placeholder-gray-500"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 placeholder-gray-500"
        placeholder="Password"
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-gray-500 cursor-pointer'>Forgot Password?</p>

        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Create Account')}>Create Account </p>
          : <p onClick={()=>setCurrentState('Login')}>Login</p>
        }

      </div>
      <button className="w-full bg-gray-800 text-white py-2 mt-4"> {currentState === 'Login' ? 'Sign In' : 'Create Account'}</button>
    </form>
  );
};

export default Login;
