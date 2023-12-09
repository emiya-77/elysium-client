
import { HiMenuAlt3, HiOutlineBookOpen, HiOutlineArrowUp } from 'react-icons/hi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    const menus = [
        { name: 'Home', link: '/home', icon: AiOutlineHome },
        { name: 'Profile', link: '/profile', icon: AiOutlineUser },
        { name: 'Food Menu', link: '/food-menu', icon: MdOutlineRestaurantMenu },
        { name: 'Blog', link: '/blog', icon: HiOutlineBookOpen },
        { name: 'Log Out', link: '/logout', icon: FiLogOut, margin: true },
        { name: 'Register', link: '/register', icon: HiOutlineArrowUp, marginBot: true },
        { name: 'Light', icon: BiSun, theme: true, light: true },
        { name: 'Dark', icon: BiMoon, theme: true, dark: true },
    ]

    return (
        <section className='flex gap-6'>
            <div className={`bg-orange-50 dark:bg-[#ba721b] dark:text-white min-h-screen ${open ? 'w-72' : 'w-16'} duration-700 text-black px-3`}>
                <div className={`py-3 flex ${open ? 'justify-between' : 'justify-center'}`}>
                    <Link className='h-[60px] flex items-center' to='/home'>
                        <img className={`${!open && 'hidden'} w-[100px] md:w-[150px]`} src='/img/logo/swift-parcel.png' alt="" />
                    </Link>
                    <HiMenuAlt3 size={26} onClick={() => setOpen(!open)} className='cursor-pointer'></HiMenuAlt3>
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {
                        menus?.map((menu, i) => (
                            <Link className={`${menu?.margin ? 'mt-5' : menu?.marginBot ? 'mb-5' : ''} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#eec38e] rounded-md`} to={menu?.link} key={i}>
                                <div>
                                    {React.createElement(menu?.icon, { size: '24' })}
                                </div>
                                <h2 style={{
                                    transitionDelay: `${i + 3}00ms`
                                }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                                <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu?.name}
                                </h2>
                            </Link>))
                    }
                </div>
            </div>
            {/* <div className='m-3 text-xl text-gray-900 font-semibold'>
                ELYSIUM
            </div> */}
        </section>
    );
};

export default Sidebar;