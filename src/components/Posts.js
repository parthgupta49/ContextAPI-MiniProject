import React from 'react'

const Posts = ({post}) => {
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-xl'>{post.title}</h2>
            <p className='text-sm mt-2'>By <span className='italic '>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span></p>
            <p className='text-sm'>Posted On {post.date}</p>
            <p className='mt-5 w-[90%]'>{post.content}</p>
            <p className='text-blue-700 flex gap-2 text-xs underline font-bold mt-2'>{post.tags.map((tag)=>(
                <span key={tag}>#{tag}</span>
            ))}</p>
        </div>
    )
}

export default Posts