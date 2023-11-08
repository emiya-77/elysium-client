// import Navbar from "../../../components/Navbar/Navbar";
// import Sidebar from "../../../components/Sidebar/Sidebar";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularItems from "../PopularItems/PopularItems/PopularItems";


const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* <Sidebar></Sidebar> */}
            <Banner></Banner>
            <PopularItems></PopularItems>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;