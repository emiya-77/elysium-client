import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="carousel w-full h-[300px] md:h-[650px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="w-full relative flex justify-start items-center">
                    <img src="/img/food1.jpg" className="w-full h-full absolute object-cover" />
                    <div className="bg-gradient-to-r from-orange-200 to-transparent dark:from-orange-800 h-full w-full pt-20 md:pt-4 pb-6 pl-4 md:pl-10 lg:pl-32 backdrop-blur-none rounded-lg flex flex-col items-start justify-center gap-3 md:gap-8">
                        <h1 className="text-2xl md:text-7xl font-semibold text-orange-900 dark:text-orange-50">Elysium <span className="text-xl md:text-5xl font-light"> - A Culinary Paradise</span></h1>
                        <p className="w-[300px] md:w-[600px] lg:w-[800px] line-clamp-3 md:line-clamp-4 text-base md:text-xl font-light text-orange-900 dark:text-orange-50">Experience the art of flavor at Elysium, where every dish tells a unique story of culinary excellence. Our restaurant is a haven for food enthusiasts, offering a delightful journey through diverse cuisines. Explore a world of delectable creations, meticulously prepared by our master chefs, and savor the taste of perfection.</p>
                        <Link className="z-10" to='food-menu'>
                            <button className="btn bg-orange-500 dark:bg-orange-700 text-orange-900 dark:text-orange-50 text-xs md:text-lg tracking-wider font-medium cursor-pointer border-none shadow-md hover:bg-orange-400 dark:hover:bg-orange-300 dark:hover:bg-opacity-30 hover:bg-opacity-70 bg-opacity-70">Explore Menu</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="w-full relative md:h-[650px] flex justify-start items-center">
                    <img src="/img/food2.jpg" className="w-full h-full absolute object-cover" />
                    <div className="bg-gradient-to-r from-orange-200 to-transparent dark:from-orange-800 h-full w-full pt-20 md:pt-4 pb-6 pl-4 md:pl-32 backdrop-blur-none rounded-lg flex flex-col items-start justify-center gap-3 md:gap-8">
                        <h1 className="text-2xl md:text-7xl font-semibold text-orange-900 dark:text-orange-50">Elysium <span className="text-xl md:text-5xl font-light"> - A Culinary Paradise</span></h1>
                        <p className=" w-[800px] text-base md:text-xl font-light text-orange-900 dark:text-orange-50">Experience the art of flavor at Elysium, where every dish tells a unique story of culinary excellence. Our restaurant is a haven for food enthusiasts, offering a delightful journey through diverse cuisines. Explore a world of delectable creations, meticulously prepared by our master chefs, and savor the taste of perfection.</p>
                        <Link className="z-10" to='food-menu'>
                            <button className="btn bg-orange-500 dark:bg-orange-700 text-orange-900 dark:text-orange-50 text-xs md:text-lg tracking-wider font-medium cursor-pointer border-none shadow-md hover:bg-orange-400 dark:hover:bg-orange-300 dark:hover:bg-opacity-30 hover:bg-opacity-70 bg-opacity-70">Explore Menu</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="w-full relative md:h-[650px] flex justify-start items-center">
                    <img src="/img/food3.jpg" className="w-full h-full absolute object-cover" />
                    <div className="bg-gradient-to-r from-orange-200 to-transparent dark:from-orange-800 h-full w-full pt-20 md:pt-4 pb-6 pl-4 md:pl-32 backdrop-blur-none rounded-lg flex flex-col items-start justify-center gap-3 md:gap-8">
                        <h1 className="text-2xl md:text-7xl font-semibold text-orange-900 dark:text-orange-50">Elysium <span className="text-xl md:text-5xl font-light"> - A Culinary Paradise</span></h1>
                        <p className="w-[800px] text-base md:text-xl font-light text-orange-900 dark:text-orange-50">Experience the art of flavor at Elysium, where every dish tells a unique story of culinary excellence. Our restaurant is a haven for food enthusiasts, offering a delightful journey through diverse cuisines. Explore a world of delectable creations, meticulously prepared by our master chefs, and savor the taste of perfection.</p>
                        <Link className="z-10" to='food-menu'>
                            <button className="btn bg-orange-500 dark:bg-orange-700 text-orange-900 dark:text-orange-50 text-xs md:text-lg tracking-wider font-medium cursor-pointer border-none shadow-md hover:bg-orange-400 dark:hover:bg-orange-300 dark:hover:bg-opacity-30 hover:bg-opacity-70 bg-opacity-70">Explore Menu</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="w-full relative md:h-[650px] flex justify-start items-center">
                    <img src="/img/food4.jpg" className="w-full h-full absolute object-cover" />
                    <div className="bg-gradient-to-r from-orange-200 to-transparent dark:from-orange-800 h-full w-full pt-20 md:pt-4 pb-6 pl-4 md:pl-32 backdrop-blur-none rounded-lg flex flex-col items-start justify-center gap-3 md:gap-8">
                        <h1 className="text-2xl md:text-7xl font-semibold text-orange-900 dark:text-orange-50">Elysium <span className="text-xl md:text-5xl font-light"> - A Culinary Paradise</span></h1>
                        <p className="w-[800px] text-base md:text-xl font-light text-orange-900 dark:text-orange-50">Experience the art of flavor at Elysium, where every dish tells a unique story of culinary excellence. Our restaurant is a haven for food enthusiasts, offering a delightful journey through diverse cuisines. Explore a world of delectable creations, meticulously prepared by our master chefs, and savor the taste of perfection.</p>
                        <Link className="z-10" to='food-menu'>
                            <button className="btn bg-orange-500 dark:bg-orange-700 text-orange-900 dark:text-orange-50 text-xs md:text-lg tracking-wider font-medium cursor-pointer border-none shadow-md hover:bg-orange-400 dark:hover:bg-orange-300 dark:hover:bg-opacity-30 hover:bg-opacity-70 bg-opacity-70">Explore Menu</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;