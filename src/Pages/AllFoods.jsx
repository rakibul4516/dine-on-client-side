import FoodCards from "../Components/FoodCards";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "../index.css"
import AxiosData from "../Axios/AxiosData";
import { Helmet } from "react-helmet";
const AllFoods = () => {
    const axios = AxiosData()
    const [foods, setFoods] = useState()
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('');
    const [catagory, setCategory] = ('')
    //Pagination 
    const { count } = useLoaderData()
    const limit = 9;
    const totalPages = Math.ceil(parseInt(count) / limit)
    const pages = [...Array(totalPages).keys()];

    //handle next page 
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    //handle next page 
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    //Fetch data 
    useEffect(() => {
        axios.get(`/allfoods?search=${search}&page=${currentPage}&limit=${limit}&category=${catagory}`)
            .then((res) => {
                setFoods(res.data);
            })
    }, [currentPage, search, axios])

    //find by catagory

    return (
        <div>
            <Helmet>
                <title>DineOn | All food menu</title>
            </Helmet>
            <div className="flex w-10/12 mx-auto py-10 justify-between items-center">
                <div className="">
                    <fieldset className="w-full space-y-1 dark:text-gray-100">
                        <label className="hidden">Search</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <HiMagnifyingGlass />
                                </button>
                            </span>
                            <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900
                            bg-slate-100 focus:dark:border-violet-400" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <select onChange={(e) => setCategory(e.target.value)} name="category" className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option disabled selected>Select your food category</option>
                        <option value="pizza">Pizza</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Burgers">Barger</option>
                        <option value="Sandwiches">Sandwiches</option>
                        <option value="Steak">Steak</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Salads">Salads</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto py-5">
                {
                    foods?.map((item, idx) => <FoodCards key={idx} data={item}></FoodCards>)
                }
            </div>
            <div className="flex justify-center items-center pb-5">
                <button onClick={handlePrevPage} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                {
                    pages?.map(page => (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={page}
                            className={`${currentPage === page ? 'selected' : null} px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
                            {page}
                        </button>
                    ))
                }
                <button onClick={handleNextPage} className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AllFoods;