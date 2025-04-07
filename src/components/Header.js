import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [postDropdownOpen, setPostDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXiyanH3C-cXQGBTnL3ZUzSSpb3eaCQR_Yw&s"
            alt="Logo"
            className="w-28 h-8 rounded-md mr-2"
          />
        </Link>

        {/* Desktop MyAccount Top Right */}
        <div className="hidden sm:block absolute right-4 top-2">
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

      {/* Slide-In Navigation for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform transition-transform duration-300 ease-in-out z-40 sm:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 space-y-2">
          <Link to="/" className="block text-sm text-white hover:text-yellow-300 py-1">Home</Link>
          <Link to="/tanzania-jobs" className="block text-sm text-white hover:text-yellow-300 py-1">Tanzania-Jobs</Link>
          <Link to="/all-jobs" className="block text-sm text-white hover:text-yellow-300 py-1">All-Jobs</Link>
          <Link to="/tender" className="block text-sm text-white hover:text-yellow-300 py-1">Tender</Link>

          {/* Post Dropdown (Simple Toggle) */}
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

          {/* MyAccount Dropdown (Simple Toggle) */}
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

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-4 items-center px-4 py-2 justify-center">
        <Link to="/" className="text-sm text-white hover:text-yellow-300 py-1  ">Home</Link>
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
    </header>
  );
}

export default Header;