import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="A" className='h-full w-full'>
          <div id='login_header' className='w-full h-20 flex justify-between bg-[#027550]'>
            <div className='inline-block'>
              <h1 className='font-bold text-5xl my-4 ml-10 inline-block'>AMS</h1>
              <Link id='lk1' href="/DashboardS" className=' mx-5 pb-5 font-bold'>Dashboard</Link>
              <Link id='lk2' href="/DashboardT">DashboardT </Link>
              <Link id='lk3' href="/DashboardT">Home</Link>
            </div>
            <div className='w-[6.5vw] mr-[5px ] flex content-center flex-wrap justify-between'>
              <Image className='inline-block w-[2vw] h-[2vw] mt-[1vw] ml-[5px]' src={require("./img1.png")} />
              <div className=' h-[3vw] w-[3vw] rounded-[50%] bg-[white] mr-[10px]'></div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
