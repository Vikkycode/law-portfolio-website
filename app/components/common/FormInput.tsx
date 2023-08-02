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
    <div className='h-[60px]'
    data-aos="fade-up"
    data-aos-duration="3000"> 
        {/* <h1 className='font-[400] text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[48px] tracking-[-5%]  pb-10  lg:order-last order-first lg:mb-10 w-[353px]  lg:w-[640px]'>{title}</h1> */}
    <div className=''>
        <div>
        <input
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className='border-[1px] py-2 border-x-0  w-[352px] lg:w-[639px] text-black  border-t-0 border-b-[#000] outline-none placeholder:text-[#000] capitalize'
          />     
        </div>
    </div>    
    </div>
  )
}

export default FormInput