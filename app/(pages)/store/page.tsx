'use client'
import React,{useEffect} from 'react'
import { storeHeroItem, storeItems } from '../../utils'
import Hero from '../../components/common/Hero'
import StoreCardList from '../store/storeCardList'
import MoreAreaCard from '../../components/common/MoreAreaCard'
import AOS from 'aos'
import 'aos/dist/aos.css'


const page = () => {

  useEffect(()=>{
    AOS.init(); 
   },[])

  
  return (
    <section>
        <div>
        {
          storeHeroItem.map((store,index) => (
            <Hero 
            key={index}
            headline={store.headline}
            author={store.author}
            role={store.role}
            btn={store.btn}            
            />
          ))
        }
        </div>
        <StoreCardList />
        <MoreAreaCard />
    </section>
  )
}

export default page