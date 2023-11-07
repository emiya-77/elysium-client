import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddItem = () => {


    const handleAddItem = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        const newItem = { name, brand: selectedBrand, price, type, rating, image, description };
        console.log(newItem);

        fetch("http://localhost:5000/add-item", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Show Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div>
            <div className='w-full flex justify-center items-center bg-split h-screen pt-20'>
                <div className='container bg-orange-50 lg:w-[1200px] h-[650px] flex flex-col justify-center items-center rounded-3xl shadow-lg'>
                    <Link className="my-12" to='/'>
                        <img className='w-40 md:w-48' src="/img/logo/elysium-light.png" alt="logo" />
                    </Link>
                    <div className='w-full h-full flex justify-center items-start'>
                        <div className='w-full justify-center items-center'>
                            <form className='flex flex-col justify-center items-center'>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex items-center justify-center">
                                        <input className="input-text" type="text" name="foodName" placeholder="Food Name" required />
                                        <input className="input-text" type="text" name="foodImage" placeholder="Food Image" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <input className="input-text" type="text" name="foodCategory" placeholder="Food Category" required />
                                        <input className="input-text" type="text" name="quantity" placeholder="Quantity" />
                                    </div>
                                    <div>
                                        <input className="input-text" type="text" name="price" placeholder="Price" required />
                                        <input className="input-text" type="text" name="addBy" placeholder="Add By" required />
                                    </div>
                                    <div>
                                        <input className="input-text" type="text" name="foodOrigin" placeholder="Food Origin" required />
                                        <input className="input-text" type="text" name="shortDescription" placeholder="Short Description" required />
                                    </div>
                                </div>

                                <input className="w-[200px] cursor-pointer text-xl font-medium py-4 text-white bg-[#161f26] border-2 border-[#161f26] hover:bg-opacity-0 hover:border-orange-500 hover:text-orange-500 transition duration-200 ease-in-out rounded-full mx-4 my-6 shadow-lg" type="submit" value="Add Item" />
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

export default AddItem;
