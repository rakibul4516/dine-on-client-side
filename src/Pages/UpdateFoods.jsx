import { useLoaderData } from "react-router-dom";
import AxiosData from "../Axios/AxiosData";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateFoods = () => {
    const axios = AxiosData()
    // const userEmail = auth.currentUser?.email;
    // const userName = auth.currentUser?.displayName;
    const updateFood = useLoaderData()
    //Destructure data 
    const { _id, foodName, image, category, quantity, price, origin, desc,userEmail,userName } = updateFood || {}
    console.log(updateFood)
    const handleUpdateFoodFormData = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodname.value;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const desc = form.desc.value;
        const foods = { foodName, image, category, quantity, price, origin, desc, userEmail, userName }
        console.log(foods)

        //add product to server 
        axios.put(`/foods/${_id}`, foods)
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Updated Foods",
                    });
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>DineOn | Update foods</title>
            </Helmet>
            <section className="lg:w-10/12 w-11/12 my-10 p-6 mx-auto bg-[#FCF5ED] rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-3xl font-bold text-center dark:text-white font-[montez]">Update Your Foods</h2>

                <form onSubmit={handleUpdateFoodFormData}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Food Name</label>
                            <input name="foodname" type="text" defaultValue={foodName} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Food Image</label>
                            <input type="text" name="image" defaultValue={image} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Food Category</label>
                            <select name="category" defaultValue={category} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
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
                            <input type="number" name="quantity" defaultValue={quantity} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Price</label>
                            <input type="text" name="price" defaultValue={price} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Food Origin</label>
                            <input type="text" name="origin" defaultValue={origin} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input type="text" name="desc" defaultValue={desc} className="block w-full py-1 text-gray-700 placeholder-gray-400/70 bg-white border border-[#CCC] rounded-sm pl-2 pr-5 rtl:pr-2 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="px-8 py-2.5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Food</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default UpdateFoods;