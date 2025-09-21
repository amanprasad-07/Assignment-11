import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    const linkClass = ({ isActive }) =>
        `hover:text-blue-500 transition-colors duration-200 ${isActive ? "text-blue-700 font-semibold" : "text-gray-600"
        }`;

    const randomUserId = Math.floor(Math.random() * 10) + 1;

    return (
        <footer className="bg-blue-100 text-gray-700 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-cyan-950 mb-4">
                        SkyNet Solutions
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Building intelligent web solutions for a smarter tomorrow.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 flex flex-row gap-4">
                        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
                        <li><NavLink to={`/user/${randomUserId}`} className={linkClass}>Users</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <p className="text-sm mb-2"> support@skynetsolutions.com</p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Instagram
                        </a>
                        |
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Twitter
                        </a>
                        |
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-blue-200 text-center py-4 text-sm text-gray-700">
                © {new Date().getFullYear()} SkyNet Solutions. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
