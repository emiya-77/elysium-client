import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyFoodItemCard from "../MyFoodItemCard/MyFoodItemCard";
import useAuth from "../../../hooks/useAuth";


const MyFoodItem = () => {
    const { user } = useAuth();
    const [myFoodList, setMyFoodList] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/user-food?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setMyFoodList(res.data));
    }, [url, axiosSecure]);
    console.log('user email:', user?.email);
    console.log(myFoodList);
    return (
        <div className="container mx-auto pt-40 flex flex-col justify-center items-center gap-16">
            <h2 className="text-6xl font-light tracking-widest">My Food Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-y-5 md:gap-x-16">
                {
                    myFoodList.map(foodItem => <MyFoodItemCard
                        key={foodItem._id}
                        foodItem={foodItem}
                    ></MyFoodItemCard>)
                }
            </div>
        </div>
    );
};

export default MyFoodItem;