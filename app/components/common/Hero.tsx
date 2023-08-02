import React from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Button from '@/app/components/common/Button'
import style from '../../styles/global.module.css'

const Hero = (props:any) => {
  const {headline,author,role,btn} = props;
  return (
    <div>
        <div className='pt-20 lg:h-[700px]   lg:w-full bg-[#f3f3f3]'
        >
            <div className='max-w-[1300px] mx-auto lg:px-0 px-4'
            data-aos="fade-up"
            data-aos-duration="3000">
                <h1 className='font-[400] text-[36px] lg:text-[80px]   leading-[48px] lg:leading-[80px]  
                tracking-[-5%] w-[352px] lg:w-[1061px]'>{headline}</h1>               
                <div className='-mt-24'>
                <h2 className='font-[500] text[20px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] tracking-[-5%]  pt-32 '>{author}</h2>
                <p className='h-[51px] lg:h-[84px] w-[353px] lg:w-[550px] text-[#818181] text-left text-[12px] lg:text-[24px] leading-[16.8px] lg:leading-[28px] tracking-[-5%]'>{role}</p>
                </div>
                <div className='flex items-center  py-20'>
                <div className='border w-[167px] ml-1 lg:w-[1000px] mx-auto  border-black'>
                </div>
                <div className=''>
            <div className={`${style.Button}`}>
            <Button title={btn}/>
            <BsFillArrowRightCircleFill />
            </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero