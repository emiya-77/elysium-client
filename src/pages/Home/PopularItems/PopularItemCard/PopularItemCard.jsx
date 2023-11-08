import { Link } from "react-router-dom";


const PopularItemCard = ({ foodItem }) => {
    const { foodName, foodImage, foodCategory, price, _id } = foodItem || {};
    console.log('from popular card:', foodItem);
    return (
        <>
            <div className="w-[400px] bg-orange-100 overflow-hidden shadow-lg relative group bg-opacity-80 backdrop-blur-sm m-2">
                <div className="h-[250px] relative pb-2/3 group-hover:transform group-hover:scale-105 transition-transform duration-500 flex justify-center items-center">
                    <img
                        src='/public/img/food3.jpg'
                        alt={foodName}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col text-orange-900">
                    <div className="px-6 pt-3 pb-1">
                        <div className="font-normal text-3xl tracking-wider mb-2">{foodName}</div>
                        <p className="text-xl font-light tracking-wider">{foodCategory}</p>
                    </div>
                    <div className="px-6">
                        <span className="text-3xl font-light">{price}</span>
                    </div>
                    <div className="px-6 py-4 flex justify-end">
                        <Link to={`/food-details/${_id}`}>
                            <button className="bg-orange-200 hover:bg-orange-300 transition-all duration-500 text-black text-xl font-normal tracking-wider py-3 px-16 focus:outline-none focus:shadow-outline">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularItemCard;