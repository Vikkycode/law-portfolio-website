import React from 'react'
import style from '../styles/global.module.css'
import { FooterMenuLink,socialMediaLinks } from '../../utils/index'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#1c1c1c] min-h-[386px] pt-10 pb-14 pn'>
      <div className={`flex items-center justify-start lg:justify-center lg:flex-col gap-20 mt-20 lg:mt-0`}>
          <div className='pl-4 lg:pl-0'>
          <h1 className='font-[500] text-[16px] leading-[24px] tracking-[10%] pb-5 text-[#b7b7b7] uppercase lg:text-center'>Menu Navigation</h1>
          {<ul className='flex  items-center 
          justify-start lg:justify-center gap-10 flex-col  lg:flex-row'>
               {FooterMenuLink.map((link,index )=>(
                <li key={index} className={`font-[500] text-[16px] leading-[24px] tracking-[-2%] text-[#b7b7b7]  capitalize text-left`}>
                    <Link href=''
                    className='text-left'>{link.title}</Link>
                </li>
               ))}     
            </ul>}
          </div>
            <div className='-mt-16'>
            <h1 className='font-[500] lg:text-center text-[16px] leading-[24px] pb-5 tracking-[10%] text-[#b7b7b7] uppercase'>social media</h1>
          {<ul className='flex  items-center  gap-10 flex-col lg:flex-row'>
               {socialMediaLinks.map((link,index) => (
                <li key={index} className={`font-[500] text-[16px] leading-[24px] tracking-[-2%] text-[#b7b7b7] capitalize `}>
                    <Link href=''>{link.title}</Link>
                </li>
               ))}     
            </ul>}
            </div>
      </div>
    </div>
  )
}

export default Footer