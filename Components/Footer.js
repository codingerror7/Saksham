import React from 'react'

const Footer = () => {
  return (
   <>
   <div id='footer' className='w-[100%] h-[25vh]  flex items-center justify-between text-black p-[40px] bg-white my-[8%]'>
    <div className='flex items-center justify-between gap-5'>
        <img className='w-[150px] h-[120px] bg-center rounded-[50%]' src='/logo.jpg'></img>
        <h3 className=' font-[gilroy] text-[18px] extrabold'></h3>
    </div>
    <div className='font-[gilroy] flex items-center justify-around gap-7 text-[20px]'>
        <h1 className='hover:cursor-pointer hover:underline'>Terms</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Privacy</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Security</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Status</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Contact</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Manage Cookies</h1>
    </div>
   </div>
   </>
  )
}

export default Footer