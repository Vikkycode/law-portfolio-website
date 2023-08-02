import React from 'react'
import style from '../../styles/global.module.css'

const Experience = () => {
  return (
    <div className={`h-[100vh] lg:h-[284px] bg-[#f9f9f9] w-full`}>
      <div className={`${style.flexCenter} flex-col lg:flex-row gap-[7rem] pt-20`}>
        <div className={`${style.flexColumn}`}
        data-aos="fade-right"
        data-aos-duration="3000">
        <h1 className='font-[400] text-[80px] leading-[80px] tracking-[-5%] mb-3'>40</h1>
        <p className='font-[400] h-[48px] w-[84px] text-[16px] leading-[24px] tracking-[-2%] text-center'>Years of Experience</p>
        </div>
        <div className={`${style.flexColumn}`}
        data-aos="fade-up"
        data-aos-duration="3000">
        <h1 className='font-[400] text-[80px] leading-[80px] tracking-[-5%] mb-3'>12</h1>
        <p className='font-[400] text-[16px] leading-[24px] tracking-[-2%] text-center h-[48px] w-[91px]'>Areas of Practices</p>
        </div>
        <div className={`${style.flexColumn}`}
        data-aos="fade-left"
        data-aos-duration="3000">
        <h1 className='font-[400] text-[80px] leading-[80px] tracking-[-5%] mb-3'>100+</h1>
        <p className='font-[400] text-[16px] leading-[24px] tracking-[-2%] text-center h-[48px] w-[178px]'>Happy Clients & Companies</p>
        </div>
      </div>
    </div>
  )
}

export default Experience