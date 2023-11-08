
import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const MyOrderCard = ({ orderItem, idx, handleDelete }) => {
    const [foodInfo, setFoodInfo] = useState({});
    const { food_name, food_price, date, _id, food_id } = orderItem || {};
    const { foodImage, madeBy } = foodInfo || {};

    useEffect(() => {
        fetch(`https://elysium-server.vercel.app/food-menu/${food_id}`)
            .then(res => res.json())
            .then(data => setFoodInfo(data))
    }, [food_id]);
    return (
        <tr>
            <th>
                <label>
                    <h2>{idx}</h2>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{food_name}</div>
                </div>
            </td>
            <td>
                <span className="">{food_price}</span>
            </td>
            <td>{date}</td>
            <td>
                <div className="font-semibold">{madeBy}</div>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-sm rounded-full w-10 h-10">
                    <RxCross1></RxCross1>
                </button>
            </td>
        </tr>
    );
};

export default MyOrderCard;