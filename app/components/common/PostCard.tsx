import React from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Button from '@/app/components/common/Button'
import style from '../../styles/global.module.css'

const PostCard = (props:any) => {
  const {subheadline,author,role,btn,button,read,time,date,paragraph,content} = props;
  return (
    <div>
        <section className='pt-20 lg:h-[700px] lg:w-full bg-[#f3f3f3]'>
            <div className='max-w-[1300px] mx-auto lg:px-0 px-4'>
                <h1 className='font-[400] text-[36px] lg:text-[80px] leading-[48px] lg:leading-[80px] tracking-[-5%] w-[352px] lg:w-[1061px]'>{subheadline}</h1>               
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
        </section>
        <section className='bg-white lg:min-h-[100vh] lg:px-0 px-4 pt-10 lg:pt-20'>
        <div className='flex flex-col justify-start'>
          <div className='lg:flex block'>
          <div className='lg:flex block justify-center top-10 lg:top-4 relative -right-[15rem] lg:-right-[25rem] z-30 w-[100px]'>
            <div className={`${style.Button}`}>
            <Button title={button}/>
            </div>
          </div>
       <div className='h-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px] bg-[#DEDEDE] lg:mb-2 lg:mr-4'>
       </div>
       <p className='w-[353px] lg:w-[860px] text-justify font-[400] text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] tracking-[-2%]'>{paragraph}</p>
          </div>
          <div className='max-w-[1300px] mx-auto'>
        <p className='w-[353px] lg:w-0 font-[400] text-[16px] lg:text-[20px] leading-[28px] lg:leading-[32px] text-justify tracking-[-2%]'>{content}</p>
<div className='border border-black   my-4 h-[1px] w-[353px] lg:w-[1300px]'></div>
<div className='flex justify-between lg:justify-end items-center gap-24 pt-10 lg:pt-0 pb-4 lg:pb-0'>
<p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] tracking-[-2%]'>{date}</p>
<p className='text-gray-400 text-[12px] lg:text-[16px]'>{read}-{time}</p>
</div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default PostCard