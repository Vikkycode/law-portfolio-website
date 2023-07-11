import React from 'react'
import bg from '../../../public/images/Rectangle 11.svg'
import mobileBg from '../../../public/images/mobileRectangle.png'
import Image from 'next/image'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import logo from '../../../public/images/Vector.svg'

const Portfolio = () => {
  return (
    <section className='lg:h-[369px]  w-full'>
        <div className='absolute lg:flex  justify-center items-center block '>
            <div className='h-[160px] lg:h-[240px] w-[303px] lg:w-[799px] text-white pl-6 lg:pl-28 pt-10 lg:pt-8'>
            <h1 className='font-[400] text-[40px] lg:text-[80px] leading-[40px] lg:leading-[80px] tracking-[-5%]'>Hear what our clients & companies are saying about him</h1>
            </div>
            <div className='flex items-center h-[40px] lg:h-[52px] w-[178px] lg:w-[213px] rounded-[74px] relative top-[6rem] lg:top-[12.5rem] -right-6 lg:right-8
            border bg-transparent gap-8 px-6 py-4 text-white'>
                <Link
                href=''
                className='font-[500]
                text-[12px] lg:text-[14px]   leading-[14.52px] lg:leading-[14.94px]
                tracking-[-2%] h-[17px] w-[131px]'>Explore his Portfolio</Link>
                <BsFillArrowRightCircleFill size={30} />
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