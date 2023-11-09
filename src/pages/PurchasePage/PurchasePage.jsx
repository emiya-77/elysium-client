import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const PurchasePage = () => {
    const foodItem = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, foodName, price, quantity } = foodItem || {};
    const { displayName, email, uid } = user || {};


    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_price = form.price.value;
        const food_quantity = form.food_quantity.value;
        const date = form.date.value;
        const purchaseItem = {
            customerId: uid,
            customerName: displayName,
            email,
            date,
            food_id: _id,
            food_name,
            food_price,
            food_quantity
        }
        const incrementValue = 1;
        console.log(purchaseItem);

        if (quantity == 0) {
            Swal.fire({
                title: "Warning!",
                text: "Sorry, Item not available!",
                icon: "warning",
                confirmButtonText: "Okay",
            });
            return;
        }

        if (food_quantity > quantity) {
            Swal.fire({
                title: "Warning!",
                text: "Available quantity exceeded! Decrease the quantity amount!",
                icon: "warning",
                confirmButtonText: "Okay",
            });
            return;
        }
        if (food_quantity <= 0) {
            Swal.fire({
                title: "Warning!",
                text: "Quantity cannot be 0 or less!",
                icon: "warning",
                confirmButtonText: "Okay",
            });
            return;
        }
        axios.post('https://elysium-server.vercel.app/purchase-item', purchaseItem)
            .then(res => {
                console.log(res.data);
                fetch(`https://elysium-server.vercel.app/food-menu/${_id}/increment`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ incrementValue, food_quantity })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log('yay');
                        }
                    })
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | Purchase</title>
            </Helmet>
            <div className='w-full flex justify-center items-center bg-split h-screen'>
                <div className='container bg-orange-50 lg:w-[1200px] h-[650px] flex flex-col justify-center items-center rounded-3xl shadow-lg'>
                    <Link className="my-12" to='/'>
                        <img className='w-40 md:w-48' src="/img/logo/elysium-light.png" alt="logo" />
                    </Link>
                    <div className='w-full h-full flex justify-center items-start'>
                        <div className='w-full justify-center items-center'>
                            <form onSubmit={handlePurchase} className='flex flex-col justify-center items-center'>
                                <div className="flex justify-center items-center">
                                    <div className="flex flex-col items-center justify-center gap-y-4">
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Name</h2>
                                            <input className="input-text" type="text" name="name" placeholder="Name" value={displayName} required />
                                        </div>
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Email</h2>
                                            <input className="input-text" type="email" name="email" placeholder="email" value={email} />
                                        </div>
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Date</h2>
                                            <input className="input-text" type="date" name="date" placeholder="date" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-y-4">
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Food Name</h2>
                                            <input className="input-text" type="text" name="foodName" placeholder="Food Name" defaultValue={foodName} required />
                                        </div>
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Price</h2>
                                            <input className="input-text" type="number" name="price" placeholder="Price" defaultValue={price} />
                                        </div>
                                        <div>
                                            <h2 className="pl-10 text-lg text-orange-600">Available - {quantity}</h2>
                                            <input className="input-text" type="number" name="food_quantity" placeholder="quantity" required />
                                        </div>
                                    </div>
                                </div>

                                <input className="w-[200px] cursor-pointer text-xl font-medium py-4 text-white bg-[#161f26] border-2 border-[#161f26] hover:bg-opacity-0 hover:border-orange-500 hover:text-orange-500 transition duration-200 ease-in-out rounded-full mx-4 my-6 shadow-lg" type="submit" value="Purchase" />
                            </form>
                        </div>
                    </div>
                    {/* <div className='w-full h-96 md:w-2/3 md:h-full rounded-3xl flex justify-center items-center overflow-hidden'>
                        <img className='w-full h-full object-cover' src='/img/food3.jpg' alt="dinner" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;