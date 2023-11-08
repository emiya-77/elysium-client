import { useEffect, useState } from "react";
// import useFoodItems from "../../../hooks/useFoodItems";
import FoodItemCard from "../FoodItemCard/FoodItemCard";
import { AiOutlineSearch } from 'react-icons/ai';
import './FoodMenu.css'
import useFoodItems from "../../../hooks/useFoodItems";
import { Helmet } from "react-helmet";


const FoodMenu = () => {
    // const foodItems = useFoodItems();
    const [foodItems, setFoodItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [count, setCount] = useState(0);
    const [query, setQuery] = useState("");
    console.log(foodItems);

    const allItems = useFoodItems();
    const filteredFoodItems = allItems.filter(item => {
        return item?.foodName.toLowerCase().includes(query.toLowerCase())
    })

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];


    useEffect(() => {
        fetch('https://elysium-server.vercel.app/itemsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, []);

    useEffect(() => {
        fetch(`https://elysium-server.vercel.app/food-menu?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setFoodItems(data));
    }, [currentPage, itemsPerPage]);

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
        console.log(val);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | Food Menu</title>
            </Helmet>
            <div className="flex flex-col pt-24 justify-center items-center">
                <div className="container mx-auto mt-12 rounded-full h-[100px] bg-orange-200 flex justify-center items-center">
                    <div className="relative">
                        <AiOutlineSearch className="absolute top-4 left-6" size={40} color='#c39e73' opacity={.8}></AiOutlineSearch>
                        <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="search" placeholder="Search" className="w-[900px] h-[70px] pl-24 text-2xl tracking-wider font-light bg-white rounded-full focus:outline-none border-none" />
                    </div>
                </div>
                <div className="container mx-auto my-16 flex flex-col justify-center items-center gap-16">
                    <h2 className="text-6xl font-light tracking-widest">The Complete Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-y-5 md:gap-x-16">
                        {
                            query
                                ? filteredFoodItems.map(foodItem => <FoodItemCard
                                    key={foodItem._id}
                                    foodItem={foodItem}
                                ></FoodItemCard>)
                                : foodItems.map(foodItem => <FoodItemCard
                                    key={foodItem._id}
                                    foodItem={foodItem}
                                ></FoodItemCard>)
                        }
                    </div>
                </div>
                <div className="w-full">
                    <div className='container mx-auto p-3 rounded-lg bg-orange-100 flex pagination justify-center gap-5 mb-10 shadow-lg'>
                        <button className="w-16 px-3 py-1 rounded-lg bg-orange-200 shadow-md" onClick={handlePrevPage}>Prev</button>
                        {
                            pages.map(page => <button className={`${currentPage === page ? 'bg-orange-300 shadow-md' : undefined} w-16 px-3 py-1 rounded-lg bg-orange-200 shadow-md`} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)
                        }
                        <button className="w-16 px-3 py-2 rounded-lg bg-orange-200 shadow-md" onClick={handleNextPage}>Next</button>
                        <select className="cursor-pointer px-4 rounded-lg shadow-md focus:outline-none" value={itemsPerPage} onChange={handleItemsPerPage}>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodMenu;