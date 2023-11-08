

const Testimonial = () => {
    return (
        <div className="dark:bg-black/80 dark:text-white">
            <div className="container mx-auto text-center py-16">
                <h5 className="text-lg text-orange-950 dark:text-orange-100">Testimonials</h5>
                <h1 className="text-xl md:text-4xl text-orange-900 dark:text-orange-50 mx-auto leading-normal font-semibold mb-12">Read What Others Have To Say</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1300px] mx-auto gap-8 group my-16 px-2">
                    <div className="bg-orange-300/70 w-[300px] mx-auto md:w-[350px] dark:bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-105  cursor-pointer p-8 rounded-xl space-y-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                            <img className="w-full h-full object-cover" src="./img/testimonial1.avif" alt="" />
                        </div>
                        <h4 className="uppercase text-xl font-bold">John Doe</h4>
                        <p className="text-base leading-7 my-3 font-light opacity-50 line-clamp-4"><q>The food at this restaurant is incredible! From the flavorful dishes to the friendly staff, every visit is a delightful experience. I can't get enough of their signature dishes.</q></p>
                        <button className="bg-orange-400 dark:bg-orange-500/60 py-2.5 px-8 rounded-full">
                            Get in Touch
                        </button>
                    </div>
                    <div className="bg-orange-300/70 w-[300px] mx-auto md:w-[350px] dark:bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 cursor-pointer p-8 rounded-xl space-y-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                            <img className="w-full h-full object-cover" src="./img/testimonial2.jpg" alt="" />
                        </div>
                        <h4 className="uppercase text-xl font-bold">Alice Smith</h4>
                        <p className="text-base leading-7 my-3 font-light opacity-50 line-clamp-4"><q>I recently celebrated a special occasion at this restaurant, and it was nothing short of amazing. The ambiance, the food, and the service made it a memorable evening. I highly recommend it for any occasion.</q></p>
                        <button className="bg-orange-400 dark:bg-orange-500/60 py-2.5 px-8 rounded-full">
                            Get in Touch
                        </button>
                    </div>
                    <div className="bg-orange-300/70 w-[300px] mx-auto md:w-[350px] dark:bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-105 cursor-pointer p-8 rounded-xl space-y-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                            <img className="w-full h-full object-cover" src="./img/testimonial3.jpg" alt="" />
                        </div>
                        <h4 className="uppercase text-xl font-bold">Michael Brown</h4>
                        <p className="text-base leading-7 my-3 font-light opacity-50 line-clamp-4"><q>As a food enthusiast, I'm quite picky when it comes to dining out. This restaurant exceeded my expectations. The diverse menu, combined with the fresh ingredients and skilled chefs, keeps me coming back for more.</q></p>
                        <button className="bg-orange-400 dark:bg-orange-500/60 py-2.5 px-8 rounded-full">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;