import React from 'react'

const page = () => {
  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-[rgb(241,255,238)] text-[#1c1f1b] font-medium'>
        <h1 className='text-center font-[gilroy] color-black text-[40px] font-bold underline'>PLEASE SELECT DISABILITY:</h1>
    <div className='h-[30vh] w-[100vw] font-[gilroy] p-[10%] m-auto flex items-center justify-between gap-8'>
        <div className='h-[20vh] w-[28vw] outline-solid outline-black text-[30px] font-bold text-center p-[20px] bg-[#fefae0] rounded cursor-pointer'>PHYSICAL DISABILITY</div>
        <div className='h-[20vh] w-[28vw] outline-solid outline-black text-[30px] font-bold text-center p-[20px] bg-[#fefae0] rounded cursor-pointer'>MENTAL DISABILITY/DYSLEXIA</div>
        <div className='h-[20vh] w-[28vw] outline-solid outline-black text-[30px] font-bold text-center p-[20px] bg-[#fefae0] rounded cursor-pointer'>VISUAL IMPAIREMENT</div>
        <div className='h-[20vh] w-[28vw] outline-solid outline-black text-[30px] font-bold text-center p-[20px] bg-[#fefae0] rounded cursor-pointer'>HEARING IMPAIREMENT</div>
       
    </div>
     <p className='font-[gilroy] text-[30px] text-semibold text-center w-[90%] mx-[5%]'>On the basis of type of disabiity selected,Saksham allows students to fully customize their learning experience. Users can select accessibility modes—vision, hearing, or physical—adjust font size, choose high-contrast themes, enable text-to-speech or braille tools, and personalize AI tutoring settings. This ensures every student learns comfortably, effectively, and according to their unique needs.<hr></hr>
     <p className='font-[gilroy] text-[30px] font-bold text-center'>FEATURE COMING SOON...</p></p>
    </div>
    </>
  )
}

export default page