import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const foodItem = useLoaderData();
    const { _id, foodName, foodImage, foodCategory, price, madeBy, foodOrigin, shortDescription, longDescription } = foodItem || {};

    return (
        <div className="w-full h-screen bg-orange-50 py-16">
            <div className="container h-[750px] bg-orange-200 mx-auto shadow-lg rounded-lg overflow-hidden flex">
                <div className="w-2/3 h-full rounded-r-3xl shadow-lg flex justify-center items-center overflow-hidden">
                    <img className="w-full h-full object-cover" src="/public/img/food5.jpg" alt="" />
                </div>
                <div className="w-1/3 h-full p-10 flex flex-col justify-center items-center gap-6">
                    <div className="w-full h-full bg-orange-100 rounded-lg shadow-md px-6 py-6 text-orange-800 flex flex-col gap-3">
                        <h2 className="text-4xl tracking-wider">{foodName}</h2>
                        <h2 className="text-2xl font-light">{foodCategory}</h2>
                        <h2 className="text-xl font-light"><span className="font-normal">Prepared By: </span>{madeBy}</h2>
                        <h2 className="text-xl font-light"><span className="font-normal">Origin: </span>{foodOrigin}</h2>
                        <h2 className="text-xl font-light"><span className="font-normal">Description: </span>{shortDescription}</h2>
                        <h2 className="text-3xl font-medium"><span className="text-xl font-normal">Price: </span>{price}</h2>
                    </div>
                    <Link to={`/purchase/${_id}`} className="flex justify-center items-center w-full py-3 text-orange-800 bg-orange-100 rounded-lg shadow-lg hover:bg-orange-300 hover:text-orange-950 transition-all duration-300">
                        <button className="text-2xl">Order</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;