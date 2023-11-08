import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";


const Footer = () => {
    const { darkMode } = useContext(DataContext);
    return (
        <div>
            <div className="bg-orange-100 dark:bg-orange-950 dark:bg-opacity-60">
                <footer className="footer container mx-auto p-10 text-base-content flex justify-between dark:text-white">
                    <aside>
                        <div className="">
                            <Link to='/'>
                                <div className="hidden lg:flex lg:w-[200px] xl:w-[200px]">
                                    <img className="w-full h-full object-cover" src={darkMode ? "/img/logo/elysium-dark.png" : "/img/logo/elysium-light.png"} alt="" />
                                </div>
                            </Link>
                        </div>
                        <p><span className="text-lg font-semibold tracking-wider">Elysium - </span>Better Food, Better Mood.<br />Providing healthy delicious dishes since 2012</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Operating Hours</header>
                        <p><span className="font-semibold">Monday-Friday: </span> 11:00 AM to 9:00 PM</p>
                        <p><span className="font-semibold">Saturday: </span> 11:00 AM to 3:00 PM</p>
                        <p><span className="font-semibold">Sunday: </span> Closed</p>
                    </nav>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Catering</a>
                        <a className="link link-hover">Dine-in</a>
                        <a className="link link-hover">Delivery</a>
                        <a className="link link-hover">Reservation</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Contact Information</header>
                        <p><span className="font-semibold">Address - </span> 123 Sesame Street, Manhattan, NY</p>
                        <p><span className="font-semibold">Phone - </span> 199-999-9999</p>
                        <p><span className="font-semibold">Email - </span> contact@elysium.com</p>
                        <p><span className="font-semibold">Website - </span><a href="">www.elysium.com</a></p>
                    </nav>
                    <nav>
                        <header className="footer-title">Social</header>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                </footer>
            </div>
            <aside className="text-center py-3 bg-orange-200 dark:bg-orange-950 dark:bg-opacity-80 text-base-content dark:text-orange-100">
                <p className="text-sm font-semibold dark:font-normal">Copyright © 2023 - All right reserved by Elysium</p>
            </aside>
        </div>
    );
};

export default Footer;