import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  
  const randomUserId = Math.floor(Math.random() * 10) + 1;

  return (
    <div className='bg-blue-50 pb-20'>
      <section className="bg-blue-600 text-white py-20 pl-3 lg:pl-40 text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-4">SkyNet Solutions</h1>
        <p className="text-xl mb-6">Innovating Tomorrow, Today.</p>
        <div className="space-x-4">
          <Link to="/about" className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100">
            Learn More
          </Link>
          <Link to={`/user/${randomUserId}`} className="bg-yellow-400 text-gray-900 px-6 py-2 rounded shadow hover:bg-yellow-300">
            Meet Our Users
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Fast Development</h2>
          <p>We build high-performance web apps at lightning speed.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Full-Stack Expertise</h2>
          <p>From frontend sparkle to backend power—we’ve got it.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Cloud Integration</h2>
          <p>Seamless deployments and future-ready scalability.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
