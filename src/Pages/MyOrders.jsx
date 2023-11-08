import { useQuery } from "@tanstack/react-query";
import auth from "../firebase.config";
import { HiXCircle } from "react-icons/hi2";
import { useState } from "react";
import AxiosData from "../Axios/AxiosData";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "lottie-react";
import NoData from '../../public/Animation2.json'
import { Helmet } from "react-helmet";

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
        return <Lottie className="h-[80vh] w-10/12 mx-auto" animationData={NoData} loop={true} />
    }
    return (
        <div>
            <Helmet>
                <title>My orders</title>
            </Helmet>
            <div className="py-10">
                <div className="w-9/12 mx-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <HiXCircle />
                                </th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Buyer</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        {
                            (orders.length > 0) ? orders?.map(food => <>
                                {/* head */}
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <HiXCircle className="text-lg font-bold" onClick={() => handleDeleteOrder(food._id)} />
                                        </th>
                                        <td>
                                            <div>
                                                <div className="font-bold">{food.foodName}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <h3>{food.price}</h3>
                                        </td>
                                        <td>
                                            <h3>{food.buyerEmail}</h3>
                                        </td>
                                        <td>
                                            <h3>{food.date}</h3>
                                        </td>
                                    </tr>
                                </tbody>

                            </>) : <Lottie className=" flex justify-center mx-auto" animationData={NoData} loop={true} />
                        }
                    </table >
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