import React from 'react'

const ShimmerUIContent = () => {
    return (
        <div className='flex flex-col '>
            {/* title */}
            <div className='w-[90%] h-7 bg-gray-300'></div>
            {/* sub-title1 */}
            <div className='w-[30%] h-5 bg-gray-300 mt-2'></div>
            {/* sub-title2 */}
            <div className='w-[30%] h-5 bg-gray-300 mt-1'></div>

            {/* content */}
            <div className='flex flex-col gap-1 mt-5'>
                <div className='w-[80%] h-[1.4rem] bg-gray-300'></div>
                <div className='w-[80%] h-[1.4rem] bg-gray-300'></div>
                <div className='w-[80%] h-[1.4rem] bg-gray-300'></div>
            </div>
        </div>
    )
}

export default ShimmerUIContent