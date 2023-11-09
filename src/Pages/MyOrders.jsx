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