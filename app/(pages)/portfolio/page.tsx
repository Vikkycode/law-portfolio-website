'use client'
import React,{useEffect} from 'react'
import Button from '../../components/common/Button'
import style from '../../styles/global.module.css'
import {portfolioHeroItem} from '../../utils'
import Hero from '../../components/common/Hero'
import PortfolioCardList from './portfolioCardList'
import MoreAreaCard from '../../components/common/MoreAreaCard'
import AOS from 'aos'
import 'aos/dist/aos.css'


const page = () => {
  useEffect(()=>{
    AOS.init(); 
   },[])

  return (
    <section>
        <div 
        >
        {
          portfolioHeroItem.map((item,index) => (
            <Hero 
            key={index}
            headline={item.headline}
            author={item.author}
            role={item.role}
            btn={item.btn}            
            />
          ))
        }
        </div>
        <PortfolioCardList />
        <MoreAreaCard />

    </section>
  )
}

export default page