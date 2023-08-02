import React from 'react'
import bg from '../../../public/images/Rectangle 11.svg'
import mobileBg from '../../../public/images/mobileRectangle.png'
import Image from 'next/image'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import logo from '../../../public/images/Vector.svg'
import Button from '../common/Button'
import style from '../../styles/global.module.css'


const Portfolio = () => {
  return (
    <section className='lg:h-[369px]  w-full'
    data-aos="fade-up"
    data-aos-duration="3000">
        <div className='absolute lg:flex  justify-center items-center block '>
            <div className='h-[160px] lg:h-[240px] w-[303px] lg:w-[799px] text-white pl-6 lg:pl-28 pt-10 lg:pt-8'>
            <h1 className='font-[400] text-[40px] lg:text-[80px] leading-[40px] lg:leading-[80px] tracking-[-5%]'
            data-aos="fade-right"
            data-aos-duration="3000">Hear what our clients & companies are saying about him</h1>
            </div>
            <div className='relative top-[12.5rem] right-[2rem]'>
            <div className='hidden lg:block'>
            <div className={`${style.ButtonWhite}`}>
            <Button title="Explore His Portfolio"/>
            <BsFillArrowRightCircleFill />
            </div>
            </div>
            </div>
            <div className='relative h-[68px] w-[50px] top-[5rem] lg:top-[10rem] left-[20rem] lg:left-[22rem]'>
            <Image 
            src={logo}
            height={80}
            width={59}
            alt='logo'
            />
            </div>
        </div>

        <div className='hidden lg:block'>
            <Image 
            src={bg}
            height={369}
            width={1640}
            alt='background image'
            />
        </div>
            <div className='block lg:hidden'>
            <Image 
            src={mobileBg}
            height={369}
            width={393}
            alt='mobile background image'
            />
        </div>
        
    </section>
  )
}

export default Portfolio