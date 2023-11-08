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
            <div className="w-10/12 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-full lg:h-96" src={image} alt="Article" />

                <div className="p-6">
                    <div className="">
                        <span className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                        <div className="flex justify-between items-center flex-wrap gap-3">
                            <h2 className="block mt-2 text-3xl font-[Suranna] font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 ">{foodName}</h2>
                            <Link to={`/purchese/${_id}`}><button type="button" className="px-3 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-orange-400 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add To Cart</button></Link>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                <h3 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{price}</h3>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{userName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;