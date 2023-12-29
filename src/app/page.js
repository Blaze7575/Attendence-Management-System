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

//----------------------------------------------------------------------------------------------------------------------

// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// // import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/router';
// // import axios from 'axios';

// const axios = require("axios");

// export default function Home() {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   // const navigate = useNavigate();
 

//   const handleSubmit = async (e) => {
//     const router2 = useRouter();
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/login', inputs);
//       if (res.data.login) { // if true then login or move to /page
//         router2.push('/Dashboard');
//       } else {
//         alert('No record found');
//       }
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <div id='container' className='overflow-hidden'>
//         <div id='login_header' className='w-screen h-20'>
//           <h1 className='font-bold text-5xl my-4 ml-10 inline-block'>Qalam</h1>
//           {/* Use Link or NavLink from react-router-dom */}
//           <Link href={'/Dashboard'} className='mx-5 pb-5 font-bold'>
//             Dashboard
//           </Link>
//           {/* <Link to='/Courses' className='mx-5 pb-5 font-bold'>
//             Courses
//           </Link> */}
//         </div>
//         <div id='login_main' className='relative flex flex-wrap justify-center content-center'>
//           <div id='login' className='bg-white rounded-lg'>
//             <div className='font-bold text-3xl mt-6 ml-5'>Login</div>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type='email'
//                 placeholder='Email'
//                 name='email'
//                 value={inputs.email}
//                 onChange={handleChange}
//                 className='border-2 border-black rounded-md py-2 px-3 mx-6 mt-10 mb-5'
//               />
//               <input
//                 type='password'
//                 placeholder='Password'
//                 name='password'
//                 value={inputs.password}
//                 onChange={handleChange}
//                 className='border-2 border-black rounded-md py-2 px-3 mx-6 my-5'
//               />
//               <button
//                 type='submit' // Change type to submit
//                 className='rounded-md bg-green-600 py-3 px-16 mx-10 mt-3 text-white font-medium'
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }