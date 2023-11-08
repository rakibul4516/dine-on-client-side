import PropTypes from 'prop-types';
import { HiPencilSquare } from "react-icons/hi2";

import { Link } from 'react-router-dom';

const MyFoodCard = ({ data }) => {
    const { _id, foodName, image, category, quantity} = data || {}

    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

            <div className="px-2 py-3 bg-gray-900">
            <h1 className="text-lg font-semibold text-white dark:text-white">{foodName}</h1>
            </div>

            <div className="px-2 py-2 flex gap-3 justify-between items-center">

            </div>
            <div className="px-2 pb-4 flex gap-3 justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Qty: {quantity}</h2>
                <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h1>
                <Link to={`/edit/${_id}`} className="text-lg font-semibold text-gray-800 dark:text-white"><HiPencilSquare /></Link>
            </div>

        </div>
    );
};

MyFoodCard.propTypes = {
    data:PropTypes.object,
};

export default MyFoodCard;



