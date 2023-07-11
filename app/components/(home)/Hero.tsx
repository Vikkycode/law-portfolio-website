import React from 'react'
import style from '../../styles/global.module.css'
import Image from 'next/image'
import image from '../../../public/images/pexels-glassskycraper.png'
import mobileImage from '../../../public/images/glassskycraper.png'
import { HiOutlineArrowCircleDown} from 'react-icons/hi'

const Hero = () => {
  return (
    <div className={`flex flex-2 flex-col h-[90vh] lg:min-h-[136vh] lg:w-full`}>
      <div className={`${style.flexAround} flex-2 flex-col lg:flex-row`}>          
      <div className='pl-4 lg:pl-[8rem] -mt-0 lg:-mt-[350px]'>
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
       className='object-cover block absolute top-[30rem] bottom-[10rem] -right-10 lg:top-0  lg:hidden w-full h-[430px] w-[392.83px] rotate-[45.88%]'
       />
      </div>
      <div className={`${style.flexStart}  relative z-10 pl-4 lg:pl-[8rem] mt-[26rem] lg:-mt-[8rem] gap-4`}>
        <HiOutlineArrowCircleDown
        size={30} 
        className='h-[24px] w-[24px]' />
        <p className='uppercase font-[400] text-[12px] leading-[24px] tracking-[10%]'>scroll down</p>
      </div>
    </div>
  )
}

export default Hero