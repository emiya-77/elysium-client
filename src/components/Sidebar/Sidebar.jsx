
import { HiMenuAlt3, HiOutlineBookOpen } from 'react-icons/hi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { FiFolder, FiShoppingCart } from 'react-icons/fi';
import { RiSettings4Line } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Sidebar = () => {
    const menus = [
        { name: 'Home', link: '/', icon: AiOutlineHome },
        { name: 'Profile', link: '/', icon: AiOutlineUser },
        { name: 'Food Menu', link: '/', icon: MdOutlineRestaurantMenu },
        { name: 'Blog', link: '/', icon: HiOutlineBookOpen },
        { name: 'Log Out', link: '/', icon: FiLogOut, margin: true },
        { name: 'Register', link: '/', icon: FiShoppingCart },
        { name: 'Saved', link: '/', icon: AiOutlineHeart, margin: true },
        { name: 'Setting', link: '/', icon: RiSettings4Line },
    ]
    const [open, setOpen] = useState(true);
    return (
        <section className='flex gap-6'>
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
                <div className='py-3 flex justify-end'>
                    <HiMenuAlt3 size={26} onClick={() => setOpen(!open)} className='cursor-pointer'></HiMenuAlt3>
                </div>
                <div className='mt-4 flex flex-col gap-4 relative'>
                    {
                        menus?.map((menu, i) => (
                            <Link className={`${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`} to={menu?.link} key={i}>
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
            <div className='m-3 text-xl text-gray-900 font-semibold'>
                ELYSIUM
            </div>
        </section>
    );
};

export default Sidebar;