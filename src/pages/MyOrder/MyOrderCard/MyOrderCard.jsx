

const MyOrderCard = ({ orderItem, idx }) => {
    const { food_name, food_price, date } = orderItem || {};
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
            <th>
                <button className="btn btn-ghost btn-xs">Chef</button>
            </th>
        </tr>
    );
};

export default MyOrderCard;