'use client'

import React from 'react'
import style from '../../styles/global.module.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Card = (props:any) => {
  const router = useRouter();

  const handleClicklinks = ()=>{
    router.push(props.href)
  }

  return (
    <div>
        <div className={`${style.flexBetween}`}>
          <div className={`${style.flexStartColumn} rounded-[20px] w-[320px] lg:w-[420px] h-[284px] px-12 py-10 lg:p-10  bg-[#f9f9f9]`}>
          <div className='flex items-center'>
          <div className='bg-[#1c1c1c] h-[58px] w-[58px] rounded-full'></div>
          
          <h1 
          className={`${style.Text3} pl-5 font-[500]`}>{props.name}</h1>
          </div>
          <p className={`${style.Text3} py-8`}>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Card