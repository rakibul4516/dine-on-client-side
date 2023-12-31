import auth from "../firebase.config";
import AxiosData from "../Axios/AxiosData";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddFoodItem = () => {
    const axios = AxiosData()
    const userEmail = auth.currentUser?.email;
    const userName = auth.currentUser?.displayName;
    const handleAddFoodFormData = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodname.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const desc = form.desc.value;
        const orders = '0';
        const products = { foodName, image, category, quantity, price, origin, desc, userEmail, userName, orders }


        //add product to server 
        axios.post('/foods', products)
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Added Foods",
                    });
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>DineOn | Add food item</title>
            </Helmet>
            <section className="lg:w-10/12 w-11/12 my-10 p-6 mx-auto bg-[#FCF5ED] rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-center dark:text-white font-[montez]">Add Your Foods</h2>

                <form onSubmit={handleAddFoodFormData}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                            <input name="foodname" type="text" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Food Image</label>
                            <input type="text" name="image" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Food Category</label>
                            <select name="category" className=" block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
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

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >quantity</label>
                            <input type="number" name="quantity" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Price</label>
                            <input type="text" name="price" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Food Origin</label>
                            <input type="text" name="origin" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input type="text" name="desc" className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="px-8 py-2.5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Food</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddFoodItem;