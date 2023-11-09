import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const FoodDetails = () => {
    const foodItem = useLoaderData();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { _id, foodName, foodImage, foodCategory, price, madeBy, addBy, foodOrigin, shortDescription } = foodItem || {};

    const handleOrderClick = email => {
        if (addBy !== email) {
            navigate(`/purchase/${_id}`);
        } else {
            Swal.fire({
                title: "Warning!",
                text: "You Cannot Order Your Own Food!",
                icon: "warning",
                confirmButtonText: "Okay",
            });
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | Food Details</title>
            </Helmet>
            <div className="w-full h-[900px] lg:h-screen lg:mb-56 bg-orange-50 pb-16 pt-32">
                <div className="p-2 lg:p-0 container h-[750px] bg-orange-200 mx-auto shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 h-2/5 md:h-4/6 lg:h-full rounded-lg lg:rounded-r-3xl shadow-lg flex justify-center items-center overflow-hidden mb-4 lg:mb-0">
                        <img className="w-full h-full object-cover" src={foodImage} alt="" />
                    </div>
                    <div className="w-full lg:w-1/3 h-3/5 md:h-2/6 lg:h-full py-10 lg:p-10 flex flex-col justify-center items-center gap-6">
                        <div className="w-full h-full bg-orange-100 rounded-lg shadow-lg px-6 py-6 text-orange-800 flex flex-col gap-3">
                            <h2 className="text-4xl tracking-wider">{foodName}</h2>
                            <h2 className="text-2xl font-light">{foodCategory}</h2>
                            <h2 className="text-xl font-light"><span className="font-normal">Prepared By: </span>{madeBy}</h2>
                            <h2 className="text-xl font-light"><span className="font-normal">Origin: </span>{foodOrigin}</h2>
                            <h2 className="text-xl font-light line-clamp-[10]"><span className="font-normal">Description: </span>{shortDescription}</h2>
                            <h2 className="text-3xl font-medium"><span className="text-xl font-normal">Price: </span>${price}</h2>
                        </div>
                        <div onClick={() => handleOrderClick(user.email)} className="flex cursor-pointer justify-center items-center w-full py-3 text-orange-800 bg-orange-100 rounded-lg shadow-lg hover:bg-orange-300 hover:text-orange-950 transition-all duration-300">
                            <button className="text-2xl">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;