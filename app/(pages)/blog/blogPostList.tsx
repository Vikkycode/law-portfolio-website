import React from 'react'
import PostCard from '../../components/common/PostCard'
import { postCardItems } from '../../utils'

const blogPostList = (props:any) => {
  const {id} = props;
  const filteredPostItems = postCardItems.filter((blog => blog.id === id))
  
  
  return (
    <div className='my-10'>
        <div>
        {
          filteredPostItems.map((blog,index) => (
            <PostCard 
            key={index}
            id={blog.id}
            subheadline={blog.headline}
            author={blog.author}
            role={blog.role}
            btn={blog.btn}           
            button={blog.button}
            time={blog.time}
            read={blog.read}
            date={blog.date}
            paragraph={blog.paragraph}
            content={blog.content} 
            />
          ))
        }
        </div>       
    </div>
  )
}

export default blogPostList