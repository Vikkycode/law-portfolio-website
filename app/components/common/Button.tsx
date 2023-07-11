'use client'

import React from 'react'
import style from '../../styles/global.module.css'


const Button = (props:any) => {
  return (
    <div>
        <button className={style.Text}>{props.title}</button>
    </div>
  )
}

export default Button