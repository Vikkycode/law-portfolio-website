'use client'
import React from 'react'
// import BlogPostList from '../blogPostList'
import EventOverlay from '../EventOverlay'

import Hero from '../../../components/common/Hero'
import { eventHeroItem,eventReserveSpaceItems } from '@/app/utils'


const page = async ({params}:{params:{Id:string}})=>{
  
   const filteredEventItems = eventReserveSpaceItems.filter(event => event.id === params.Id)
   
   return (
    <>
    <div className=''>
    <div>
        {
          eventHeroItem.map((event,index) => (
            <Hero 
            key={index}
            headline={event.headline}
            author={event.author}
            role={event.role}
            btn={event.btn}            
            />
          ))
        }
        </div>
        <div>
        {
          filteredEventItems.map((event,index)=>(
            <EventOverlay
            key={index} 
            subheadline={event.subheadline}
            location={event.location}
            description={event.description}
            detail={event.detail}
            />        

          ))
        }  
        </div>
        
    </div>
    </>
  )
}

export default page
