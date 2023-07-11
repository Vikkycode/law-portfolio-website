import React from 'react'
import Card from './Card'
import { testimonialItems } from '../../utils'
import style from '../../styles/global.module.css'

const CardList = () => {
  return (
    <div className={`${style.flexBetween} flex-col lg:flex-row gap-4 `}>
        {testimonialItems.map((item,index) => (
            <Card 
            key={index}
            image={item.img}
            name={item.name}
            content={item.content}
            />
        ))}
    </div>
  )
}

export default CardList