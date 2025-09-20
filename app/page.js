"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Pagetwo from '@/Components/Pagetwo'
import Footer from '@/Components/Footer'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Navbar/>     
    <div id='pageOne' className='min-h-[100vh] w-[100vw] bg-[rgb(241,255,238)] relative'>
    
      <div className='w-[55%] mx-[1.5%] my-[1.9%] p-[20px] absolute'>
          <h1 id='gsap1' className='text-[75px] uppercase font-[gilroy] text-[#1c1f1b] font-extrabold leading-[95px]'>EMPOWERING EVERY ABILITY,LEARNING WITHOUT LIMITS <span className='text-red-500'>SAKSHAM</span></h1>
          <div className='flex items-center justify-evenly text-white font-[gilroy] w-[50%] text-[15px] text-center my-[6%]'>
            <Link href='./Community' target="_blank"
            className='outline-solid outline-black w-[45%] p-[3px] rounded-[10px] text-black hover:cursor-pointer'>JOIN COMMUNITY</Link>
            <Link href = './Courses' target="_blank" rel="noopener noreferrer"  className='outline-solid outline-black w-[45%] p-[3px] rounded-[10px] bg-transparent text-black font-semibold hover:cursor-pointer hover:cursor-pointer hover:bg-black hover:text-white'>EXPLORE COURSES!</Link>
          </div>
        </div>
        <img id='img1' className='absolute h-[32vh] w-[18vw] my-[7%] mx-[77%] bg-top object-cover rounded-[15%]  z-30' src='/img1.jpg'></img>
    <img id='img2' className='absolute h-[30vh] w-[20vw] my-[22%] mx-[57%] bg-top object-cover rounded-[15%] z-20' src='/img7.jpg'></img>
    <img id='img3' className='absolute h-[40vh] w-[25vw] my-[4%] mx-[54%] bg-center object-cover rounded-[10%] z-40' src='/img6.jpg'></img>
    <img id='img4' className='absolute h-[37vh] w-[23vw] my-[21.5%] mx-[75%] bg-center object-cover rounded-[10%] z-30 ' src='/img2.jpg'></img>
    </div>
    <div className='h-[315vh] w-[100vw] overflow-hidden bg-[rgb(241,255,238)] text-black'>
    <Pagetwo/>
    <Footer/>
    </div>

    </>
  )
}

export default page