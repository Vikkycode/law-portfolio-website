import React from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Image from 'next/image'
import image from '../../public/images/Rectangle 2.png'
import image2 from '../../public/images/Rectangle.png'
import Button from '../components/common/Button'
import style from '../styles/global.module.css'

const page = () => {
  return (
    <section className=''>
        <div className='pt-20 h-[700px]   lg:w-full bg-[#f3f3f3]'>
            <div className='max-w-[1300px] mx-auto px-4'>
                <h1 className='font-[400] text-[36px] lg:text-[80px]   leading-[48px] lg:leading-[80px]  
                tracking-[-5%] w-[352px] lg:w-[1061px]'>Constitutional Lawyer,<br />Human Rights Activist,<br /></h1>
                <span className='font-[400]  text-[36px] lg:text-[80px] -mt-20 leading-[48px] lg:leading-[80px]
                tracking-[-5%]'>and Senior Advocate of Nigeria</span>
                <div className='-mt-24'>
                <h2 className='font-[500] text[20px] lg:text-[24px] leading-[28px] lg:leading-[33.6px] tracking-[-5%]  pt-32 '>Chief Mike Agbedor Abu Ozekhome,</h2>
                <p className='h-[51px] lg:h-[84px] w-[353px] lg:w-[550px] text-[#818181] text-left text-[12px] lg:text-[24px] leading-[16.8px] lg:leading-[28px] tracking-[-5%]'>[SAN, OFR, KSM, D.A, HonDL, JD, D.Phil, HonMA(HC), LL.M, LL.B (HONS), BL, KSM, F.AES, FNIM, MNIPR, F.ITMN, F.ICA, F.chMC, FNIER, LFIBA, PEFON FIARSA, F.hcd, FCLED, FIMC]</p>
                </div>
                <div className='flex items-center py-20'>
                <div className='border w-[167px] lg:w-[1100px] mx-auto  border-black'>
                </div>
                <div className='flex items-center h-[40px] lg:h-[52px] ml-5 w-[178px] lg:w-[213px] rounded-[74px] 
                border border-black bg-transparent gap-8 px-6 py-4 text-black'>
                <Link
                href=''
                className='font-[500]
                 text-[12px] lg:text-[14px]   leading-[14.52px] lg:leading-[14.94px]
                tracking-[-2%] h-[17px] w-[230px]'>Explore his Portfolio</Link>
                <BsFillArrowRightCircleFill 
                size={30}/>
            </div>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-start flex-wrap px-4 lg:px-0 py-8 lg:py-28 max-w-[1300px] mx-auto'>
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
            <p className='font-[400] text-[20px] pl-0 lg:pl-5 mt-5 lg:leading-[32px] text-justify tracking-[-2%]'>With over 40 years of legal experience, Chief Mike Agbedor Abu Ozekhome is a renowned Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria (SAN). Chief Mike Agbedor Abu Ozekhome is a renowned Constitutional Lawyer, Human Rights Activist, and Senior Advocate of Nigeria (SAN). With over 40 years of legal experience, Chief Ozekhome has made a name for himself as a leading voice in the legal profession and a champion of justice and human rights. But Chief Ozekhome is more than just a lawyer. He is also a Pro-Democracy Campaigner; Member of the Order of the Federal Republic (OFR), Senior Advocate of the Masses (SAM), Voice of the People (VOP), Senior Advocate of Nigerian Students (SANS), Notary Public of Nigeria, Patriot, Pan-Nigerian, Author, Motivational Speaker, Public Affairs Analyst and Knight of the Order of St.Mulumba (KSM). As a lawyer, Chief Ozekhome has dedicated his career to defending the rights of the people and fighting for justice. He has represented numerous clients in high-profile cases, and has won landmark rulings in several cases. His expertise in constitutional law and human rights has earned him national and international recognition, and he has received several awards and honors for his contributions to the legal profession and society at large. But beyond his legal career, Chief Ozekhome is also a prolific author, public speaker, and social commentator. His works span a wide range of topics, from legal and political issues social and cultural matters. He is a sought-after speaker at conferences and events, and has inspired countless individuals with his motivational speeches and writings.</p>
          </div>
        </div>
        <div className='bg-[#f9f9f9] h-[120vh] lg:h-[464px]'>
          <div className='max-w-[1300px] mx-auto flex justify-between items-starts flex-wrap h-0 lg:min-h-[74vh] pt-[33rem] px-4 lg:pt-16'>
          <Image 
          src={image2}
          height={324}
          width={640}
          alt='law picture'
          className='object-cover  rounded-[24px]'
          />
          <div className='w-[520px] pt-8 lg:pt-16 h-[24px]'>
            <p className='font-[400] text-[16px] lg:text-[20px] lg:leading-[28px] tracking-[-2%]'>Interested in learning more about Chief Mike Agbedor Abu Ozekhome's legal expertise? Or to see how he can help you with your legal needs</p>
            <div className='flex items-center  h-[52px] mt-4 lg:mt-7 w-[213px] rounded-[74px] 
            border border-black bg-transparent gap-8 px-6  lg:py-4 text-black'>
            <Link
            href=''
            className='font-[500]
            text-[14px] leading-[16.94px]
            tracking-[-2%] h-[17px] w-[213px]'>Contact Us Here</Link>
            <BsFillArrowRightCircleFill 
            size={30}/>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default page