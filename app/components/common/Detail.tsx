import React from 'react'

const Detail = (props:any) => {
    const {location,detail} = props;

    return (
    <div>
        <h2 className='font-[500] text-[12px] lg:text-[16px] leading-[24px] tracking-[10%]  text-[#b7b7b7]
            uppercase'>location
            </h2>
            <p className='font-[400] text-[14px] lg:text-[16px] leading-[24px] tracking-[-2%] capitalize'>{location}</p>
            <div className='flex items-center justify-between  mt-6'>
            <div className='flex flex-col'>
            <h2 className='font-[500]
            text-[12px] lg:text-[16px] leading-[24px] tracking-[10%] text-[#b7b7b7]
            uppercase'>details
            </h2>
            <p className='font-[400] text-[14px] lg:text-[16px] leading-[24px] tracking-[-2%] capitalize'>{detail}
            </p>
            </div>
            <div className='flex flex-col  items-start lg:pr-20'>
            <h2 className='font-[500]
            text-[12px] lg:text-[16px] leading-[24px]
            tracking-[10%] lg:tracking-[10%] text-[#b7b7b7]
            uppercase'>type
            </h2>
            <p className='font-[400] text-[14px] lg:text-[16px] leading-[24px] tracking-[-2%] capitalize'>physical & virtual</p>
            </div>
            </div>
    </div>
  )
}

export default Detail