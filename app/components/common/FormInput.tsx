'use client'
import React, { useState } from 'react'

const FormInput = (props:any) => {
    const {
        title,
        type='text',
        name,
        value,
        onChange,
        placeholder,
        className
    } = props;

   
    return (
    <div className='lg:h-[40px]'>     
        <h1 className='font-[400] text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[48px] tracking-[-5%] lg:h-[96px] pb-10 lg:mt-8 lg:mb-10 w-[353px]  lg:w-[640px]'>{title}</h1>
        <div className=''>
        <input
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className='border-[1px] py-2 border-x-0  w-[352px] lg:w-[639px] text-black  border-t-0 border-b-[#000] outline-none placeholder:text-[#000] capitalize '
          />     
        </div>
    </div>
  )
}

export default FormInput