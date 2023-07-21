'use client'
import React from 'react'
import BlogPostList from '../blogPostList'
import MoreAreaCard from '@/app/components/common/MoreAreaCard'
const page = async ({params}:{params:{Id:string}})=>{
    
    return (
    <>
    <BlogPostList id={params.Id}/>
    <MoreAreaCard />
    </>
  )
}

export default page
