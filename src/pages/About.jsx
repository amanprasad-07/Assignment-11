import React from 'react';
import { Link } from 'react-router-dom';

function About() {

    const randomUserId = Math.floor(Math.random() * 10) + 1;

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6 pb-32">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <section>
                    <h1 className="text-4xl md:text-5xl font-bold text-cyan-950 mb-4">
                        About <span className="text-blue-600">SkyNet Solutions</span>
                    </h1>
                    <p className="text-lg text-gray-700">
                        Building tomorrow’s technology with today’s imagination.
                    </p>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold text-cyan-950 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At SkyNet Solutions, we believe technology should empower people,
                        not overwhelm them. Our team crafts modern web applications and
                        cloud solutions that are fast, secure, and delightfully easy to use.
                        Whether you’re a small startup or a growing enterprise, we bring
                        bold ideas to life—without the headache.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-950 mb-6">What Drives Us</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Innovation</h3>
                            <p className="text-gray-700">
                                We stay curious and embrace new technologies to create solutions
                                that shape the future.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Integrity</h3>
                            <p className="text-gray-700">
                                Transparent processes and honest communication are at the heart
                                of everything we do.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Impact</h3>
                            <p className="text-gray-700">
                                We aim to make a positive difference in people’s lives—one
                                product at a time.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <p className="text-lg text-gray-800">
                        Curious to see our work in action? Check out the{" "}
                        <Link to={`/user/${randomUserId}`} className="text-blue-600 font-semibold hover:underline">
                            Users
                        </Link>{" "}
                        page to meet some of our clients!
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
