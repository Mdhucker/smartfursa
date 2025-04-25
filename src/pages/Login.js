
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Results from '../components/Results';
import Jobs from '../components/Jobs';
import Trends from '../components/Trends';
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here (API call, validation, etc.)
      console.log("Logging in with", email, password);
    };


  return (
    <>       
     <Header /> 
     {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-500 ">
     Login = Better service + personalization + security.

</h2> */}
  <div className="relative inset-0 flex items-center justify-center overflow-hidden from-gray-50 to-blue-200 py-20 px-4">
  <div className="bg-gray-50 shadow-xl border rounded-md w-full max-w-md p-4 sm:p-6 md:p-8">
    
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-500">
        Welcome to <span className="text-blue-500">SmartFursa</span>
      </h2>

      <form onSubmit={handleLogin} className="space-y-6 sm:space-y-8">
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition-all"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center text-gray-500">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </div>

  </div>
</div>

      <Footer />
    </>
  );
}

export default Home;
