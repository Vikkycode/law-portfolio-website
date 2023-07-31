import React from 'react'
import StoreOverlay from '../StoreOverlay'
import { StoreOverlayItems } from '@/app/utils'
import ModalOverlay from '@/app/components/common/ModalOveraly'

const page = (props:any) => {
    const {params} = props;
    const filteredStoreItems = StoreOverlayItems.filter(store => store.id === params.Id)
    return (
    <div>
        {/* {
            filteredStoreItems.map((store,index)=>(
                <StoreOverlay 
                key={index}
                id={store.id}
                description={store.description}
                headline={store.headline}
                price={store.price}
                rate={store.rate}/>        
            ))
        } */}
        <ModalOverlay />
    </div>
  )
}

export default page