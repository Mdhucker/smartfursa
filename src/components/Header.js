// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Share2 } from 'lucide-react'; // optional, or use any icon

function Header() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [postDropdownOpen, setPostDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



  const [open, setOpen] = useState(false);

  const websiteUrl = window.location.href;
  const encodedUrl = encodeURIComponent(websiteUrl);


  const socialLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedUrl}`,
      color: 'text-green-500',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'text-blue-600',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
      color: 'text-sky-500',
    },
  ];





  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true); // Scrolling up
      } else {
        setShowHeader(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
  
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  
  useEffect(() => {
    if (isSearchOpen) {
      // Disable horizontal scroll only
      document.body.style.overflowX = 'hidden';
    } else {
      // Restore horizontal scroll
      document.body.style.overflowX = 'auto';
    }
  
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, [isSearchOpen]);
  
  
  useEffect(() => {
    if (menuOpen) {
      // Disable horizontal scrolling only
      document.body.style.overflowX = 'hidden';
    } else {
      // Restore horizontal scrolling
      document.body.style.overflowX = 'auto';
    }

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, [menuOpen]);



    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Check out this website!',
            text: 'I found this awesome website!',
            url: window.location.href,
          });
          console.log('Thanks for sharing!');
        } catch (err) {
          console.error('Error sharing:', err);
        }
      } else {
        alert('Your browser does not support sharing.');
      }
    };

  
  return (
    <>
<header className={`bg-gray-300 text-black shadow-md sticky top-0 z-30 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
{/* <div className="w-full h-[150px] bg-gray-300">
        <img
          src="/images/1.png"
          alt="Ad Banner"
          className="w-full h-full object-cover"
        />
      </div> */}



      <section className="py-1 bg-gray-200">
        <div className="container mx-auto flex justify-center">
          <p className="text-xs font-medium text-black">
            <span className="font-bold">New</span> — 
            We have launched over 100+ opportunities and jobs at SmartFursa! <span> </span>
            <Link to="/new-blog" className="text-blue-600 hover:text-bProjectXlue-800 inline-flex items-center">
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
        <h2 className="text-2xl italic font-bold text-blue-700 font-[Poppins]">
           SmartFursa
        </h2>
        {/* <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXiyanH3C-cXQGBTnL3ZUzSSpb3eaCQR_Yw&s"
            alt="Logo"
            className="w-28 h-8 rounded-md mr-1"
          /> */}
        </Link>

        {/* Desktop Navigation */}
        {/* Wrapper for Centering */}
        <div className="hidden sm:flex justify-end w-full pr-72">
        <nav className="flex space-x-4 items-center">
            <Link to="/" className="text-sm text-black hover:text-blue-500 py-1">HOME</Link>
            <Link to="/" className="text-sm text-black hover:text-blue-500 py-1">RESULTS</Link>
            <Link to="/tz_jobs" className="text-sm text-black hover:text-blue-500 py-1">TANZANIA-JOBS</Link>
            <Link to="/all_jobs" className="text-sm text-black hover:text-blue-500 py-1">ALL-JOBS</Link>
            <Link to="/tender" className="text-sm text-black hover:text-blue-500 py-1">TENDER</Link>

            {/* Post Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setPostDropdownOpen(true)}
              onMouseLeave={() => setPostDropdownOpen(false)}
            >
              <button className="text-sm text-black hover:text-blue-500 focus:outline-none py-0">
                POST
                
              </button>
              {postDropdownOpen && (
                <div className="absolute mt-1 w-44 bg-white text-black border border-gray-300 rounded-xl shadow-xl z-30">
                  <Link to="/post-job" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">POST-JOB</Link>
                  <Link to="/post-tender" className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-800">POST TENDER</Link>
                </div>
              )}
            </div>

    <Link to="/advertise" className="text-sm text-black hover:text-blue-500 py-1">ADVERTISE</Link>




    <div className="relative group">
  <button className="text-sm text-black hover:text-blue-500 py-1">
    OTHER   
  </button>
  <div className="absolute hidden group-hover:block bg-blue-50 shadow-md rounded-md mt-1 z-10 border border-blue-300">
    <Link to="/other" className="block px-4 py-1 text-sm text-black hover:bg-blue-100">
      All Other
    </Link>
    <Link to="/education" className="block px-4 py-2 text-sm text-black hover:bg-blue-100">
      Education
    </Link>
    {/* Add more links as needed */}
  </div>
