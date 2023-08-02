'use client'
import React, {useEffect } from 'react'
import style from '../../styles/global.module.css'
import Image from 'next/image'
import image from '../../../public/images/pexels-glassskycraper.png'
import mobileImage from '../../../public/images/glassskycraper.png'
import { HiOutlineArrowCircleDown} from 'react-icons/hi'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(()=>{
   AOS.init(); 
  },[])

  return (
    <div className={`flex flex-2 flex-col h-[90vh] lg:min-h-[136vh] lg:w-full`}
    >
      <div className='border w-[1300px] mx-auto  border-black -mt-6 hidden lg:block'>
        </div>
      <div className={`${style.flexAround} flex-2 flex-col lg:flex-row`}
      data-aos="fade-up"
      data-aos-duration="3000">          
      <div className='pl-4 lg:pl-[6rem] -mt-0 lg:-mt-[350px]'
       data-aos="fade-up">
        <h1 className={`${style.headTitle} h-[100px] lg:h-[180px] w-[311px] lg:w-[640px]`}>Law With a special touch.</h1>
        <p className='font-[400] text-[14px] mt-[2rem] z-10 relative 
        lg:mt-0 leading-[24px] tracking-[-2%] h-[96px] text-start lg:h-[48px] w-[353px] lg:w-[574px]'>With over 40 years of legal experience, Chief Mike Agbedor Abu Ozekhome is a renowned
          Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria (SAN).
        </p>
      </div>
      <Image
       src={image}
       height={935.51}
       width={500}
       alt='Glass Skycraper'
       className='object-cover lg:mt-40 hidden lg:block w-full rotate-[16.88%]'
       />
       <Image
       src={mobileImage}
       height={430.95}
       width={392.83}
       alt='Glass Skycraper'
       className='object-cover block absolute top-[30rem] bottom-[10rem]  lg:top-0  lg:hidden w-[392.83px] h-[430px]  rotate-[45.88%]'
       />
      </div>
      <div className={`${style.flexStart}  relative z-10 pl-4 lg:pl-[6rem] mt-[26rem] lg:-mt-[8rem] gap-4`}
      data-aos="fade-up"
      data-aos-duration="3000">
        <HiOutlineArrowCircleDown
        size={30} 
        className='h-[24px] w-[24px]' />
        <p className='uppercase font-[400] text-[12px] leading-[24px] tracking-[10%]'>scroll down</p>
      </div>
    </div>
  )
}

export default Hero