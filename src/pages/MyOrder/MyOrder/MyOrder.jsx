import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyOrderCard from "../MyOrderCard/MyOrderCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [myOrderList, setMyOrderList] = useState([]);
    const axiosSecure = useAxiosSecure();
    console.log('order email: ', user?.email);

    const url = `/purchase-item?email=${user?.email}`;
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setMyOrderList(res.data));
    }, [url, axiosSecure]);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to remove this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://elysium-server.vercel.app/purchase-item/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myOrderList.filter(order => order._id !== id);
                            setMyOrderList(remaining);
                            Swal.fire({
                                title: "Success!",
                                text: "Item Added Successfully",
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
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | My Order</title>
            </Helmet>
            <div className="container mx-auto pt-48 mb-40">
                <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            No.
                                        </label>
                                    </th>
                                    <th>Food Image</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Added Date</th>
                                    <th>Food Owner</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {/* rows */}
                            <tbody>
                                {
                                    myOrderList.map((orderItem, idx) => <MyOrderCard key={orderItem._id} idx={idx + 1} handleDelete={handleDelete} orderItem={orderItem}></MyOrderCard>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrder;