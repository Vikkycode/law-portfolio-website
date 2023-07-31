import React from 'react'
import BlogCard from './BlogCard'
import { blogCardItems } from '../../utils'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogCardList = () => {

  return (
    <div className='min-h-[100vh] max-w-[1300px] mx-auto py-10 px-4 lg:px-0 '
    >
    <div className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 pb-20'>   
      {
        blogCardItems.map((blog,index)=>(          
          <BlogCard 
          key={index}
          id={blog.id}
          headline={blog.headline}
          button={blog.button}
          date={blog.date}
          read={blog.read}
          time={blog.time}
          link={blog.link}
          content={blog.content}
          />    
        ))
      }    
    </div>
    </div>
  )
}

export default BlogCardList