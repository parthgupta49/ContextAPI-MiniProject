import React from 'react'
import ShimmerUIContent from './ShimmerUIContent'

const ShimmerUI = () => {
    return (
        <div className='w-10/12 max-w-[700px] mx-auto flex flex-col gap-10 py-[7rem]'>
            <ShimmerUIContent/>
            <ShimmerUIContent/>
            <ShimmerUIContent/>
        </div>
    )
}

export default ShimmerUI