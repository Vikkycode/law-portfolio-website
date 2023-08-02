'use client'
import React,{useEffect} from 'react'
import BlogPostList from '../blogPostList'
import MoreAreaCard from '@/app/components/common/MoreAreaCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const page = async ({params}:{params:{Id:string}})=>{
  useEffect(()=>{
    AOS.init(); 
   },[])

  
    return (
    <>
    <BlogPostList id={params.Id}/>
    <MoreAreaCard />
    </>
  )
}

export default page
