'use client'
import React,{useState} from 'react'
import FormInput from '@/app/components/common/FormInput';
import Button from '@/app/components/common/Button';
import Image from 'next/image';
import image from '../../../public/images/Rectangle.png'
import logo from '../../../public/images/Vector.svg'
import style from '../../styles/global.module.css'
import { BsFillArrowRightCircleFill,BsFillRecordCircleFill } from 'react-icons/bs';
import { AiOutlineClose} from 'react-icons/ai'
import Detail from './Detail';
import MorePayment from './MorePayment';


const BuyTicketOverlay = (props:any) => {
    const {id,description,headline,price,rate,isModalOpen,toggleModal} = props;
    

    const [form,setForm] = useState({
      cardHolderName:'',
        email:'',
        digitPin:''
      }) 
    
      const handleFormChange=(event:any)=>{
        const {name,value} = event.target;
    
        const updatedForm = {
            ...form,
            [name]:value
        }
        console.log(updatedForm)
        setForm(updatedForm)
    }

  return (
    <div className=''>
        <div className=''
        data-aos="zoom-in"
        data-aos-duration="3000">
        {isModalOpen  && (
            <div className='fixed overflow-auto z-10 top-0 w-full h-full right-0  text-black py-10 bg-white  min-h-[100vh]'
            data-aos="zoom-in"
            data-aos-duration="3000">
            <div className='  max-w-[1300px] mx-auto'
            >
                <AiOutlineClose 
                size={30}
                className='fixed z-20 top-0 lg:top-10 right-0 lg:right-10 '
                onClick={toggleModal}
                />
        <div className='flex flex-col lg:flex-row  lg:flex-2 items-start justify-between'>
        <div className='flex items-center justify-center flex-col  lg:px-0'>
        <div className='bg-[#f9f9f9] rounded-t-[24px] w-[390px] lg:w-[538px] px-6 lg:px-0'>
        <div className='flex flex-col'>
        <div className=''
        data-aos="fade-up"
        data-aos-duration="3000">
            <Image 
            src={image}
            alt='law'
            height={228}
            width={538}
            className='lg:h-[228px] lg:w-[538px] h-[168px] w-[353px]'
            />
        </div>
        <div className='flex items-center lg:justify-around  h-[76px] my-10  lg:pl-10'
        data-aos="fade-up"
        data-aos-duration="3000">
            <div className='flex flex-col'>
        <h1 className='font-[400] text-[24px]
        lg:text-[32px] w-[248px] lg:w-full leading-[28.8px] lg:leading-[38.4px] tracking-[-5%]'>{headline}</h1>
            <p className='font-[700] text-[16px] leading-[32px]  lg:w-[68px] hidden lg:block pt-4 tracking-[-2%]'>{price}</p>
            </div>
        <Image 
            src={logo}
            alt='logo'
            height={51}
            width={69}
            className='lg:h-[69px] lg:w-[51px] h-[50px] w-[37px]'
            />
        </div>
        </div>
        <div className=' bg-[#fff] lg:py-8   lg:px-10'
        data-aos="fade-up"
        data-aos-duration="3000">
            <Detail 
            location="Eko Hotel & Suit, No. 45, Banana Island, Lagos, Nigeria"
            detail="22nd Dec. 2023 -9AM 10AM"
            />
        </div>
        </div>
        <div className='flex justify-end items-center bg-[#f9f9f9] h-[10vh]   rounded-b-[14px] w-full px-6 lg:px-10'
        data-aos="fade-up"
        data-aos-duration="3000">
        </div>
        </div>
        <div className='flex flex-col gap-y-10  lg:px-0'>
            <form action="">
                
            </form>
        <h1 className='font-[400] text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[48px] leading-[33.6px] tracking-[-5%] w-[353px] px-6 lg:w-[640px]'>Pay for you ticket with the our safe and secure payment automation.</h1>
        <div className='px-6'>

        <FormInput 
            name="cardHolderName"
            placeholder="Card Holder Name"
            value={form.cardHolderName}
            onChange={handleFormChange}
            
            />
        <FormInput 
            name="email"
            placeholder="Your Email Address here"
            value={form.email}
            onChange={handleFormChange}
            />
        <FormInput 
            name="digitPin"
            placeholder="16-Digit Pin"
            value={form.digitPin}
            onChange={handleFormChange}
            />
        <div className='flex items-center justify-end gap-10 py-10'
        data-aos="fade-up"
        data-aos-duration="3000">
        <div className={`${style.Button}`}>
            <Button title="Buy Ticket"/>
            <BsFillArrowRightCircleFill />
            </div>
        </div>
        </div>
            <MorePayment />
        </div>
        </div>
            </div>
            </div>
        )}
        </div>
    </div>
  )
}

export default BuyTicketOverlay