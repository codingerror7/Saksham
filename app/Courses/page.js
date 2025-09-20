import React from 'react'
import Navbar from '@/Components/Navbar'

const page = () => {
  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-[rgb(241,255,238)] text-[#1c1f1b] font-medium'>
        <Navbar/>
        <p className='font-[gilroy] w-[90%] text-[30px] font-semibold text-center mx-[5%] my-[10%]'>Saksham offers inclusive courses designed for differently-abled students, integrating text, audio, braille, and sign language formats. Each course includes AI-powered assistance, adaptive quizzes, and interactive content, ensuring accessibility, engagement, and personalized learning. Students can learn at their own pace, overcoming barriers and achieving academic success confidently.</p>
        <hr>
        </hr>
        <p className='font-[gilroy] text-[30px] font-bold text-center'>FEATURE COMING SOON...</p>
    </div>
    </>
  )
}

export default page