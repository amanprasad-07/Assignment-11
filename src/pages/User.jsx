import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

export async function userLoader({ params }) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        if (!res.ok) {
            throw new Response("User not found", { status: 404 });
        }
        return res.json();
    }

export default function User() {
   const user = useLoaderData();
   
    return (
        <div className='flex flex-col mt-10 items-center h-screen'>
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">User Details</h1>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        </div>
    )
}

