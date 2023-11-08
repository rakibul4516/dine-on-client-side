import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import AxiosData from "../Axios/AxiosData";
import Lottie from "lottie-react";
import loadingdata from '../../public/loadingdata.json'
const TopFoods = () => {
    const axios = AxiosData()
    const [topFoodData, setTopFoodData] = useState([])
    const { isLoading } = useQuery({
        queryKey: ['toporders'],
        queryFn: () =>
            axios.get(`/allfoods`)
                .then((res) => {
                    const sortedData = res.data.sort((a, b) => b.orders - a.orders);
                    setTopFoodData(sortedData)
                }),
    });

    if (isLoading) {
        return <Lottie className="h-80vh h-[80vh] w-10/12 mx-auto" animationData={loadingdata} loop={true} />
    }
    return (
        <div className="pt-10 w-11/12 lg:w-10/12 mx-auto">
            <div className="">
                <h2 className="mb-5 text-3xl font-bold font-[Montez] text-center dark:text-gray-100">TOP FOOD ITEMS</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5">
                {
                    topFoodData.slice(0, 6)?.map((food, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center w-full  mx-auto">
                            <div className="w-full h-64"><img src={food.image} alt="" className="w-full h-64 bg-gray-300  object-cover rounded-lg shadow-md" /></div>

                            <div className="w-56 -mt{-10 overflow-hidden bg-white rounded-lg shadow-lg md:}w-64 dark:bg-gray-800 -mt-10">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white font-[Suranna]">{food.foodName}</h3>
                                <div className=" px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <div className="flex items-center justify-between px-3">
                                        <h3 className="pb-1 tracking-wide text-center text-gray-800 dark:text-white">{food.category}</h3>
                                        <h3 className="py-1 tracking-wide text-center text-gray-800  dark:text-white">Qty: {food.quantity}</h3>
                                    </div>
                                    <div className="flex items-center justify-between px-3">
                                        <span className="font-bold text-gray-800 dark:text-gray-200">${food.price}</span>
                                        <Link to={`/details/${food._id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            <div className="py-10 flex items-center justify-center">
                <Link to='/allfoods' className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">SHOW MORE</Link>
            </div>
        </div>
    );
};

export default TopFoods;