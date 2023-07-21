import React from 'react'
import { ContactHeroItem } from '../../utils'
import Hero from '../../components/common/Hero'
import Row from './Row'
const page = () => {
  return (
    <div> 
        <div>
        {
          ContactHeroItem.map((contact,index) => (
            <Hero 
            key={index}
            headline={contact.headline}
            author={contact.author}
            role={contact.role}
            btn={contact.btn}            
            />
          ))
        }
        </div>
        <Row />
    </div>
  )
}

export default page