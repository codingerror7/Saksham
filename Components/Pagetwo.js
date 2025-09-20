import Link from 'next/link'
import React from 'react'

const Pagetwo = () => {
  return (
    <>
    <div className='w-[50vw] h-[10vh] m-auto flex items-center justify-between p-[1%] font-[gilroy] text-[#1c1f1b]'>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-white bg-[#1c1f1b] p-[0.5%]'>Braille Converter</div>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-white bg-[#1c1f1b] p-[0.5%]'>Students's AI solutions</div>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-white bg-[#1c1f1b] p-[0.5%]'>Sign Language interpretor</div>
    </div>
    <div id='div2' className='w-[94vw] h-[40vh] m-auto flex items-center justify-between p-[1%] font-[gilroy] text-[#1c1f1b]'>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#fefae0]'>
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%] text-black' src='/icon1.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>Multi-Mode Learning</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Provides text-to-speech, captions, and voice navigation, ensuring vision, hearing, and physically disabled students learn without barriers.</p>
        </div>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#fefae0]'> 
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%]' src='/icon2.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>Accessibility Toolbar</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Quickly adjust font size, contrast, themes, or enable text-to-speech for a personalized, inclusive, and comfortable learning experience.</p>
        </div>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#fefae0]'>
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%]' src='/icon3.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>Real-Time Captions</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Generates instant subtitles for lectures and videos, supporting hearing-impaired students to understand lessons clearly and in real-time.</p>
        </div>
    </div>
    <div className='w-[55%] h-[10%] m-auto text-[#1c1f1b] font-[gilroy] bg-[#fefae0] p-[1%] rounded-[20px] my-[5%]'>
        <h1 className='text-[30px] my-[2%] mx-[3%] font-semibold uppercase'>What is Saksham?</h1>
        <p className='text-left text-[17px] my-[2%] w-[95%] mx-[3%]'>Saksham is an inclusive educational platform designed for differently-abled students, providing multi-mode learning tools, AI-powered assistance, braille support, sign language interpretation, and smart campus navigation, ensuring equal access, personalized learning, and empowerment, enabling every student to achieve their full academic potential.</p>
    </div>
    <div className='h-[93vh] w-[70vw] m-auto my-[10%] text-[#1c1f1b] font-[gilroy] p-[4.5%] bg-[#fefae0] rounded-[30px]'>
        <h1 className='text-center font-semibold text-[45px] underline'>Frequently Asked Questions</h1>
        <h2 className='text-[25px] my-[2%] font-semibold'>How does Saksham compare to other platforms?</h2>
        <p className='text-[22px] text-left'>Saksham stands out by offering a fully inclusive educational experience ensuring differently-abled students access resources and participate equally—unlike traditional platforms.</p>
        <h2 className='text-[25px] my-[2%] font-semibold'>Who can use Saksham?</h2>
        <p className='text-[22px] text-left'>Students with vision, hearing, or physical disabilities can use Saksham, along with teachers and institutions aiming for inclusive education.</p>
        <h2 className='text-[25px] my-[2%] font-semibold'>Can I customize my learning experience?</h2>
        <p className='text-[22px] text-left'>Yes! Users can select their accessibility mode, adjust font size, enable high-contrast themes, and choose preferred learning tools.</p>
    </div>
    <div className='mx-[3%] my-[5%] w-[70%]'>
    <h1 id='lastdiv' className='font-[gilroy] text-[#1c1f1b] text-[80px]'>Ready To Experience <span className='text-red-500 font-extrabold text-[90px]'>SAKSHAM</span>?</h1>
    <Link href='./Community' target="_blank" className='inline-block text-center outline-solid outline-black w-[15vw] p-[3px] rounded-[10px] bg-black text-white font-semibold my-[2%] hover:cursor-pointer hover:bg-transparent hover:text-black'>JOIN COMMUNITY!</Link>
    </div>
    </>
  )
}

export default Pagetwo