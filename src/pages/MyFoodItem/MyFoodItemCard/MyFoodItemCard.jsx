import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { DataContext } from "../../../providers/DataProvider";
import useAuth from "../../../hooks/useAuth";


const MyFoodItemCard = ({ foodItem, handleMyItemDelete }) => {
    const { user } = useAuth();
    const { refresh, setRefresh } = useContext(DataContext);
    const { foodName, foodCategory, price, quantity, _id, foodOrigin, foodImage, madeBy, shortDescription, orders } = foodItem || {};
    const modalRef = useRef();

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

    const handleMyItemUpdate = (e, id) => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const price = form.price.value;
        const addBy = form.addBy.value;
        const madeBy = user?.displayName;
        const foodOrigin = form.foodOrigin.value;
        const shortDescription = form.shortDescription.value;
        const quantity = form.quantity.value;

        const updatedItem = { foodName, foodImage, foodCategory, price, addBy, madeBy, foodOrigin, shortDescription, quantity, orders };
        console.log(updatedItem);

        fetch(`http://localhost:5000/food-menu/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Okay",
                    });
                    form.reset();
                }
            });
        closeModal();
        setRefresh(!refresh);
    }

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
                    <div className="px-6 flex justify-between items-center">
                        <span className="text-3xl font-light">{price}</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-orange-900 font-light text-2xl">Available: <span className="text-3xl font-light">{quantity}</span></span>
                        </div>
                    </div>
                    <div className="px-6 py-4 flex justify-between gap-10">
                        <button onClick={openModal} className="bg-orange-200 hover:bg-orange-300 transition-all duration-500 text-black text-xl font-normal tracking-wider py-3 px-10 focus:outline-none focus:shadow-outline">
                            Update
                        </button>
                        <button onClick={() => handleMyItemDelete(_id)} className="bg-red-500 bg-opacity-50 hover:bg-red-400 transition-all duration-500 text-black text-xl font-normal tracking-wider py-3 px-10 focus:outline-none focus:shadow-outline">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="rounded-lg bg-orange-50 py-4 px-8">
                    <h2 className="text-center text-4xl my-10">Update Item</h2>
                    <div className="modal-action">
                        <form onSubmit={e => handleMyItemUpdate(e, _id)} method="dialog" className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex items-center justify-center">
                                    <input className="input-text" type="text" name="foodName" placeholder="Food Name" defaultValue={foodName} required />
                                    <input className="input-text" type="text" name="foodImage" placeholder="Food Image" defaultValue={foodImage} />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input className="input-text" type="text" name="foodCategory" placeholder="Food Category" defaultValue={foodCategory} required />
                                    <input className="input-text" type="text" name="quantity" placeholder="Quantity" defaultValue={quantity} />
                                </div>
                                <div>
                                    <input className="input-text" type="text" name="price" placeholder="Price" defaultValue={price} required />
                                    <input className="input-text" type="text" name="addBy" placeholder="Add By" value={user?.email} required />
                                </div>
                                <div>
                                    <input className="input-text" type="text" name="foodOrigin" placeholder="Food Origin" defaultValue={foodOrigin} required />
                                    <input className="input-text" type="text" name="shortDescription" placeholder="Short Description" defaultValue={shortDescription} required />
                                </div>
                            </div>
                            <div className="my-10 flex justify-center items-center gap-16">
                                <button className="bg-orange-300 cursor-pointer rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 border-none flex justify-center items-center">
                                    <input className="text-[22px]" type="submit" value="Update" />
                                </button>
                                <button onClick={closeModal()} className="bg-red-400 cursor-pointer rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 border-none flex justify-center items-center">
                                    <div className="text-[22px]">Cancel</div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default MyFoodItemCard;