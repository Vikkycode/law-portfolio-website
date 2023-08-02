'use client'
import React,{useEffect} from 'react'
import { ContactHeroItem } from '../../utils'
import Hero from '../../components/common/Hero'
import Row from './Row'
import AOS from 'aos'
import 'aos/dist/aos.css'


const page = () => {

  useEffect(()=>{
    AOS.init(); 
   },[])

  
  return (
    <div> 
        <div>
        {
          ContactHeroItem.map((contact,index) => (
            <Hero 
            key={index}
            headline={contact.headline}
            author={contact.author}
            role={contact.role}
            btn={contact.btn}            
            />
          ))
        }
        </div>
        <Row />
    </div>
  )
}

export default page