// pages/index.js

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-orange-50 min-h-screen text-black py-10 px-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Welcome to After the Fairytale</h1>
        <p className="text-lg text-gray-800">
          Because real life isn’t always happily ever after... sometimes it's ghosting, gaslighting, or a goldfish who thought he was Poseidon.
        </p>
      </header>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search ex names or keywords..."
          className="w-full px-4 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Review Feed */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">Recent Reviews</h2>

        <div className="bg-white border border-pink-100 rounded-lg p-4 mb-6 shadow">
          <p className="font-bold">Ex's Name: The Love Bomber</p>
          <p className="text-sm">Rating: ★★☆☆☆</p>
          <p className="mt-2 text-gray-800">Started strong, ended in confusion. He said forever... and meant until brunch.</p>
        </div>

        <div className="bg-white border border-pink-100 rounded-lg p-4 mb-6 shadow">
          <p className="font-bold">Ex's Name: Miss Red Flag Parade</p>
          <p className="text-sm">Rating: ★☆☆☆☆</p>
          <p className="mt-2 text-gray-800">Said she was over her ex. Reader, she was not.</p>
        </div>

        <div className="bg-white border border-pink-100 rounded-lg p-4 mb-6 shadow">
          <p className="font-bold">Ex's Name: Captain Ghost</p>
          <p className="text-sm">Rating: ★☆☆☆☆</p>
          <p className="mt-2 text-gray-800">He vanished so fast I thought Thanos snapped him.</p>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link href="/submit">
          <a className="inline-block bg-pink-300 text-white font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors shadow-md">
            Share Your Story
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
