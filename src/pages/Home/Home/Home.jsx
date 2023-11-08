// import Navbar from "../../../components/Navbar/Navbar";
// import Sidebar from "../../../components/Sidebar/Sidebar";

import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularItems from "../PopularItems/PopularItems/PopularItems";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* <Sidebar></Sidebar> */}
            <Banner></Banner>
            <PopularItems></PopularItems>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;