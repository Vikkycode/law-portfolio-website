'use client'

import React from 'react'
import style from '../../styles/global.module.css'
import Link from 'next/link'
import { pagelinks } from '@/app/utils'


const Button = (props:any) => {
  
  return (
    <>
        <h1
        // href={`${props.link}`}
        className={style.Text}>{props.title}</h1>
    </>
  )
}

export default Button