// src/components/Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8 text-xs">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">

          {/* About Us Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li><a href="/post-job" className="hover:text-yellow-300">Post A Job</a></li>
              <li><a href="/post-tender" className="hover:text-yellow-300">Post a Tender</a></li>
              <li><a href="/ess-utumishi" className="hover:text-yellow-300">ESS Utumishi</a></li>
              <li><a href="/necta-results" className="hover:text-yellow-300">Matokeo ya NECTA</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact Us</a></li>
            </ul>

            <br/>
            <br/>
            <ul>
              <h3 className="text-sm font-semibold mb-2">Connect With Us</h3>
              <ul className="space-y-1">
                <li><a href="mailto:maulidimdami@gmail.com" className="hover:text-yellow-300">Email: project_x@gmail.com</a></li>
                <li><a href="tel:+255XXXXXXXXX" className="hover:text-yellow-300">Phone: +255 686855352 </a></li>
              </ul>
            </ul>

            <br/>
            <br/>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXiyanH3C-cXQGBTnL3ZUzSSpb3eaCQR_Yw&s"
            alt="Logo"
            className="w-28 h-8 rounded-md mr-2"
            />

          </div>

          {/* Jobs by Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Jobs by Categories</h3>
            <ul className="space-y-1">
              <li><a href="/category/accounting" className="hover:text-yellow-300">Accounting Jobs</a></li>
              <li><a href="/category/administration" className="hover:text-yellow-300">Administration Jobs</a></li>
              <li><a href="/category/banking-finance" className="hover:text-yellow-300">Banking and Finance Jobs</a></li>
              <li><a href="/category/education" className="hover:text-yellow-300">Education and Teaching Jobs</a></li>
              <li><a href="/category/engineering" className="hover:text-yellow-300">Engineering Jobs</a></li>
              <li><a href="/category/government" className="hover:text-yellow-300">Government Jobs</a></li>
              <li><a href="/category/hospitality-tourism" className="hover:text-yellow-300">Hospitality and Tourism Jobs</a></li>
              <li><a href="/category/hr" className="hover:text-yellow-300">Human Resources Jobs</a></li>
              <li><a href="/category/it" className="hover:text-yellow-300">IT Jobs</a></li>
              <li><a href="/category/logistics" className="hover:text-yellow-300">Logistics & Transportation Jobs</a></li>
              <li><a href="/category/mining" className="hover:text-yellow-300">Mining Jobs</a></li>
              <li><a href="/category/ngo-social" className="hover:text-yellow-300">NGO and Social Work Jobs</a></li>
              <li><a href="/category/procurement" className="hover:text-yellow-300">Procurement and Supply Jobs</a></li>
              <li><a href="/category/sales-marketing" className="hover:text-yellow-300">Sales and Marketing Jobs</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Other Services</h3>
            <ul className="space-y-1">
              <li><a href="/cv-writing" className="hover:text-yellow-300">CV Writing Service</a></li>
              <li><a href="/za-bursaries" className="hover:text-yellow-300">ZA-Bursaries</a></li>
              <li><a href="/scholarships" className="hover:text-yellow-300">Scholarships</a></li>
              <li><a href="/career-guide" className="hover:text-yellow-300">Career Guide</a></li>
              <li><a href="/necta-results" className="hover:text-yellow-300">NECTA Results</a></li>
              <li><a href="/advertise" className="hover:text-yellow-300">Advertise Here</a></li>
              <li><a href="/call-for-interview" className="hover:text-yellow-300">Call For Interview</a></li>
              <li><a href="/ajira-portal" className="hover:text-yellow-300">Ajira Portal: Latest Jobs</a></li>
              <li><a href="/clearing-jobs" className="hover:text-yellow-300">Clearing and Forwarding Jobs</a></li>
            </ul>
          </div>

          {/* Jobs by Region */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Jobs</h3>
            <ul className="space-y-1">
              <li><a href="/tanzania-jobs" className="hover:text-yellow-300">Tanzania Jobs</a></li>
              <li><a href="/zambia-jobs" className="hover:text-yellow-300">Jobs in Zambia</a></li>
              <li><a href="/kenya-jobs" className="hover:text-yellow-300">Jobs in Kenya</a></li>
              <li><a href="/tenders" className="hover:text-yellow-300">Tenders in Tanzania</a></li>
              <li><a href="/other-jobs" className="hover:text-yellow-300">Other Countries Jobs</a></li>
              <li><a href="/blog" className="hover:text-yellow-300">Blog</a></li>
              <li><a href="/driver-jobs" className="hover:text-yellow-300">Driver Jobs</a></li>
            </ul>
            <br/>

            <ul>
                
       {/* Email Subscribe Section */}
        <div className="container mx-auto flex flex-col items-start space-y-2">
          <p className="text-xs"></p>
          <form className="flex flex-col items-start space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-2 py-1 rounded text-black text-xs focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 text-xs"
            >
              Subscribe
            </button>
          </form>
      </div>

            </ul>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className="mt-6 text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-2 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaTwitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaLinkedin size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram size={16} />
            </a>
          </div> 
    
    

          {/* Legal and About Summary */}
        <section className="text-center text-gray-500 text-xs mt-12 border-t pt-6">
          <p className="text-[10px] text-gray-400">&copy; 2025  Developed by Project X :All Right Reserved</p>
          <p className="mt-2 max-w-xl mx-auto">
            <strong>Privacy Policy:</strong> Project X respects your privacy. We do not share personal information without your consent. Any data you submit is protected and used solely to improve your experience.
          </p>
          <p className="mt-2 max-w-xl mx-auto">
            <strong>About Project X:</strong> Project X is a community-driven blog and platform providing job updates, scholarship info, tenders, and professional development tools to empower Tanzanians. Our mission is to make opportunity accessible for everyone, regardless of their background or location.
          </p>
        </section>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
