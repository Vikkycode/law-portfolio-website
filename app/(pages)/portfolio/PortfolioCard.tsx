import React from 'react'
import Image from 'next/image'



const PortfolioCard = (props:any) => {
  return (
    <section className='mb-4 lg:mb-48 '>
        <div className='flex flex-col items-center'>
            <div className='lg:flex items-center justify-center hidden  absolute h-[50vh]'>
            <Image 
            src={props.icon}
            height={316}
            width={420}
            alt='icon play'
            className='object-cover h-[56px] w-[56px]  rounded-[28px]'
            />
            </div>
       <Image 
       src={props.image}
       height={316}
       width={420}
       alt='portfolio image'
       className='object-cover lg:-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px]'
       />
       <p className='font-[500] text-[16px] lg:text-[20px] leading-[22.4px] lg:leading-[28px] tracking-[-5%] capitalize pt-5'>{props.headline}</p>
       <div className='border border-black   my-5 h-[1px] w-[353px] lg:w-[420px] mx-4'></div>
        </div>
       <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{props.date}</p>
    </section>
  )
}

export default PortfolioCard