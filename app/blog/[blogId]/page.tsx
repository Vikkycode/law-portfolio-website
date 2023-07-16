'use client'
import React from 'react'

import { CardItems } from '@/app/utils'


export const page = ({params}:{params:{id:string}}) => {
    const {id} = params

    return (
    <div>page {id}</div>
  )
}


export async function getStaticPaths(){
    const paths = CardItems.map(blog => ({
        params:{id:blog.id},
    }))

    return { paths, fallback:false}
}


