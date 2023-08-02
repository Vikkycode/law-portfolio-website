import React from 'react'
import style from '../../styles/global.module.css'
import Button from '../common/Button'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Rectangle = (props:any) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="3000">
        <div className={`max-w-[1300px] mx-auto  w-[345px] lg:w-full h-[64px] lg:h-[99px] py-[16px] px-[24px] ${style.flexBetween} bg-white 
        text-black rounded-[32px] lg:rounded-[80px] mt-[1rem] px-[1.5rem]`}>
        <h1 className='font-[500] text-[12px] lg:text-[20px] h-[32px] w-[176px] lg:w-full   tracking uppercase'>{props.title}</h1>       
        <div className={style.Button}>
            <Button title="View"/>
            <BsFillArrowUpCircleFill />
            </div>
      </div>
    </div>
  )
}

export default Rectangle