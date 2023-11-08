import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyFoodItemCard from "../MyFoodItemCard/MyFoodItemCard";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { DataContext } from "../../../providers/DataProvider";


const MyFoodItem = () => {
    const { user } = useAuth();
    const { refresh } = useContext(DataContext);
    const [myFoodList, setMyFoodList] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/user-food?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setMyFoodList(res.data));
    }, [url, axiosSecure, refresh]);
    console.log('user email:', user?.email);
    console.log('my food list:', myFoodList);

    const handleMyItemDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/food-menu/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myFoodList.filter(food => food._id !== id);
                            setMyFoodList(remaining);
                            Swal.fire({
                                title: "Success!",
                                text: "Item Deleted Successfully",
                                icon: "success",
                                confirmButtonText: "Cool",
                            });
                        }
                    })
            }
        })
    }
    return (
        <>
            <div className="container mx-auto pt-40 flex flex-col justify-center items-center gap-16">
                <h2 className="text-6xl font-light tracking-widest">My Food Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-y-5 md:gap-x-16 mb-24">
                    {
                        myFoodList.map(foodItem => <MyFoodItemCard
                            key={foodItem._id}
                            handleMyItemDelete={handleMyItemDelete}
                            foodItem={foodItem}
                        ></MyFoodItemCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyFoodItem;