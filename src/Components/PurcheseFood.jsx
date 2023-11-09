import { useLoaderData } from "react-router-dom";
import auth from "../firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AxiosData from "../Axios/AxiosData";
import { Helmet } from "react-helmet";
const PurcheseFood = () => {
    const axios = AxiosData()
    const foodItem = useLoaderData()
    const email = auth.currentUser.email;
    const user = auth.currentUser.displayName;
    const { _id, foodName, image, category, quantity, price, origin, desc,userEmail,orders  } = foodItem || {}
    //Purchese food
    const handlePurcheseData = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const foodQuantity = form.quantity.value;
        if (foodQuantity > quantity) {
            return toast("Order Quantity will be less then Available Quantity!");
        }
        if (foodQuantity < 1) {
            return toast("Order Quantity will be at least 1 !");
        }

        if (userEmail === email) {
            return toast("It's your product. Please try another one")
        }
        const userName = form.userName.value;
        const buyerEmail = form.userEmail.value;
        const date = form.date.value;
        const purcheseData = { foodName, price, foodQuantity, userName, buyerEmail, date,image }
        console.log(purcheseData)

        //Post ordered data to server 
        axios.post('/orders', purcheseData, { withCredentials: true })
            .then(res => {
                if (res.data.insertedId) {
                    const newOrder = parseInt(orders) + parseInt(foodQuantity)
                    const newQuantity = parseInt(quantity) - parseInt(foodQuantity)
                    console.log(newOrder, newQuantity)
                    const updatedata = { orders: newOrder, quantity: newQuantity,foodName, image, category, price, origin, desc, userName,userEmail }
                    //Update order count
                    axios.put(`/foods/${_id}`, updatedata)
                        .then(res => {
                            if (res.data.modifiedCount == 1) {
                                toast('Purchase Successfully')
                            }
                        })
                }
            })

    }


    return (
        <div>
            <Helmet>
                <title>DineOn | Purchese food</title>
            </Helmet>
            <div className="md:grid md:grid-cols-3 w-full mx-auto items-center">
                <img src="https://i.ibb.co/Np1qdyK/img-02.jpg" alt="food image" className="w-full h-full max-md:hidden" />
                <div className="py-10">
                    <div>
                        <h1 className="text-3xl font-bold text-center dark:text-white font-[montez]">ORDER YOUR FOOD</h1>
                    </div>
                    <form onSubmit={handlePurcheseData} className=" flex flex-col px-2 py-5 gap-3">
                        <input type="text" name="foodName" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Food Name" defaultValue={foodName} />
                        <input type="text" name="price" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Price" defaultValue={price} />
                        <input type="number" name="quantity" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Quantity" />
                        <input type="text" name="userName" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={user} readOnly />
                        <input type="text" name="userEmail" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={email} readOnly />

                        <input type="date" name="date" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Food Name" />
                        <button type="submit" className="px-8 py-2.5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 font-bold">Purchese</button>
                    </form>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        theme="light"
                    />
                </div>
                <img src="https://i.ibb.co/0F18Z4G/img-03.jpg" alt="food image" className="w-full h-full max-md:hidden " />
            </div>
        </div>
    );
};

export default PurcheseFood;