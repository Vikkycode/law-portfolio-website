import React from 'react'
import PortfolioCard from './PortfolioCard'
import { portfolioCardItems } from '../../utils'
const portfolioCardList = () => {
  return (
    <section className='min-h-[100vh]
    max-w-[1300px] mx-auto py-10 px-4 lg:px-0'>
       <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 '>
        {
         portfolioCardItems.map((item,index)=>(
           <PortfolioCard 
           key={index}
           image={item.image}
           icon={item.icon}
           headline={item.headline}
           date={item.date} />    
         ))
        }
        
       </div>
    </section>
  )
}

export default portfolioCardList