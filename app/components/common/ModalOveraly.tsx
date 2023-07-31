'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import image from '../../../public/images/Rectangle.png'
import logo from '../../../public/images/Vector.svg'
import FormInput from '@/app/components/common/FormInput'
import FormTextArea from '@/app/components/common/FormTextArea'
import Button from '@/app/components/common/Button'
import style from '../../styles/global.module.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Description from './Description'
import Detail from './Detail'


const ModalOverlay = (props:any) => {
    const [isCloseBtn,setIsCloseBtn] = useState(true)
    const {subheadline,location,description,detail} = props;

    const handleCloseBtn =()=>{
        setIsCloseBtn(!isCloseBtn)
    }

    return (
    <div className='max-w-[1300px] mx-auto py-20 min-h-[100vh]'>
        <div className='flex flex-col lg:flex-row  lg:flex-2 items-start justify-between'>
        <div className='flex items-center justify-center flex-col  lg:px-0'>
        <div className='bg-[#f9f9f9] rounded-t-[24px] w-[390px] lg:w-[538px] px-4 lg:px-0'>
        <div className='flex flex-col'>
        <div className=''>
            <Image 
            src={image}
            alt='law'
            height={228}
            width={538}
            className='lg:h-[228px] lg:w-[538px] h-[168px] w-[353px]'
            />
        </div>
        <div className='flex items-center lg:justify-around just h-[76px] my-10 w-[500px] lg:pl-10'>
        <h1 className='font-[400] text-[24px]
        lg:text-[32px] w-[248px] lg:w-full leading-[28.8px] lg:leading-[38.4px] tracking-[-5%]'>{subheadline}</h1>
        <Image 
            src={logo}
            alt='logo'
            height={51}
            width={69}
            className='lg:h-[51px] lg:w-[69px]h-[50px] w-[37px]'
            />
        </div>
        </div>
        {/* <div className=' bg-[#fff] lg:py-8 lg:px-10'>
            <Description />
            <Detail />
        </div> */}
        </div>
        </div>
        </div>
    </div>
  )
}

export default ModalOverlay