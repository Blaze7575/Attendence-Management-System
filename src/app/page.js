"use client"
import React, { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div id='container' className=' overflow-hidden '>

        <div id="login_main" className='relative flex flex-wrap justify-center content-center'>
          <div id='login' className=' bg-white   rounded-lg'>
            <div className='font-bold text-3xl mt-6 ml-5'>Login</div>
            <form onSubmit={null}>
              <input type="email" name='email' placeholder='@email' className=' border-2 border-black rounded-md py-2 px-3 mx-6 mt-10 mb-5'

                onChange={(e) => setEmail(e.target.value)}

              />
              <input type="password" name='password' placeholder='password' className=' border-2 border-black rounded-md py-2 px-3 mx-6 my-5'
                onChange={e => setPassword(e.target.value)} />
              <button type='submit'
                className="rounded-md bg-green-600 py-3 px-16 mx-10 mt-3 text-white font-medium"
              >
                Login
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}