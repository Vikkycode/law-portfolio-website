'use client'
import React,{useContext, useState} from 'react'
import Image from 'next/image'
import Button from '../../components/common/Button'
import StoreOverlay from './StoreOverlay'
import Modal from '@/app/components/common/Modal'
import style from '../styles/global.module.css'
import logo from '../../../public/images/Vector.svg'
import { StoreOverlayItems } from '@/app/utils'
import ModalOverlay from '@/app/components/common/ModalOveraly'
import Description from '@/app/components/common/Description'
import Detail from '@/app/components/common/Detail'
import Link from 'next/link'
import { ModalContext } from '@/app/context/ModalContext'

const storeCard = (props:any) => {
  const {isModalOpen,toggleModal}= useContext(ModalContext)
  
  
  const {params} = props;
  const {id,link,headline,price,rate,date} = props;
  
  const filteredStoreItems = StoreOverlayItems.filter(store => store.id === id)
  

  return (
    <div>
    <div className='flex flex-col items-center'
    data-aos="fade-up"
    data-aos-duration="3000">
    <div className='relative h-[68px] w-[50px] top-[4.3rem] lg:top-[4.3rem] left-[7rem] lg:left-[8rem]'>
            <Image 
            src={logo}
            height={80}
            width={59}
            alt='logo'
            />
            </div>
   <div className='h-[261px] lg:h-[316px] w-[353px] lg:w-[420px] rounded-[28px] bg-[#DEDEDE]'>

   </div>
   <div className='flex items-center justify-around'>
   <h1 
  //  href={`${link}${id}`}
   onClick={toggleModal}
   className='font-[500] text-[16px] lg:text-[20px] lg:w-[350px]  leading-[22.4px] lg:leading-[28px]  tracking-[-5%] capitalize py-5 h-[56px]'>{headline}</h1>
   {
    isModalOpen && (
      <div className='fixed top-0  right-0 h-full w-full scroll z-20'>
      {
        filteredStoreItems?.map((store,index)=>(
          <StoreOverlay
          key={index} 
          id={store.id}
          headline={store.headline}
          description={store.description}
          price={store.price}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          /> 
        ))
      }
      </div>
    )
   }
   <p className='font-[700] text-[16px] leading-[32px]  lg:w-[68px] hidden lg:block pt-4 tracking-[-2%]'>{price}</p>
   </div>
   <div className='border border-black   my-10 h-[1px] w-[353px] lg:w-[420px] mx-4'></div>
    </div>
    <div className='flex items-center justify-between'
    data-aos="fade-up"
    data-aos-duration="3000">
   <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{date}</p>
   <p className='font-[400] text-gray-500 text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{rate} Download</p>
    </div>
</div>
  )
}

export default storeCard