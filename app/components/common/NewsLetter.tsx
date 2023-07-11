import React from 'react'
import style from '../../styles/global.module.css'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className='min-h-[50vh] lg:min-h-[70vh] bg-[#212121] py-20'>
        <p className='font-[500] text-left lg:text-center text-[16px] leading-[24px] tracking-[10%] 
        text-[#b7b7b7] mb-5 pl-4 lg:pl-0 uppercase'>newsletter</p>
      <div className={`${style.flexColumn} px-4`}>
        <h1 className='font-[400] text-[32px] 
        lg:text-[40px] leading-[38.4px] lg:leading-[48px] tracking-[-5%]
      text-white h-[114px] lg:h-[94px] w-[354px] lg:w-[622px] '>Never miss a study or event with our extra-ordinary law advocate</h1>
        <form action="">
          <div className='pt-20 flex items-center  justify-between lg:justify-between pl-24'>
            <input 
            type="email"
            className={`border-[1px] py-2 border-x-0 w-[352px] lg:w-[531px]
          text-white border-t-0 border-b-[#b7b7b7] bg-[#212121] 
          outline-none placeholder:text-[#b7b7b7] capitalize ${style.Text3} 
          relative`}
            placeholder='Email address here'
            />
            <div className='flex items-center  gap-3 relative right-24'>
              <Link href=''
               className='text-white font-[500] text-[16px] leading-[19.36px] tracking-[-2%] '>Submit</Link>
              <BsFillArrowRightCircleFill size={24} 
              className='text-white'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter