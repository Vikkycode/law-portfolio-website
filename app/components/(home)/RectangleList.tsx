'use client'
import React from 'react'
import Rectangle from './Rectangle'
import {PracticeItems2 } from '../../utils/index'

const RectangleList = () => {
  return (
    <div>
        {PracticeItems2.map(item => (
            <Rectangle 
            key={item}
            title={item.title}
            />
        ))}
    </div>
  )
}

export default RectangleList