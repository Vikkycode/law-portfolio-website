'use client'
import React,{useState} from 'react'
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

const storeCard = (props:any) => {
  const [isModal,setIsModal] = useState(false)

  const {params} = props;
  const {id,link,headline,price,rate,date} = props;
  
  const filteredStoreItems = StoreOverlayItems.filter(store => store.id === id)
  
  console.log(filteredStoreItems)
  // const router = useRouter()

  const handleOpenModal = ()=>{  
    setIsModal(true)
  }

  return (
    <div>
    <div className='flex flex-col items-center'>
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
   onClick={handleOpenModal}
   className='font-[500] text-[16px] lg:text-[20px] lg:w-[350px]  leading-[22.4px] lg:leading-[28px]  tracking-[-5%] capitalize py-5 h-[56px]'>{headline}</h1>
   {
    isModal && (
      <div className='fixed top-0  right-0 h-full w-full scroll z-20'>
      {
        filteredStoreItems?.map((store,index)=>(
          <StoreOverlay
          key={index} 
          id={store.id}
          // headline={"Intellectual Property Law In Nigeria"}
          // description={"Lorem ipsum dolor sit amet consectetur. Interdum amet sit a molestie commodo phasellus a amet. Adipiscing tortor elementum ipsum sit accumsan diam amet mollis ac. Turpis dictumst senectus eget vitae in ornare. Non vitae aliquet nunc egestas in elit massa aliquet. Condimentum cursus id hendrerit sed arcu turpis praesent volutpat facilisis. Consequat feugiat neque in magna ultrices at ullamcorper. Nulla mattis augue egestas amet quis nibh. Egestas eros nec ornare sollicitudin. Nibh lectus nibh dictumst pellentesque lectus venenatis velit etiam. "}
          // price={"#60,000"}
          headline={store.headline}
          description={store.description}
          price={store.price}
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
    <div className='flex items-center justify-between'>
   <p className='font-[400] text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{date}</p>
   <p className='font-[400] text-gray-500 text-[12px] lg:text-[16px] leading-[32px] text-left tracking-[-2%]'>{rate} Download</p>
    </div>
</div>
  )
}

export default storeCard