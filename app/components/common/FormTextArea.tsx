'use client'
import React, { useState } from 'react'

const FormTextArea = (props:any) => {
    const {
        type='text',
        name,
        value,
        onChange,
        placeholder,
    } = props;

   
    return (
    <div className='mt-10'
    data-aos="fade-up"
    data-aos-duration="3000">     
        <div className=''>
        <textarea  
        // type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='border-[1px] py-2 border-x-0  w-[352px] lg:w-[639px] text-black  border-t-0 border-b-[#000] outline-none resize-none h-[136px] placeholder:text-[#000] -mt-16 capitalize '></textarea>     
        </div>
    </div>
  )
}

export default FormTextArea