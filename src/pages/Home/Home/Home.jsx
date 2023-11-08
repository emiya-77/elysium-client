// import Navbar from "../../../components/Navbar/Navbar";
// import Sidebar from "../../../components/Sidebar/Sidebar";

import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularItems from "../PopularItems/PopularItems/PopularItems";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Elysium | Home</title>
            </Helmet>
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