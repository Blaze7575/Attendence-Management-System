"use client"
import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>


      <div id='container' className=' overflow-hidden '>
        <div id='login_header' className='w-screen h-20'>
          <h1 className='font-bold text-5xl my-4 ml-10 inline-block'>Qalam</h1>
          <Link href={"/Dashboard"} className=' mx-5 pb-5 font-bold'>Dashboard</Link>
        </div>
        <div id="login_main" className='relative flex flex-wrap justify-center content-center'>
          <div id='login' className=' bg-white   rounded-lg'>
            <div className='font-bold text-3xl mt-6 ml-5'>Login</div>
            <input type="email" placeholder='@email' className=' border-2 border-black rounded-md py-2 px-3 mx-6 mt-10 mb-5'

              onChange={(e) => setEmail(e.target.value)}

            />
            <input type="password" placeholder='password' className=' border-2 border-black rounded-md py-2 px-3 mx-6 my-5'
              onChange={e => setPassword(e.target.value)} />
            <button
              className="rounded-md bg-green-600 py-3 px-16 mx-10 mt-3 text-white font-medium"
            >
              Login
            </button>

          </div>
        </div>
      </div>
    </>
  )
}
