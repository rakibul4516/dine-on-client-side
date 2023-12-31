// import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { AuthContext } from '../Auth/AuthProvider';
import ThemeContext from '../Contexts/ThemeContext';
import "../index.css"
const Navbar = () => {
    const { users, signoutUser } = useContext(AuthContext)
    const [isDropdown, setIsDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext)

    const navitems = <>
        <div className=" menu flex md:flex-row flex-col lg:gap-3 md:gap-1 max-sm:gap-2 items-center  font-semibold">
            <NavLink to='/' className='activeroute py-2 lg:px-4 px-2 hover:hover:bg-orange-400 text-md font-semibold dark:text-white text-black rounded-lg bg-transparent'>Home</NavLink>
            <NavLink to='allfoods' className='activeroute py-2 lg:px-4 px-2 hover:hover:bg-orange-400 text-md font-semibold dark:text-white text-black rounded-lg bg-transparent'> All Food Items</NavLink>
            <NavLink to='blogs' className='activeroute py-2 lg:px-4 px-2 hover:hover:bg-orange-400 text-md font-semibold dark:text-white text-black rounded-lg bg-transparent'>Blogs</NavLink>
        </div>
    </>


    // Logout section
    const HandelLogout = () => {
        signoutUser()

    }


    return (
        <nav className="shadow dark:bg-gray-900 bg-transparent  relative">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <img src="https://i.ibb.co/6WY9fg4/logo.png" alt="" className='h-16 w-24' />
                </div>

                <div className="flex items-center md:order-2 gap-4 ">
                    {theme === 'light' ? <HiMoon className='text-4xl cursor-pointer' onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }} /> : <HiSun className='text-4xl cursor-pointer text-white' onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }} />}

                    {
                        users ? 
                        <div className="">
                            <button
                                type="button"
                                className="flex mr-3 text-sm bg-black rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded={isDropdown}
                                onClick={() => setIsDropdown(!isDropdown)}
                            >
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={users ? users?.photoURL : "https://i.ibb.co/jynfFrz/image-removebg-preview-2.png"} />
                            </button>
                            <div
                                className={`${isDropdown ? 'block' : 'hidden'
                                    } z-50 my-4 text-base list-none bg-orange-50 rounded-md divide-y absolute right-10 top-16`}

                            >
                                <div className="px-4 py-3">
                                    <ul className="flex flex-col">
                                        <NavLink to='myaddedfood' className="activeroute hover:bg-[#F4BF96] dark:text-white text-lg font-semibold px-3 py-2 rounded-md">My added food items</NavLink>
                                        <NavLink to='addfooditem' className="activeroute hover:bg-[#F4BF96] dark:text-white text-lg font-semibold px-3 py-2 rounded-md">Add a food item</NavLink>
                                        <NavLink to='myorders' className="activeroute hover:bg-[#F4BF96] dark:text-white text-lg font-semibold px-3 py-2 rounded-md">My ordered food items</NavLink>
                                    </ul>
                                </div>
                                <ul className="py-2">
                                    <li>
                                        <a onClick={HandelLogout}
                                            href="#"
                                            className="py-2 lg:px-4 px-2 hover:bg-orange-400 text-md font-semibold text-black rounded-lg w-full"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            : <NavLink to='/signin' className='activeclass py-2 lg:px-4 px-2 dark:text-white hover:bg-orange-400 text-md font-semibold text-black rounded-lg bg-transparent'>Login</NavLink>

                    }
                    {/* small Dropdown menu */}

                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm dark:text-white text-gray-700 rounded-lg md:hidden"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navitems}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;


