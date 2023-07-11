import React from 'react'
import style from '../../styles/global.module.css'
import CardList from './CardList'
import { BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <div className=' max-w-[1300px] h-[130vh] lg:h-[50vh] mx-auto'>
      <div className='my-10'>
      <CardList />
      <div className={`${style.flexEnd} pt-10 pr-8`}>
        <p className='font-[500] text-[16px] leading-[19.36px] tracking-[-2%] pr-3 capitalize'>See more</p>
        <Link href=''>
        <BsFillArrowRightCircleFill size={20} />       
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Testimonial