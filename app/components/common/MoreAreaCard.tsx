import React from 'react'
import Image from 'next/image'
import img from '../../../public/images/Rectangle.png'
import Button from './Button'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import style from '../../styles/global.module.css'
import { moreAreaCard } from '@/app/utils'

const MoreAreaCard = () => {
  return (
    <section className='min-h-[626px] bg-[#f3f3f3] py-[5rem]  lg:px-0'>
        <div className='max-w-[1300px]  mx-auto'>
        <h1 className='mb-[3rem] uppercase Text2 px-4'>more area</h1>
      <div className='border-[1px] border-black   mx-4 lg:mx-0 -mt-6'>
      </div>

      {moreAreaCard.map((data,index)=>(
      <div key={index} className='h-[159px] lg:h-[141px] bg-[#fff] w-full lg:w-0 rounded-[8px] lg:rounded-[80px] my-4 py-6 lg:my-8 lg:py-6 px-12'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='flex'>
            <Image 
            src={data.image}
            height={98}
            width={88}
            alt='small image card'
            className='object-cover rounded-[20px] h-[60px] lg:h-[98px] w-[56px] -ml-8 lg:w-[88px] mr-4 lg:mr-8'
            />
        <div className='flex justify-center  flex-col w-[280px] h-[71px] lg:h-0 lg:w-full'>
        <h1 className='font-[500] text-[12px] lg:text-[20px] leading-[16px] lg:leading-[32px] tracking-[-2%]'>
        {data.headline}
        </h1>
        <div className='border-[1px] border-black hidden lg:block '>
      </div>
        <p className='font-[400] text-[12px] lg:text-[16px] leading-[16px] lg:leading-[32px] tracking-[-2%] '>{data.content}</p>
        </div>
        </div>
        <div className={`${style.Button} mt-4 -ml-32 lg:-ml-0`}>
            <Button title={data.btn}/>
            <BsFillArrowRightCircleFill />
        </div>   
        </div>
      </div>
      ))}
        </div>
    </section>
  )
}

export default MoreAreaCard