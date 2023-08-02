import React from 'react'
import Image from 'next/image'
import img from '../../../public/images/Rectangle.png'
import Button from './Button'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import style from '../../styles/global.module.css'


const MorePayment = () => {
  return (
    <section className='h-[184px] lg:h-[200px] w-full lg:w-[640px] lg:rounded-[16px] bg-[#f3f3f3]'>
        <div className='flex flex-col items-center justify-center'
        data-aos="fade-up"
        data-aos-duration="3000">
          <div className='flex flex-col lg:-ml-44 pt-4'>
        <h1 className=' uppercase pb-2   px-4'>more payment options</h1>
      <div className='border-[1px] w-[342px] lg:w-[396px] border-black  mx-4'>
      </div>   
        </div>  
      <div className='h-[63px] lg:h-[85px] bg-[#fff] w-[351px] lg:w-[568px]  rounded-[12px] lg:rounded-[15px] my-4 py-4 lg:my-6  px-6 lg:px-12'>
        <div className='flex items-center justify-between  lg:flex-row'>
        <div className='flex items-center'
        data-aos="fade-up"
        data-aos-duration="3000">
            <Image 
            src={img}
            height={55}
            width={50}
            alt='small image card'
            className='object-cover rounded-[9px] lg:rounded-[15px] h-[32px] lg:h-[55px] w-[29px] lg:w-[50px] mr-4'
            />
        <div className='flex justify-center  flex-col'>
        <h1 className='font-[500] text-[12px] lg:text-[20px] leading-[16px] lg:leading-[32px] tracking-[-2%]'>
           Pay with Paystack
        </h1>
        </div>
        </div>
        <div className={`${style.Button}  -ml-32 lg:-ml-0`}
        data-aos="fade-up"
        data-aos-duration="3000">
            <Button title={"Try This"}/>
            <BsFillArrowRightCircleFill />
        </div>   
        </div>
      </div>
        </div>
    </section>
  )
}

export default MorePayment