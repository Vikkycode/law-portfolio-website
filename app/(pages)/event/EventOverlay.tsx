'use client'
import React,{useContext,useState} from 'react'
import Image from 'next/image'
import image from '../../../public/images/Rectangle.png'
import logo from '../../../public/images/Vector.svg'
import FormInput from '@/app/components/common/FormInput'
import FormTextArea from '@/app/components/common/FormTextArea'
import Button from '@/app/components/common/Button'
import style from '../../styles/global.module.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import BuyTicketOverlay from '@/app/components/common/BuyTicketOverlay'
import { ModalContext } from '@/app/context/ModalContext'
import AOS from 'aos'
import 'aos/dist/aos.css'


const EventOverlay = (props:any) => {
    const {subheadline,location,description,detail} = props;
    const {isModalOpen,toggleModal} = useContext(ModalContext)
    
    const [form,setForm] = useState({
        fullname:'',
        email:'',
        Company:'',
        role:'',
        expection:''
      })

      const handleFormChange=(event:any)=>{
        const {name,value} = event.target;
    
        const updatedForm = {
            ...form,
            [name]:value
        }
        console.log('Form changed', updatedForm)
        setForm(updatedForm)
    }

    return (
    <div className='max-w-[1300px] mx-auto py-20 min-h-[100vh]'
    >
        <div className='flex flex-col lg:flex-row  lg:flex-2 items-start justify-between'
        data-aos="fade-up"
        data-aos-duration="3000">
        <div className='flex items-center justify-center flex-col  lg:px-0'>
        <div className='bg-[#f9f9f9] rounded-t-[24px] w-[390px] lg:w-[538px] px-4 lg:px-0'>
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
        <div className=' bg-[#fff] lg:py-8   lg:px-10'
        data-aos="fade-up"
        data-aos-duration="3000">
            <h2 className='font-[500]
            text-[14px] lg:text-[16px] leading-[24px]
             tracking-[-10%] lg:tracking-[10%] text-[#b7b7b7]
            uppercase'>description
            </h2>
            <p className='font-[400] text-[14px] lg:text-[16px] leading-[24px] tracking-[-2%] h-[351px] lg:h-[224px] w-[310px] lg:w-[481px]'>
                {description}
            </p>
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
        </div>
        <div className='flex justify-end items-center bg-[#f9f9f9] h-[14vh]   rounded-b-[14px] w-full px-4 lg:px-10'
        data-aos="fade-up"
        data-aos-duration="3000">
        <div className={`${style.Button}`}>
            <Button title="See Speakers"/>
            <BsFillArrowRightCircleFill />
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-y-10 px-4 lg:px-0'
        data-aos="fade-up"
        data-aos-duration="3000">
        <h1 className='font-[400] text-[28px] lg:text-[40px] leading-[33.6px] lg:leading-[48px] leading-[33.6px] tracking-[-5%] w-[353px]  lg:w-[640px]'>We are glad that you will be in the event, reserve your space.</h1>
        <FormInput 
            name="fullname"
            placeholder="Your name here"
            value={form.fullname}
            onChange={handleFormChange}
            />
        <FormInput 
            name="email"
            placeholder="Your email here"
            value={form.email}
            onChange={handleFormChange}
            />
        <FormInput 
            name="Company"
            placeholder="Company"
            value={form.Company}
            onChange={handleFormChange}
            />
        <FormInput 
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleFormChange}
            />
        <FormTextArea 
            name="expection"
            placeholder="Your Expections"
            value={form.expection}
            onChange={handleFormChange}
            />
        <div className='flex items-center justify-end gap-10 py-10'
        data-aos="fade-up"
        data-aos-duration="3000">
        <div className={`${style.Button}`}>
            <button
            onClick={toggleModal}>
            <Button    
             title="Buy Ticket"
            //  link="buy-ticket" 
            />
            </button>
            {isModalOpen && (
                <div className='fixed top-0 overflow-hidden right-0 h-full w-full scroll z-20'>
                    <BuyTicketOverlay 
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    />
                </div>
            )}
            <BsFillArrowRightCircleFill />
            </div>
            <div className={`${style.Button}`}>
            <Button title="Reserve Space"/>
            <BsFillArrowRightCircleFill />
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EventOverlay