// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    
    <div className="bg-gray-200 min-h-screen flex flex-col">


           <Header />


      <main className="container mx-auto px-4 sm:px-2 py-1 flex-1 space-y-3">
        {/* Hero Section */}
        <section className="bg-blue-50 p-20 rounded-lg shadow-sm text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">
          Real News. Real Jobs. Real Opportunities.<br/>
          The more the information, the better your life becomes.           </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto text-center leading-relaxed mt-4 px-4">
          Project X connects you with opportunities in Tanzania and beyond — from jobs and tenders to scholarships and programs that empower all people.
        </p>


              
          <button type="button" className="text-white bg-blue-700 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
            Explore Opportunity
            </button>


       
          <button type="button" className="text-white bg-yellow-600		 hover:bg-bg-yellow-412/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">

          Get Started Now
          </button>
         
        </section>

{/* Services or Features */}
<section className="bg-gray-100 p-6 rounded-lg shadow bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Our Features</h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-800">
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          Job Listings across Tanzania
        </li>
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <FileText className="w-5 h-5 text-green-600" />
          Government and NGO Tenders
        </li>
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-600" />
          Local & International Scholarships
        </li>
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-orange-600" />
          Career Advice and CV Tips
        </li>
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <Handshake className="w-5 h-5 text-pink-600" />
          Internship and Volunteer Programs
        </li>
        <li className="bg-white p-4 rounded shadow flex items-center gap-2">
          <Bell className="w-5 h-5 text-red-600" />
          Weekly Newsletter and Alerts
        </li>
      </ul>
    </section>
  

        {/* About Section */}
      

<div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
<a href="#">
    <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
</a>
  <div class="p-5">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Project X</h5>
      </a>
      <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
          Project X is a Tanzanian-based digital hub designed to connect people of all backgrounds with life-changing opportunities. Whether you're a student, graduate, professional, or entrepreneur — we curate and share verified job openings, government tenders, scholarships, training, and more to help you thrive.
      </p>
    
  </div>
</div>


        {/* How It Works */}
    
<div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
<a href="#">
    <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
</a>
<div class="p-5">
  <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How it works</h5>
  </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <ol className ="list-decimal space-y-2 pl-6" >
      <li>Visit our platform to explore job listings, tenders, and scholarships.</li>
        <li>Create an account to post your own jobs, resumes, or opportunities.</li>
        <li>Subscribe to receive alerts based on your preferences.</li>
        <li>Apply, connect, and grow your future with confidence!</li>
      </ol>
    </p>
       
  </div>
</div>



        {/* Latest Jobs and Tenders */}
 
<section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opportunity Title 1</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opportunity Title 2</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opportunity Title 3</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

</section>


        {/* Why Choose Us */}
       

<div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img class="rounded-t-lg" src="/assets/images/1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Why Choose Project X?</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <ul className="text-sm sm:text-base  space-y-2 list-disc pl-6">
            <li>Reliable and verified information only</li>
            <li>Updated daily to reflect new opportunities</li>
            <li>Focused on Tanzanian context and needs</li>
            <li>Free to access and post jobs or tenders</li>
            <li>Built for students, job seekers, and organizations</li>
          </ul>
        </p>
       
    </div>
</div>


        {/* Testimonials */}
        





      </main>

      <Footer />
    </div>
  );
}

export default Home;
