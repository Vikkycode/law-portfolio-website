'use client'
import React,{useContext} from 'react'
import Rectangle from './Rectangle'
import {PracticeItems2 } from '../../utils/index'
import { ModalContext } from '@/app/context/ModalContext'

const RectangleList = () => {
  const {isModalOpen,toggleModal} = useContext(ModalContext)

  return (
    <div 
    >
        {PracticeItems2.map((item,index) => (
            <Rectangle 
            key={index}
            title={item.title}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            />
        ))}
    </div>
  )
}

export default RectangleList