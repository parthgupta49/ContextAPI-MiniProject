import { createContext, useState } from "react";
import { baseURL } from "../BaseURL";

const AppContext = createContext();

const AppProvider = ({children})=>{

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [totalPages,setTotalPages] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);
    const getData = async (page = 1) => {
        try {
            setLoading(true);
            const response = await fetch(`${baseURL}?page=${page}`);
            const data = await response.json();
            setData(data);
            setCurrentPage(data.page);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function fetchData(page){
        getData(page);
    }

    return(
        <AppContext.Provider value={{data,loading,totalPages,currentPage,fetchData}}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider};