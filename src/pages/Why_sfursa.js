import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Why_sfursa() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };


  return (
    <>       
     <Header />
<div className="container mx-auto px-4 py-10">
  <h1 className="text-4xl font-semibold text-center mb-6">Why Choose SmartFursa?</h1>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Job Opportunities</h2>
      <p className="text-gray-700">
        Easily find local and international job opportunities based on your skills and experience.
      </p>
    </div>

    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Scholarships</h2>
      <p className="text-gray-700">
        Access a wide range of scholarship opportunities to help fund your education.
      </p>
    </div>

    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Educational Books</h2>
      <p className="text-gray-700">
        Find books and resources to support your academic journey in Tanzania and beyond.
      </p>
    </div>
    
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Past Papers</h2>
      <p className="text-gray-700">
        Easily access past examination papers to help you prepare for your studies and exams.
      </p>
    </div>

    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Exam Results</h2>
      <p className="text-gray-700">
        Get the latest results for national and international exams to stay updated.
      </p>
    </div>

    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-3">Tanzania-Specific Resources</h2>
      <p className="text-gray-700">
        Access useful information related to Tanzania’s education system, including news, guidelines, and more.
      </p>
    </div>
  </div>

  <div className="mt-10 text-center">
    <button
      onClick={handleNavigate}
      className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition"
    >
      Go Back Home
    </button>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Why_sfursa;
