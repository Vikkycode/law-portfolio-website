import React from 'react'
import { eventHeroItem } from '../utils'
import Hero from '../components/common/Hero'
import CardList from '../blog/CardList'
import MoreAreaCard from '../components/common/MoreAreaCard'

const page = () => {
  return (
    <section>
        <div>
        {
          eventHeroItem.map((item,index) => (
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
        <CardList />
        <MoreAreaCard />
    </section>
  )
}

export default page