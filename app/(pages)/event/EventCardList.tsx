import React from 'react'
import { eventCardItems } from '../../utils'
import EventCard from '../event/EventCard'


const EventCardList = ()=>{
    return (
        <div className='min-h-[100vh] max-w-[1300px] mx-auto py-10 px-4 lg:px-0'>
    <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 pb-20'>   
      {
        eventCardItems.map((event,index)=>(          
          <EventCard 
          key={index}
          id={event.id}
          headline={event.headline}
          button={event.button}
          date={event.date}
          read={event.read}
          time={event.time}
          link={event.link}          
          />    
        ))
      }    
    </div>
    </div>
    )
}

export default EventCardList