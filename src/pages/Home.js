import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>        <Header />

      <div className="min-h-screen flex flex-col">


        <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="p-8 sm:p-20 rounded-lg text-center space-y-2">
          <h2 className="text-xl sm:text-3xl md:text-4xl text-blue-500 mb-4 text-center leading-relaxed px-4">
            Real News. Real Jobs. Real Opportunities. <br />
            The more the information, the better your life becomes.
          </h2>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mt-4">
              Project X connects you with opportunities in Tanzania and beyond — from jobs and tenders to scholarships and programs that empower all people.
            </p>

              
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
  <button
    type="button"
    className="w-full sm:w-auto text-white bg-blue-500 focus:ring-4 flex-wrap focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm sm:text-base px-6 py-3 text-center inline-flex items-center justify-center"
  >
    Explore Opportunity
<path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
    
  </button>

    <button
      type="button"
      className="w-full sm:w-auto text-black bg-blue-50 focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm sm:text-base px-6 py-3 text-center inline-flex items-center justify-center border-2 border-blue-500"
    >
        <Link to="/dashboard">

      Get Started Now
      </Link>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />      

    </button>
</div>




          </section>

          <div className="w-full bg-white border border-blue-300 rounded-2xl p-8 my-10">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-blue-500 mb-4">Looking For Nafasi za Kazi ?</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Kupitia Project X, unaweza kupata fursa za kazi serikalini, mashirika binafsi, NGOs, startups, na hata nafasi za kujiajiri — all in one place, rahisi kutumia, salama, na imeundwa mahsusi kwa vijana wa Kitanzania na Waafrika kwa ujumla.
              </p>
              <p className="text-md md:text-lg text-gray-600">
                Whether you're a job seeker, tender issuer, or scholarship provider, ProjectX is built to simplify your search, save your time, and empower your future.
              </p>
            </div>
          </div>

          <h3 className="text-3xl md:text-2xl py-4 text-blue-500 mb-4 text-center">
            We have everything, please use our links to find what you are looking for
          </h3>

          {/* the results components */}
          <Jobs />
          <Results />
          <Trends />

          <section className="w-full bg-blue-50 py-12 px-4 border border-blue-300 my-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Sign up for our newsletter</h2>
              <p className="mb-6 text-black">
                Want to be the first to know about new job opportunities, scholarships, training programs, and important updates? <br />
                Sign up for our newsletter and never miss out on what's important to your future.
              </p>

              <form className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative w-full md:w-2/3">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-900 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}

export default Home;
