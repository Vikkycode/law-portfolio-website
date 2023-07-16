import React from 'react'
import Image from 'next/image'
import Button from './Button'
import style from '../../styles/global.module.css'




const Card = (props:any) => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <div className='lg:flex items-center justify-center  relative top-10 lg:top-14 -right-[7rem] lg:-right-[8.5rem]'>
            <div className={`${style.Button}`}>
            <Button title={props.button}/>
        </div>
            </div>
       {/* <Image 
       src={props.image}
       height={316}
       width={420}
       alt='portfolio image'
       className='object-cover lg:-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px]'
       /> */}
       <div className='h-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px] bg-[#DEDEDE]'>

       </div>
       <p className='font-[500] text-[16px] lg:text-[20px] leading-[22.4px] lg:leading-[28px] tracking-[-5%] capitalize pt-5 pb-5 h-[56px]'>{props.headline}</p>
       <div className='border border-black   my-10 h-[1px] w-[353px] lg:w-[420px] mx-4'></div>
        </div>
        <div className='flex items-center justify-between'>
       <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{props.date}</p>
       {/* <p className='font-[400] text-gray-500 text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{props.read} - {props.time}</p> */}
        </div>
    </div>
  )
}

export default Card