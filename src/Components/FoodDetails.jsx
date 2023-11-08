import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const foodItem = useLoaderData()
    const { _id, foodName, image, category, quantity, price, origin, desc, userName } = foodItem || {}
    return (
        <div className="py-10 ">
            <Helmet>
                <title>Food details</title>
            </Helmet>
            <div className="lg:w-10/12 w-11/12 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-full lg:h-96" src={image} alt="Article" />

                <div className="p-6">
                    <div className="lg:pr-10">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">Qty: {quantity}</span>

                            <span className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                            
                            <h3 className="mx-2 text-2xl font-bold text-gray-700 dark:text-gray-200" role="link">${price}</h3>
                        </div>
                        <div className="flex justify-between items-center flex-wrap gap-3">
                            <h2 className="block mt-2 text-3xl font-[Suranna] font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 ">{foodName}</h2>
                            <h2 className="block mt-2 text-3xl font-[Suranna] font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 ">{origin}</h2>
                            <Link to={`/purchese/${_id}`}><button type="button" className="px-3 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-orange-400 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Order</button></Link>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-end">
                            <span className="mx-1 text-lg text-gray-600 dark:text-gray-300">{userName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;