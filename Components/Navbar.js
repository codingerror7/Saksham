import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div id='navbar' className='h-[110px] flex items-center justify-between p-[25px] font-[gilroy] text-[#1c1f1b] font-medium'>
        <div>
          <img className='h-[110px] w-[140px] p-[5px]' src='/logo.jpg'></img>
        </div>
        <div className='flex items-center justify-between gap-3 w-[48%]'>
          <h1 className=' text-[18px] underline'>HOME</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>CLASSROOM</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>AI-TOOLS</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>DASHBOARD</h1>
          <Link href='./Signup' id='btn1'>REGISTER</Link>
        </div>
      </div></>
  )
}

export default Navbar