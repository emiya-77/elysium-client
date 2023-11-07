import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyOrderCard from "../MyOrderCard/MyOrderCard";


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [myOrderList, setMyOrderList] = useState([]);
    const axiosSecure = useAxiosSecure();
    console.log('email: ', user?.email);

    const url = `/purchase-item?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setMyOrderList(res.data));
    }, [url, axiosSecure]);
    return (
        <div className="container mx-auto pt-48">
            <div className="p-4 bg-orange-50 rounded-lg">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Food Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Added Date</th>
                                <th>Food Owner</th>
                            </tr>
                        </thead>
                        {/* rows */}
                        <tbody>
                            {
                                myOrderList.map((orderItem, idx) => <MyOrderCard key={orderItem._id} idx={idx + 1} orderItem={orderItem}></MyOrderCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;