import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsOpen(false);
    };

    return (
        <div className='flex justify-center sticky top-0 z-[9999]'>
            <nav className="p-4 m-3 w-full max-w-[900px] shadow-xl flex flex-col md:flex-row justify-between md:justify-evenly items-center bg-white md:bg-gray-600 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 md:bg-opacity-5 border border-gray-100/20">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <Link to='/' className='font-bold text-2xl tracking-tighter bg-gradient-to-r from-black to-gray-600 bg-clip-text'>AURA</Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full md:w-auto mt-4 md:mt-0 transition-all duration-300`}>
                    <Link to='/' onClick={() => setIsOpen(false)} className='transition font-medium text-gray-700 md:text-gray-900 hover:text-black hover:scale-105'>Home</Link>
                    <Link to='/about' onClick={() => setIsOpen(false)} className='transition font-medium text-gray-700 md:text-gray-900 hover:text-black hover:scale-105'>About</Link>
                    <Link to='/contact' onClick={() => setIsOpen(false)} className='transition font-medium text-gray-700 md:text-gray-900 hover:text-black hover:scale-105'>Contact</Link>
                </div>

                {/* Actions */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-3 items-center justify-center w-full md:w-auto mt-4 md:mt-0`}>
                    <select className="bg-transparent border-none text-sm font-medium text-gray-700 focus:ring-0 cursor-pointer">
                        <option value="Language">Language</option>
                        <option value="Hindi">हिन्दी</option>
                        <option value="Telugu">తెలుగు</option>
                        <option value="chineese">中国人</option>
                    </select>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className='w-full md:w-auto text-center bg-red-600 text-white rounded-xl px-6 py-2.5 hover:bg-red-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm font-semibold'
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to='/login'
                            onClick={() => setIsOpen(false)}
                            className='w-full md:w-auto text-center bg-black text-white rounded-xl px-6 py-2.5 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm font-semibold'
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;