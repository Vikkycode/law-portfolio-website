import React from 'react'

const Description = (props:any) => {
    const {description} = props;
  return (
    <div>
        <h2 className='font-[500]
            text-[14px] lg:text-[16px] leading-[24px]
             tracking-[-10%] lg:tracking-[10%] text-[#b7b7b7]
            uppercase'>description
            </h2>
            <p className='font-[400] text-[14px] lg:text-[16px] leading-[24px] tracking-[-2%] h-[351px] lg:h-[224px] w-[310px] lg:w-[481px]'>
                {description}
            </p>
    </div>
  )
}

export default Description