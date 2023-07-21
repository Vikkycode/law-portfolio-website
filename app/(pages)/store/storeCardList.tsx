import React from 'react'
import StoreCard from './storeCard'
import { storeItems } from '../../utils'


const storeCardList = () => {
  return (
    <div className='min-h-[100vh] max-w-[1300px] mx-auto py-10 px-4 lg:px-0 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 pb-20'>
        { storeItems.map((store,index)=>(
            <StoreCard 
            key={index}
            headline={store.headline}
            date={store.date}
            price={store.price}
            rate={store.rate}
            />
        ))}        
        </div>
    </div>
  )
}

export default storeCardList