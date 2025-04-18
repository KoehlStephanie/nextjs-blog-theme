// pages/submit.js

import React from 'react';

const SubmitReview = () => {
  return (
    <div className="max-w-xl mx-auto p-6 text-gray-900 bg-cream text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Submit a Review</h1>

      <form name="ex-review" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="ex-review" />

        <label className="block">
          <span className="font-semibold">Reviewer Name (optional):</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Ex's Name:</span>
          <input
            type="text"
            name="ex-name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Rating (1–5):</span>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
          />
        </label>

        <label className="block">
          <span className="font-semibold">Your Review:</span>
          <textarea
            name="review"
            rows="6"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white"
          ></textarea>
        </label>

        <button
          type="submit"
          className="mt-4 bg-pink-300 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitReview;
