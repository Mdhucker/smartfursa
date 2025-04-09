import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [postDropdownOpen, setPostDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
<section className="py-1 bg-gray-200">
  <div className="container mx-auto flex justify-center">
    <p className="text-xs font-medium text-black">
      <span className="font-bold">New</span> — 
      We have launched over 100+ opportunities and jobs at Project X! <span> </span>
      <Link to="/new-blog" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        Check out 
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        
      </Link>
    </p>
  </div>
</section>

      
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXiyanH3C-cXQGBTnL3ZUzSSpb3eaCQR_Yw&s"
            alt="Logo"
            className="w-28 h-8 rounded-md mr-1"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-2 items-center">
          <Link to="/" className="text-sm text-white hover:text-yellow-300 py-1">Results</Link>
          <Link to="/tanzania-jobs" className="text-sm text-white hover:text-yellow-300 py-1">Tanzania-Jobs</Link>
          <Link to="/all-jobs" className="text-sm text-white hover:text-yellow-300 py-1">All-Jobs</Link>
          <Link to="/tender" className="text-sm text-white hover:text-yellow-300 py-1">Tender</Link>

          {/* Post Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setPostDropdownOpen(true)}
            onMouseLeave={() => setPostDropdownOpen(false)}
          >
            <button className="text-sm text-white hover:text-yellow-300 focus:outline-none py-1">
              Post
            </button>
            {postDropdownOpen && (
              <div className="absolute mt-1 w-44 bg-white text-black border border-gray-300 rounded-xl shadow-xl z-50">
                <Link to="/post-job" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post Job</Link>
                <Link to="/post-tender" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post Tender</Link>
              </div>
            )}
          </div>

          <Link to="/advertise" className="text-sm text-white hover:text-yellow-300 py-1">Advertise</Link>
          <Link to="/other" className="text-sm text-white hover:text-yellow-300 py-1">Other</Link>
        </nav>

        {/* Desktop MyAccount Top Right */}
        <div className="hidden sm:block relative">
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-sm text-white hover:text-yellow-300 focus:outline-none py-1">
              MyAccount
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white text-black border border-gray-300 rounded-xl shadow-xl z-50">
                <Link to="/login" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Login</Link>
                <Link to="/register" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Register</Link>
                <Link to="/logout" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Logout</Link>
                <Link to="/post-resume" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post Resume</Link>
                <Link to="/post-cv" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post CV</Link>
                <Link to="/post-job" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post Job Free</Link>
                <Link to="/post-tender" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">Post a Tender</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-white focus:outline-none text-lg p-1 rounded hover:bg-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide-In Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1da1f2] transform transition-transform duration-300 ease-in-out z-40 sm:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 space-y-2">
          <Link to="/" className="block text-sm text-white hover:text-yellow-300 py-1">Home</Link>
          <Link to="/tanzania-jobs" className="block text-sm text-white hover:text-yellow-300 py-1">Tanzania-Jobs</Link>
          <Link to="/all-jobs" className="block text-sm text-white hover:text-yellow-300 py-1">All-Jobs</Link>
          <Link to="/tender" className="block text-sm text-white hover:text-yellow-300 py-1">Tender</Link>

          {/* Post Dropdown */}
          <div>
            <button onClick={() => setPostDropdownOpen(!postDropdownOpen)} className="block text-sm text-white hover:text-yellow-300 py-1 w-full text-left">Post ▾</button>
            {postDropdownOpen && (
              <div className="pl-4">
                <Link to="/post-job" className="block text-sm text-white hover:text-yellow-300 py-1">Post Job</Link>
                <Link to="/post-tender" className="block text-sm text-white hover:text-yellow-300 py-1">Post Tender</Link>
              </div>
            )}
          </div>

          <Link to="/advertise" className="block text-sm text-white hover:text-yellow-300 py-1">Advertise</Link>
          <Link to="/other" className="block text-sm text-white hover:text-yellow-300 py-1">Other</Link>

          {/* MyAccount Dropdown */}
          <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="block text-sm text-white hover:text-yellow-300 py-1 w-full text-left">MyAccount ▾</button>
            {dropdownOpen && (
              <div className="pl-4">
                <Link to="/login" className="block text-sm text-white hover:text-yellow-300 py-1">Login</Link>
                <Link to="/register" className="block text-sm text-white hover:text-yellow-300 py-1">Register</Link>
                <Link to="/logout" className="block text-sm text-white hover:text-yellow-300 py-1">Logout</Link>
                <Link to="/post-resume" className="block text-sm text-white hover:text-yellow-300 py-1">Post Resume</Link>
                <Link to="/post-cv" className="block text-sm text-white hover:text-yellow-300 py-1">Post CV</Link>
                <Link to="/post-job" className="block text-sm text-white hover:text-yellow-300 py-1">Post Job Free</Link>
                <Link to="/post-tender" className="block text-sm text-white hover:text-yellow-300 py-1">Post a Tender</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
