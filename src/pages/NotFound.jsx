import React from 'react'

function notFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700">Page Not Found</p>
        </div>
    )
}

export default notFound
