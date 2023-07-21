import React from 'react'
import Image from 'next/image'
import Button from '../../components/common/Button'
import style from '../styles/global.module.css'
import logo from '../../../public/images/Vector.svg'


const storeCard = (props:any) => {

  const {headline,price,rate,date} = props;

  return (
    <div>
    <div className='flex flex-col items-center'>
    <div className='relative h-[68px] w-[50px] top-[4.3rem] lg:top-[4.3rem] left-[7rem] lg:left-[8rem]'>
            <Image 
            src={logo}
            height={80}
            width={59}
            alt='logo'
            />
            </div>
   <div className='h-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px] bg-[#DEDEDE]'>

   </div>
   <div className='flex items-center justify-around'>
   <p className='font-[500] text-[16px] lg:text-[20px] lg:w-[350px]  leading-[22.4px] lg:leading-[28px]  tracking-[-5%] capitalize py-5 h-[56px]'>{headline}</p>
   <p className='font-[700] text-[16px] leading-[32px]  lg:w-[68px] hidden lg:block pt-4 tracking-[-2%]'>{price}</p>
   </div>
   <div className='border border-black   my-10 h-[1px] w-[353px] lg:w-[420px] mx-4'></div>
    </div>
    <div className='flex items-center justify-between'>
   <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{date}</p>
   <p className='font-[400] text-gray-500 text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{rate}</p>
    </div>
</div>
  )
}

export default storeCard