
import { RxCross1 } from 'react-icons/rx';

const MyOrderCard = ({ orderItem, idx, handleDelete }) => {
    const { food_name, food_price, date, _id } = orderItem || {};
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
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
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
                <div className="font-semibold">Chef</div>
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