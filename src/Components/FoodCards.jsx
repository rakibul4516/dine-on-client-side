import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FcGlobe, } from "react-icons/fc";
import { motion } from 'framer-motion';
const FoodCards = ({ data }) => {
    const { _id, foodName, image, category, quantity, price, origin } = data || {}

    return (
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <motion.div whileHover={{ scale: 1.2 }} className="">
                <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />
            </motion.div>
            <div className="px-3 py-2 bg-orange-100">
                <h1 className="text-xl font-semibold font-[Suranna] text-gray-800 dark:text-white">{foodName}</h1>
            </div>

            <div className="flex items-center justify-between px-2 py-2">
                <div className="flex items-center">
                    <FcGlobe className=' text-lg font-semibold dark:text-slate-100'></FcGlobe>
                    <h1 className="mx-2 text-lg font-semibold text-slate-700 dark:text-slate-100">{origin}</h1>
                </div>
                <div className="flex">
                    <h1 className="mx-3 text-xl font-semibold text-slate-700 dark:text-slate-100">$ {price}</h1>
                </div>
            </div>
            <div className="px-2 pb-4 flex gap-3 justify-between items-center">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h1>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Qty: {quantity}</h2>
                <Link to={`/details/${_id}`} className="px-3 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-orange-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Details</Link>
            </div>
        </div>
    );
};

FoodCards.propTypes = {
    data: PropTypes.object,
};

export default FoodCards;