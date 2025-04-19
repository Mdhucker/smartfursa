// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';

import { Link } from 'react-router-dom';

import {
  Briefcase,
  FileText,
  GraduationCap,
  UserCheck,
  Handshake,
  Bell,
} from 'lucide-react';


function Home() {
  return (
    <>
    <div className=" min-h-screen flex flex-col">


                  <Header />


              <main className="w-full max-w-screen-xl mx-auto">
                
                {/* Hero Section */}
                <section className="p-20 rounded-lg text-center space-y-2">


                  <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-3">
                  Real News. Real Jobs. Real Opportunities.<br/>
                  The more the inforation, the better your life becomes.           </h2>
                  <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mt-4 px-4">
                  Project X connects you with opportunities in Tanzania and beyond — from jobs and tenders to scholarships and programs that empower all people.
                </p>


                      
                  <button type="button" className="text-white bg-blue-500 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 ">
                    Explore Opportunity
                    </button>


                    <Link to="/dashboard">
                    <button
          type="button"
          className="text-black bg-blue-50 hover:bg-blue-60 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-base px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 border-2 border-blue-500"
        >
          Get Started Now
        </button>


        </Link>

      </section>

         <div className="w-full bg-white border border-blue-300 rounded-2xl p-8 my-10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">Looking For Nafasi za Kazi ? </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
            Kupitia Project X, unaweza kupata fursa za kazi serikalini, mashirika binafsi, NGOs, startups, na hata nafasi za kujiajiri — all in one place, rahisi kutumia, salama, na imeundwa mahsusi kwa vijana wa Kitanzania na Waafrika kwa ujumla.    </p>
            <p className="text-md md:text-lg text-gray-600">
              Whether you're a job seeker, tender issuer, or scholarship provider, ProjectX is built to simplify your search, save your time, and empower your future.
            </p>
          </div>
        </div>

        <h3 className="text-3xl md:text-2xl py-4 text-blue-500 mb-4 text-center">We have everything please use our Links to find what you are looking  </h3>

          {/*the results components */}

          <Jobs/>
          <Results/>

        
          <Trends/>

              





    




      </main>

    </div>
    
          <Footer />
</>
  );
}

export default Home;
