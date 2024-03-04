import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { GrLogout } from 'react-icons/gr'
import { FaHome } from "react-icons/fa";
import { FcSettings } from 'react-icons/fc'
import { MdContactPage } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { RiProjector2Line } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Sidebar = () => {
    const [isActive, setActive] = useState('false')
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleWhatsapp = () => {
        // <a href=" https://wa.me/01672589498"></a>
        window.open("https://wa.me/01672589498", "_blank");
     
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-slate-50 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5 text-black' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div onClick={handleWhatsapp}  className='w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
                            <Logo />
                        </div>

                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src="https://i.ibb.co/1qpph0g/WIN-20231021-18-40-53-Pro.jpg"
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to=''>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline hover:text-teal-700'>
                                    Mostafizur Rahman
                                </h4>
                            </Link>
                            <Link to=''>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline hover:text-teal-700'>
                                    mostafiz.cse.1257@gmail.com
                                </p>
                            </Link>
                        </div>
                    </div>

                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-1  transition-colors duration-200 transform  hover:bg-teal-700   hover:text-white  ${isActive ? 'bg-teal-800 text-white' : 'text-gray-600'
                        }`
                    }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>
            
                    <NavLink
                        to='/resume'
                        className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-1  transition-colors duration-200 transform  hover:bg-teal-700   hover:text-white  ${isActive ? 'bg-teal-800 text-white' : 'text-gray-600'
                        }`
                    }
                    >
                        <MdContactPage className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Resume</span>
                    </NavLink>
                    <NavLink
                        to='/portfolio'
                        className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-1  transition-colors duration-200 transform  hover:bg-teal-700   hover:text-white  ${isActive ? 'bg-teal-800 text-white' : 'text-gray-600'
                        }`
                    }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Portfolio</span>
                    </NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-1  transition-colors duration-200 transform  hover:bg-teal-700   hover:text-white  ${isActive ? 'bg-teal-800 text-white' : 'text-gray-600'
                        }`
                    }
                    >
                        <RiProjector2Line className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Blog</span>
                    </NavLink>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/contract'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-1  transition-colors duration-200 transform  hover:bg-teal-700   hover:text-white  ${isActive ? 'bg-teal-800 text-white' : 'text-gray-600'
                            }`
                        }
                    >
                        <MdOutlinePhoneIphone className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Contract</span>
                    </NavLink>
                    <button
                        // onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-1 text-gray-600     hover:bg-teal-700   hover:text-white transition-colors duration-200 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;