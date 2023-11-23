import { useQuery } from "@tanstack/react-query";
import auth from "../firebase.config";
import { useState } from "react";
import AxiosData from "../Axios/AxiosData";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "lottie-react";
import emptycart from '../../public/cartloading.json'
import shoping from '../../public/shoping cart.json'
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const MyOrders = () => {
    const axios = AxiosData()
    const [orders, setOrders] = useState()
    const email = auth.currentUser.email;
    const { isLoading } = useQuery({
        queryKey: ['myorders'],
        queryFn: () =>
            axios.get(`/myorders?email=${email}`)
                .then((res) => {
                    setOrders(res.data);
                }),
    });

    //count total price 
    const totalPrice = orders?.reduce((preTotalPrice, newPrice) => preTotalPrice + parseFloat(newPrice?.price), 0)
    //Delete order
    const handleDeleteOrder = (id) => {
        axios.delete(`/myorders/${id}`)
            .then(res => {
                if (res.data.deletedCount == 1) {
                    const remainingData = orders.filter(order => order._id !== id)
                    setOrders(remainingData)
                    toast('Deleted Successfully')
                }
            })
    }
    if (isLoading) {
        return <Lottie className="h-[80vh] w-10/12 mx-auto" animationData={emptycart} loop={true} />
    }
    return (
        <div>
            <Helmet>
                <title>DineOn | My orders</title>
            </Helmet>
            <div className="">
                <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-3">
                    <div className="max-lg:hidden ">
                        <Lottie className="h-[100vh] w-10/12 mx-auto" animationData={shoping} loop={true} />                    </div>
                    <div className=" py-10">
                        <div className="">
                            <h1 className="text-3xl font-bold font-[Suranna]">Your Orders</h1>
                        </div>
                        <div className="flex justify-between gap-5 items-center py-5">
                            <h1 className="text-2xl font-bold font-[Suranna]">Total Price: ${totalPrice}</h1>
                            {
                                (orders.length > 0) ? <Link to='/payment' className="px-4 py-2 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cheakout</Link> :
                                    <Link to='/payment' className="px-4 py-2 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled">Cheakout</Link>
                            }
                        </div>
                        {
                            (orders.length > 0) ?
                                <div className="w-full py-3">
                                    {
                                        orders?.map(food => (
                                            <div key={food._id} className="pb-3">
                                                <div className="h-full w-full items-center bg-[#FCF5ED] border-gray-200 border p-1 rounded-lg grid grid-cols-4 gap-4">
                                                    <motion.div whileHover={{ scale: 1.2 }} className="">
                                                        <img src={food.image} alt="ordered photo" className="full h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />
                                                    </motion.div>
                                                    <div className="flex-grow col-span-2 w-full">
                                                        <h2 className="text-gray-900 title-font font-medium">{food.foodName}</h2>
                                                        <p className="text-gray-500 text-lg font-semibold">${food.price}</p>
                                                        <p className="text-gray-500">Date: {food.date}</p>
                                                    </div>
                                                    <div onClick={() => handleDeleteOrder(food._id)} className="w-full h-full bg-red-600 flex justify-center items-center rounded-xl ">
                                                        <AiFillDelete className="md:text-5xl text-3xl font-bold text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div> : <Lottie className=" flex justify-center h-[100vh] mx-auto" animationData={emptycart} loop={true} />
                        }

                    </div>

                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        theme="light"
                    />
                </div>
            </div >
        </div>
    );
};

export default MyOrders;