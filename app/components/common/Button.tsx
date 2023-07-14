'use client'

import React from 'react'
import style from '../../styles/global.module.css'
import Link from 'next/link'


const Button = (props:any) => {
  return (
    <div>
        <Link 
        href=''
        className={style.Text}>{props.title}</Link>
    </div>
  )
}

export default Button