</div>



    <Link to="/Login" className="text-sm text-black hover:text-blue-500 py-1">LOGIN</Link>

  </nav>
</div>


        <div className="flex items-center gap-4 text-black">
            {/* Search Button */}



              <button
                onClick={() => setIsSearchOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {isSearchOpen && (
              <div
              className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 animate-fadeIn"
              onClick={() => setIsSearchOpen(false)}
            >
                  {/* Background Overlay */}
                  <div className="relative inset-0 bg-black bg-opacity-11 transition-opacity duration-300 ease-in-out" />

                  {/* Modal Wrapper */}
                  <div className="fixed inset-0 flex justify-center items-start pt-28 px-4 sm:px-6">
                    <div
                      className="bg-white  shadow-2xl w-full max-w-xl p-6 sm:p-8 md:p-10 border border-blue-500 relative z-10"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                      {/* Cancel Button */}
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
                        aria-label="Close"
                      >
                        X
                      </button>

                      {/* Modal Title */}
                      <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">
                        Search everything
                      </h2>

                      {/* Search Input */}
                      <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        autoFocus
                      />

                      <p className="mt-4 text-sm text-gray-500 text-center">
                        Start typing to find what you need.
                      </p>
                    </div>
                  </div>
                </div>
              )}


         <Link to="/facebook" className="hover:text-blue-800 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 013.8-3.8h2.7v3H15a1 1 0 00-1 1V12h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
            </svg>
          </Link>




          <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-black hover:text-blue-600"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 p-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-4 py-2 hover:bg-gray-100 ${link.color}`}
            >
              Share on {link.name}
            </a>
          ))}
        </div>
      )}
    </div>





          {/* Twitter */}
          <Link to="/twitter" className="hover:text-blue-600 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.59 3H17.4l-4.4 5.62L8.59 3H3.41l6.79 9.01L3 21h3.19l5.01-6.39L17.4 21h5.19l-7.5-9.96L20.59 3z" />
            </svg>
          </Link>

          {/* Notification (Alternative Icon) */}
          <Link to="/notifications" className="flex items-center gap-2 hover:text-blue-600 text-black">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
            </svg>
          </Link>

          
          </div>

    
  
                  {/* Mobile Toggle */}
              <button
              
                className="sm:hidden text-black focus:outline-none text-lg p-1"
                onClick={() => setMenuOpen(true)}
              >
                ☰
              </button>
              </div>

              {/* Overlay Background (Click to close the menu) */}

              {menuOpen && (
                
                <div
                  className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-50 animate-fadeIn"
                  onClick={() => setMenuOpen(false)} // Closes menu when overlay is clicked
                  />
              )}

        {/* Mobile Slide-In Navigation */}
        <div
          className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
        >
          <div className="p-6 space-y-3 bg-blue-50 border border-blue-500 ">
            <Link to="/" className="block text-sm text-black hover:text-blue-500 py-1">Home</Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/tanzania-jobs" className="block text-sm text-black hover:text-blue-500 py-1">Tanzania-Jobs</Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/all-jobs" className="block text-sm text-black hover:text-blue-500 py-1">All-Jobs</Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/tender" className="block text-sm text-black hover:text-blue-500 py-1">Tender</Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            {/* Post Dropdown */}
            <div>
              <button onClick={() => setPostDropdownOpen(!postDropdownOpen)} className="block text-sm text-black hover:text-blue-500 py-1 w-full text-left">
                Post ▾
              </button>
              {postDropdownOpen && (
                <div className="pl-4">
                  <hr className="border-t border-blue-300 w-full mb-4" />

                  <Link to="/post-job" className="block text-sm text-black hover:text-blue-500 py-1">Post Job</Link>
                  <hr className="border-t border-blue-300 w-full mb-4" />

                  <Link to="/post-tender" className="block text-sm text-black hover:text-blue-500 py-1">Post Tender</Link>
                </div>
              )}
            </div>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/advertise" className="block text-sm text-black hover:text-blue-500 py-1">Advertise</Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/login" className="flex items-center gap-2 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8V7a5 5 0 00-10 0v1M5 10h14v10H5V10z" />
              </svg>
              <span>Login</span>
            </Link>
            <hr className="border-t border-blue-300 w-full mb-4" />

            <Link to="/other" className="block text-sm text-black hover:text-blue-500 py-1">Other</Link>
          </div>



      </div>
    </header>

    </>
  );
}

export default Header;
