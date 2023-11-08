import { BiSearch } from 'react-icons/bi';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
            <div className='p-4 md:p-16 bg-[#f9f6f0] dark:bg-gray-700 text-orange-50'>
                <div className="text-center mb-14">
                    <h3 className='text-xl md:text-3xl'>Our Gallery</h3>
                    <h1 className='text-3xl md:text-5xl font-semibold tracking-wider'>Our Untold Stories</h1>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5'>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food1.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food2.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food3.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food4.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food5.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                    <div className="gallery-wrapper flex justify-center">
                        <a className='gallery-img flex justify-center items-center shadow-md' href="#">
                            <img src="/img/food6.jpg" alt="" />
                            <div className="overlay">
                                <BiSearch className='icon' size={32}></BiSearch>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;