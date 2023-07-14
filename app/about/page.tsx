import React from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Image from 'next/image'
import image from '../../public/images/Rectangle 2.png'
import image2 from '../../public/images/Rectangle.png'
import Button from '../components/common/Button'
import style from '../styles/global.module.css'
import {AboutHeroItem } from '../utils'
import Hero from '../components/common/Hero'



const page = () => {
  return (
    <section className=''>
        {
          AboutHeroItem.map((item,index) => (
            <Hero 
            key={index}
            headline={item.headline}
            author={item.author}
            role={item.role}
            btn={item.btn}            
            />
          ))
        }
        <div className='flex justify-between items-start flex-col lg:flex-row px-4 lg:px-0 py-8 lg:py-28 max-w-[1300px] mx-auto'>
          <div>
          <Image 
          src={image}
          height={420}
          width={612}
          alt='law picture'
          className='object-cover h-[510px] w-[353px] lg:h-[700px] lg:w-[612px] rounded-[24px]'
          />
          </div>
          <div className='h-[1056px] w-[353px] lg:w-[860px] lg:h-[610px]'>
            <p className='font-[400] text-[20px] pl-0 lg:pl-5 mt-5 lg:mt-0 lg:leading-[32px] text-justify tracking-[-2%]'>With over 40 years of legal experience, Chief Mike Agbedor Abu Ozekhome is a renowned Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria (SAN). Chief Mike Agbedor Abu Ozekhome is a renowned Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria (SAN). With over 40 years of legal experience, Chief Ozekhome has made a name for himself as a leading voice in the legal profession and a champion of justice and human rights. But Chief Ozekhome is more than just a lawyer. He is also a Pro-Democracy Campaigner; Member of the Order of the Federal Republic (OFR), Senior Advocate of the Masses (SAM), Voice of the People (VOP), Senior Advocate of Nigerian Students (SANS), Notary Public of Nigeria, Patriot, Pan-Nigerian, Author, Motivational Speaker, Public Affairs Analyst and Knight of the Order of St.Mulumba (KSM). As a lawyer, Chief Ozekhome has dedicated his career to defending the rights of the people and fighting for justice. He has represented numerous clients in high-profile cases, and has won landmark rulings in several cases. His expertise in constitutional law and human rights has earned him national and international recognition, and he has received several awards and honors for his contributions to the legal profession and society at large. But beyond his legal career, Chief Ozekhome is also a prolific author, public speaker, and social commentator. His works span a wide range of topics, from legal and political issues social and cultural matters. He is a sought-after speaker at conferences and events, and has inspired countless individuals with his motivational speeches and writings.</p>
          </div>
        </div>
        <div className='bg-[#f9f9f9] h-[120vh] lg:h-[464px]'>
          <div className='max-w-[1300px] mx-auto flex justify-between items-starts flex-col lg:flex-row  min-h-[80vh]  pt-[33rem] px-4 lg:pt-16'>
          <Image 
          src={image2}
          height={324}
          width={640}
          alt='law picture'
          className='object-cover  rounded-[24px] lg:h-[324px] lg:w-[640px]'
          />
          <div className='w-[520px] pt-8 lg:pt-20 h-[24px]'>
            <p className='font-[400] text-[16px] lg:text-[20px] lg:leading-[28px] tracking-[-2%]'>Interested in learning more about Chief Mike Agbedor Abu Ozekhome's legal expertise? Or to see how he can help you with your legal needs</p>
            <div className={`${style.Button} w-[200px] mt-5`}>
            <Button title="Contact Us Here"/>
            <BsFillArrowRightCircleFill />
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default page