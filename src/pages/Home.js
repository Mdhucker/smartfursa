// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    
    <div className="bg-gray-50 min-h-screen flex flex-col">
           <Header />


      <main className="container mx-auto px-4 sm:px-8 py-10 flex-1 space-y-16">
        {/* Hero Section */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
            Welcome to Project X!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Project X is your ultimate platform for discovering opportunities in Tanzania and beyond — from jobs and tenders to scholarships and programs for all kinds of people.
          </p>
          <button className="mt-5 bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-300 text-sm font-medium focus:outline-none transition">
            Explore Opportunities
          </button>
        </section>

        {/* About Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">About Project X</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Project X is a Tanzanian-based digital hub designed to connect people of all backgrounds with life-changing opportunities. Whether you're a student, graduate, professional, or entrepreneur — we curate and share verified job openings, government tenders, scholarships, training, and more to help you thrive.
          </p>
        </section>

        {/* Services or Features */}
        <section className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">Our Features</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
            <li className="bg-white p-4 rounded shadow">📌 Job Listings across Tanzania</li>
            <li className="bg-white p-4 rounded shadow">📌 Government and NGO Tenders</li>
            <li className="bg-white p-4 rounded shadow">📌 Local & International Scholarships</li>
            <li className="bg-white p-4 rounded shadow">📌 Career Advice and CV Tips</li>
            <li className="bg-white p-4 rounded shadow">📌 Internship and Volunteer Programs</li>
            <li className="bg-white p-4 rounded shadow">📌 Weekly Newsletter and Alerts</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">How It Works</h3>
          <ol className="list-decimal pl-6 text-sm sm:text-base text-gray-700 space-y-2">
            <li>Visit our platform to explore job listings, tenders, and scholarships.</li>
            <li>Create an account to post your own jobs, resumes, or opportunities.</li>
            <li>Subscribe to receive alerts based on your preferences.</li>
            <li>Apply, connect, and grow your future with confidence!</li>
          </ol>
        </section>

        {/* Latest Jobs and Tenders */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">Latest Jobs and Tenders</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 shadow rounded">
                <h4 className="text-lg font-semibold text-blue-800">Opportunity Title {i}</h4>
                <p className="text-sm text-gray-600">Organization Name - Region</p>
                <p className="text-xs text-gray-500 mt-2">Brief summary of the job or tender. Apply before deadline!</p>
                <button className="mt-3 bg-blue-700 text-white px-3 py-1 text-xs rounded hover:bg-blue-800 focus:outline-none transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">Why Choose Project X?</h3>
          <ul className="text-sm sm:text-base text-gray-700 space-y-2 list-disc pl-6">
            <li>Reliable and verified information only</li>
            <li>Updated daily to reflect new opportunities</li>
            <li>Focused on Tanzanian context and needs</li>
            <li>Free to access and post jobs or tenders</li>
            <li>Built for students, job seekers, and organizations</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">What Our Users Say</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <blockquote className="bg-blue-50 p-4 rounded shadow">
              “I found my first internship on Project X — it truly changed my life!”
              <br />
              <span className="text-xs text-gray-600">— Aisha, University Student</span>
            </blockquote>
            <blockquote className="bg-blue-50 p-4 rounded shadow">
              “This platform helps me stay updated with new tenders every week. Highly recommended!”
              <br />
              <span className="text-xs text-gray-600">— John, Local Contractor</span>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-800 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Ready to Take the Next Step?</h3>
          <p className="text-sm sm:text-base mb-4">
            Whether you're looking for work or posting an opportunity — Project X is here for you.
          </p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 text-sm focus:outline-none transition">
            Get Started Now
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
