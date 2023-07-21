import React from 'react'
import { BlogHeroItem } from '../../utils'
import Hero from '../../components/common/Hero'
import CardList from './CardList'
import MoreAreaCard from '../../components/common/MoreAreaCard'


const page = () => {
  return (
    <section>
        <div>
        {
          BlogHeroItem.map((item,index) => (
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