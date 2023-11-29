'use client'
import React, { useState,useContext } from 'react'
import style from '../../styles/global.module.css'
import Button from '../common/Button'
import {BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from 'react-icons/bs'
import RectangleList from './RectangleList'
import { ModalContext } from '@/app/context/ModalContext'
import Rectangle from './Rectangle'
const PracticeArea = () => {
  const {isModalOpen,toggleModal} = useContext(ModalContext)


  return (
    <div className='min-h-screen bg-[#f3f3f3] py-[5rem] px-6 lg:px-8'
    data-aos="fade-up"
    data-aos-duration="3000">
      <div className='max-w-[1300px] mx-auto'>
      <h1 className='mb-[3rem] uppercase Text2'>practice areas</h1>
      <div className='border-[1px] border-black -mt-6'>
      </div>
      <div >
      <div>
      <div className={`${isModalOpen ? 'max-w-[1300px] mx-auto h-[228px] lg:h-[261px] mb-[2rem] flex-col bg-[#f9f9f9]' : ''}  ${style.flexTop} 
    text-black rounded-[32px] lg:rounded-[80px] mt-[1rem]`}>
      <div className={`max-w-[1300px] w-[345px] lg:w-full h-[64px] lg:h-[99px] py-[16px]  ${style.flexBetween} bg-white text-black rounded-[80px] px-8`}>
        <h1 className='font-[500] text-[12px] lg:text-[20px] h-[32px] w-[176px] lg:h-0 lg:w-full leading-[16px] lg:leading-[32px] tracking uppercase'>BANKING, CORPORATE FINANCE AND INSURANCE</h1>
        <div className={style.Button}
        onClick={toggleModal}>
            <Button title="View"/>
            { isModalOpen ? 
            <BsFillArrowUpCircleFill /> :
            <BsFillArrowDownCircleFill />
            }
        </div>
      </div>
      {isModalOpen && (<div>
      <div className={`w-[287px] lg:w-[715px] text-justify h[100px] lg:h-[77px] ${style.flexEnd} text-black mt-[2rem]  lg:mt-[2.5rem] mr-[2rem]`}>
        <p className='text-[12px] lg:text-[14px] leading-[20px] lg:leading-[25.5px] pb-[2rem]'>Banking law advisories | Loan documentation | Perfection of securities | Asset-based finance | Off-balance sheet and lease transactions | 
        Advisories on project financing | Debt instruments | Resceduling | Advice on insurance law and practice.</p>
      </div>
      </div>)}
        </div>  
        </div>
      </div>      
      <RectangleList />
      </div>
    </div>
  )
}

export default PracticeArea