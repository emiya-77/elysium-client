import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoodItemCard = ({ foodItem }) => {
    const { foodName, foodImage, foodCategory, price, quantity, _id } = foodItem || {};
    return (
        <>
            <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }} initial={{ scale: 0.6 }} className="w-full md:w-[400px] bg-orange-100 overflow-hidden shadow-lg relative group bg-opacity-80 backdrop-blur-sm md:m-2">
                <div className="h-[250px] relative pb-2/3 group-hover:transform group-hover:scale-105 transition-transform duration-500 flex justify-center items-center">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col text-orange-900">
                    <div className="px-6 pt-3 pb-1">
                        <div className="font-normal text-3xl tracking-wider mb-2 line-clamp-1">{foodName}</div>
                        <p className="text-xl font-light tracking-wider">{foodCategory}</p>
                    </div>
                    <div className="px-6 flex justify-between items-center">
                        <span className="text-3xl font-light">${price}</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-orange-900 font-light text-2xl">Available: <span className="text-3xl font-light">{quantity}</span></span>
                        </div>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                        <Link to={`/food-details/${_id}`}>
                            <button className="bg-orange-200 hover:bg-orange-300 transition-all duration-500 text-black text-xl font-normal tracking-wider py-3 px-16 focus:outline-none focus:shadow-outline">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default FoodItemCard;