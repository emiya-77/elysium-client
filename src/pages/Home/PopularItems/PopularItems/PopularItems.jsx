import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PopularItemCard from "../PopularItemCard/PopularItemCard";
import { DataContext } from "../../../../providers/DataProvider";


const PopularItems = () => {
    const [topItems, setTopItems] = useState([]);
    const { darkMode } = useContext(DataContext);

    useEffect(() => {
        axios.get('http://localhost:5000/top-items')
            .then(res => setTopItems(res.data));
    }, [setTopItems]);

    console.log('from pop:', topItems);

    return (
        <div className="dark:bg-black dark:bg-opacity-60 bg-fixed bg-cover bg-center" style={{
            backgroundImage: `${darkMode ? 'url(img/bg1.jpg)' : ''}`
        }}>
            <div className="container mx-auto py-16 flex flex-col justify-center items-center gap-16">
                <h2 className="text-3xl md:text-6xl dark:text-white dark:font-normal font-light tracking-widest">Most Popular Dishes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-y-4 md:gap-x-4 lg:gap-y-5 lg:gap-x-16 p-2">
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