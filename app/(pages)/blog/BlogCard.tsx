import React from 'react'
import Image from 'next/image'
import Button from '../../components/common/Button'
import style from '../../styles/global.module.css'
import Link from 'next/link'

const BlogCard = (props:any) => {
  const {id,headline,link,date,read,time,button}= props;
  return (
    <div>
        <div className='flex flex-col items-center'>
          <div className='lg:flex items-center justify-center  relative top-10 lg:top-14 -right-[7rem] lg:-right-[8.5rem]'>
            <div className={`${style.Button}`}>
            <Button title={button}/>
            </div>
          </div>
       <div className='h-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px] bg-[#DEDEDE]'>
       </div>
       <Link href={`${link}${id}`}
       className='font-[500] text-[16px] lg:text-[20px] leading-[22.4px] lg:leading-[28px] tracking-[-5%] pt-5 pb-5 h-[56px]'>{headline}</Link>
       <div className='border border-black   my-10 h-[1px] w-[353px] lg:w-[420px] mx-4'></div>
        </div>
        <div className='flex items-center justify-between'>
       <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{date}</p>
       <p className='font-[400] text-gray-500 text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{read} - {time}</p>
        </div>
    </div>
  )
}

export default BlogCard