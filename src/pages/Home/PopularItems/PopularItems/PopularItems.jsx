import axios from "axios";
import { useEffect, useState } from "react";
import PopularItemCard from "../PopularItemCard/PopularItemCard";


const PopularItems = () => {
    const [topItems, setTopItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/top-items')
            .then(res => setTopItems(res.data));
    }, [setTopItems]);

    console.log('from pop:', topItems);

    return (
        <div>
            <div className="container mx-auto my-16 flex flex-col justify-center items-center gap-16">
                <h2 className="text-6xl font-light tracking-widest">Most Popular Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-y-5 md:gap-x-16">
                    {
                        topItems.map(foodItem => <PopularItemCard
                            key={foodItem._id}
                            foodItem={foodItem}
                        ></PopularItemCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularItems;