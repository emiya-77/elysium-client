import { useEffect, useState } from "react";
import axios from "axios";


const useFoodItems = () => {
    const [allItems, setAllItems] = useState([]);

    const url = 'https://elysium-server.vercel.app/all-items';
    useEffect(() => {
        axios.get(url)
            .then(res => setAllItems(res.data));
    }, []);

    return allItems;
};

export default useFoodItems;