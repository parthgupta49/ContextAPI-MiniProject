import React, { useContext } from 'react'
import { AppContext } from '../ Context/AppContext'
const Footer = () => {



    const {currentPage,totalPages,fetchData} = useContext(AppContext);


    function handlePrevious(){
        fetchData(currentPage-1);
    }
    function handleNext(){
        fetchData(currentPage+1);
    }

    return (
        <div className='w-full border-t-2 border-gray-300 fixed bottom-0 py-3 shadow-md bg-white'>
            <div className='w-10/12 max-w-[700px] mx-auto '>
            <footer className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    {
                        currentPage > 1 
                        &&
                        <button className='py-1 px-4 rounded-md border-2' onClick={handlePrevious}>Previous</button>
                    }
                    {
                        currentPage !== totalPages 
                        && 
                        <button className='py-1 px-4 rounded-md border-2' onClick={handleNext}>Next</button>
                    }
                </div>
                <p className='font-bold'>Page {currentPage} of {(totalPages) ? totalPages : "..."}</p>
            </footer>
        </div>
        </div>
    )
}

export default Footer