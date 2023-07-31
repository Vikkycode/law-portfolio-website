import React from 'react'
import { BlogHeroItem } from '../../utils'
import Hero from '../../components/common/Hero'
import BlogCardList from './BlogCardList'
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
        <BlogCardList />
        <MoreAreaCard />
    </section>
  )
}

export default page