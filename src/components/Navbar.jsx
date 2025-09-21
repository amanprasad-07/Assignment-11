import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded hover:bg-blue-50 ${isActive ? "bg-white" : ""}`;

    const randomUserId = Math.floor(Math.random() * 10) + 1;

    return (
        <nav className='flex flex-row justify-between items-center p-5 w-full z-50 bg-blue-100'>
            <div className='justify-center items-center'>
                <h1 className="text-2xl font-bold text-cyan-950 tracking-wide hover:text-blue-900 transition-colors duration-300">
                    SkyNet Solutions
                </h1>
            </div>

            <ul className='hidden lg:flex flex-row gap-12 justify-center items-center text-lg'>
                <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
                <li><NavLink to={`/user/${randomUserId}`} className={linkClass}>User</NavLink></li>
            </ul>

            <div className='relative'>
                <button
                    className='cursor-pointer lg:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <div>
                        <span className='block bg-gray-950 w-9 h-1 rounded-2xl'></span>
                        <span className='block bg-gray-950 w-9 h-1 rounded-2xl my-1'></span>
                        <span className='block bg-gray-950 w-9 h-1 rounded-2xl'></span>
                    </div>
                </button>
                {isOpen && (
                    <div className='fixed right-0 top-0 h-full bg-blue-200 w-full p-7 rounded-md shadow-lg lg:hidden'>
                        <ul className='flex flex-col gap-4 w-full'>
                            <li><NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
                            <li><NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink></li>
                            <li><NavLink to={`/user/${randomUserId}`} className={linkClass} onClick={() => setIsOpen(false)}>User</NavLink></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
