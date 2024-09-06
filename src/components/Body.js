import React, { useContext, useEffect } from 'react'
import { AppContext } from '../ Context/AppContext'
import Posts from './Posts';
import ShimmerUI from './ShimmerUI';

const Body = () => {
    const {fetchData,data,loading} = useContext(AppContext);

    useEffect(()=>{
        fetchData();
    },[])

    if (loading){
        return <ShimmerUI/>
    }

    return (
        <div className='w-10/12 max-w-[700px] mx-auto flex flex-col gap-10 py-[7rem]'>
            {
                data && 
                
                data.posts.map((post)=>(
                    <Posts key = {post.id} post = {post} />
                ))
                
            }
        </div>
    )
}

export default Body