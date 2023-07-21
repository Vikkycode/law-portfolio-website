import React from 'react'
import { eventHeroItem } from '../../utils'
import Hero from '../../components/common/Hero'
import CardList from '../blog/CardList'
import MoreAreaCard from '../../components/common/MoreAreaCard'

const page = () => {
  return (
    <section>
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
        <CardList />
        <MoreAreaCard />
    </section>
  )
}

export default page