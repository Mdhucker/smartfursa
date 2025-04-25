import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Why_sfursa');
  };
  const handleDashboard = () => {
    navigate('/Dashboard');
  };


  return (
    <>       
     <Header />


      <div className="min-h-screen flex flex-col">


     

        <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">



          {/* Hero Section */}
          <section className="p-8 sm:p-20 rounded-lg text-center space-y-2">
          <h2 className="text-xl sm:text-3xl md:text-4xl text-blue-500 mb-4 text-center leading-relaxed px-4">
            100% <br />
            Real News. Real Jobs. Real Opportunities. <br />
            The more the information, the better your life becomes.
          </h2>
 
{/* 
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mt-4">
              SmartFursa connects you with opportunities in Tanzania and beyond — from jobs and tenders to scholarships and programs that empower all people.
            </p> */}


           
<div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
    <button
      type="button"
      onClick={handleNavigate}

      className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-900 transition text-base sm:text-xl"
    >

      Why SmartFursa ?


    </button>

    <button
      type="button"
      onClick={handleDashboard}

      className="w-full sm:w-auto text-black bg-blue-50 focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm sm:text-xl px-6 py-3 text-center inline-flex items-center justify-center border-2 border-blue-500"
    >  

      Get Started Now

    </button>
</div>



{/* 
<div className="flex items-center justify-center  ">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/PoEtd-DwYcA?si=YCADDsKcs2bV2ZA2"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    className="rounded-md shadow-lg"
  ></iframe>
</div> */}




          </section>

          {/* the youtube video  */}

          <div className="w-full bg-white border border-blue-300 rounded-2xl p-8 my-10">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-blue-500 mb-4">Looking For Opportunities ?</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Kupitia SmartFursa, unaweza kupata taarifa mbalimbali kama vile Elimu ,fursa za kazi serikalini, mashirika binafsi, NGOs, startups, na hata nafasi za kujiajiri, rahisi kutumia, salama, na imeundwa mahsusi kwa vijana wa Kitanzania na Waafrika kwa ujumla.
              </p>
              <p className="text-md md:text-lg text-gray-600">
                Whether you're a job seeker, tender issuer, or scholarship provider, SmartFursa is built to simplify your search, save your time, and empower your future.
                <span className='text-blue-500' >"Just One Tap to Opportunities & Easy Sharing."
                </span>
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




      <button
  onClick={() => {
    const whatsappURL =
      "https://web.whatsapp.com/send?phone=255686855352&text=Hello%20SmartFursa%2C%20I%20would%20like%20to%20know%20more%20about%20something%20can you help me ?";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `https://api.whatsapp.com/send?phone=255686855352&text=Hello%20SmartFursa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`; // For mobile, open WhatsApp app directly in the same tab
    } else {
      window.location.href = whatsappURL; // For desktop, open WhatsApp Web in the same tab
    }
  }}
  className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg flex items-center gap-2 transition-all duration-300"
  title="Chat with us on WhatsApp"
>
  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.38 0 .04 5.34.04 11.96c0 2.1.54 4.15 1.57 5.96L0 24l6.28-1.63a11.93 11.93 0 005.73 1.46h.01c6.62 0 12-5.34 12-11.96a11.88 11.88 0 00-3.5-8.39zM12 21.47c-1.82 0-3.6-.5-5.15-1.44l-.37-.22-3.73.97.99-3.64-.24-.38A9.98 9.98 0 012.01 12C2.01 6.93 6.45 2.5 12 2.5c2.61 0 5.06 1.01 6.91 2.86A9.98 9.98 0 0121.99 12c0 5.07-4.44 9.47-9.99 9.47zm5.45-7.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.67.15s-.77.98-.95 1.17c-.18.2-.35.22-.65.07s-1.28-.47-2.43-1.5c-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53s-.67-1.61-.92-2.2c-.24-.6-.49-.52-.67-.53h-.57c-.2 0-.53.08-.8.38s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.13 3.24 5.18 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.72 2.03-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z" />
  </svg>

  {/* Text label visible only on medium+ screens */}
  <span className="hidden sm:inline">Chat with us</span>
</button>



      <Footer />
    </>
  );
}

export default Home;
