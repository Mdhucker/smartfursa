import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-6 mt-8 text-xs">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

          {/* About Us Section */}
          <div>
            <h3 className="text-base font-semibold mb-2">About Us</h3>
            <ul className="space-y-1 list-disc pl-4">
              <li><a href="/post-job" className="hover:text-blue-500">Post A Job</a></li>
              <li><a href="/post-tender" className="hover:text-blue-500">Post a Tender</a></li>
              <li><a href="/ess-utumishi" className="hover:text-blue-500">ESS Utumishi</a></li>
              <li><a href="/necta-results" className="hover:text-blue-500">Matokeo ya NECTA</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
            </ul>

            <br />
            <br />
            <ul>
              <h3 className="text-base font-semibold mb-2">Connect With Us</h3>
              <ul className="space-y-1 list-disc pl-4">
                <li><a href="mailto:maulidiclassName@gmail.com" className="hover:text-blue-500">Email: project_x@gmail.com</a></li>
                <li><a href="tel:+255XXXXXXXXX" className="hover:text-blue-500">Phone: +255 686855352 </a></li>
              </ul>
            </ul>

            <br />
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXiyanH3C-cXQGBTnL3ZUzSSpb3eaCQR_Yw&s"
              alt="Logo"
              className="w-28 h-8 rounded-md mr-2 mx-auto md:mx-0"
            />
          </div>

          {/* Jobs by Categories */}
          <div>
            <h3 className="text-base font-semibold mb-2">Jobs by Categories</h3>
            <ul className="space-y-1 list-disc pl-4">
              <li><a href="/category/accounting" className="hover:text-blue-500">Accounting Jobs</a></li>
              <li><a href="/category/administration" className="hover:text-blue-500">Administration Jobs</a></li>
              <li><a href="/category/banking-finance" className="hover:text-blue-500">Banking and Finance Jobs</a></li>
              <li><a href="/category/education" className="hover:text-blue-500">Education and Teaching Jobs</a></li>
              <li><a href="/category/engineering" className="hover:text-blue-500">Engineering Jobs</a></li>
              <li><a href="/category/government" className="hover:text-blue-500">Government Jobs</a></li>
              <li><a href="/category/hospitality-tourism" className="hover:text-blue-500">Hospitality and Tourism Jobs</a></li>
              <li><a href="/category/hr" className="hover:text-blue-500">Human Resources Jobs</a></li>
              <li><a href="/category/it" className="hover:text-blue-500">IT Jobs</a></li>
              <li><a href="/category/logistics" className="hover:text-blue-500">Logistics & Transportation Jobs</a></li>
              <li><a href="/category/mining" className="hover:text-blue-500">Mining Jobs</a></li>
              <li><a href="/category/ngo-social" className="hover:text-blue-500">NGO and Social Work Jobs</a></li>
              <li><a href="/category/procurement" className="hover:text-blue-500">Procurement and Supply Jobs</a></li>
              <li><a href="/category/sales-marketing" className="hover:text-blue-500">Sales and Marketing Jobs</a></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-base font-semibold mb-2">Other Services</h3>
            <ul className="space-y-1 list-disc pl-4">
              <li><a href="/cv-writing" className="hover:text-blue-500">CV Writing Service</a></li>
              <li><a href="/za-bursaries" className="hover:text-blue-500">ZA-Bursaries</a></li>
              <li><a href="/scholarships" className="hover:text-blue-500">Scholarships</a></li>
              <li><a href="/career-guide" className="hover:text-blue-500">Career Guide</a></li>
              <li><a href="/necta-results" className="hover:text-blue-500">NECTA Results</a></li>
              <li><a href="/advertise" className="hover:text-blue-500">Advertise Here</a></li>
              <li><a href="/call-for-interview" className="hover:text-blue-500">Call For Interview</a></li>
              <li><a href="/ajira-portal" className="hover:text-blue-500">Ajira Portal: Latest Jobs</a></li>
              <li><a href="/clearing-jobs" className="hover:text-blue-500">Clearing and Forwarding Jobs</a></li>
            </ul>
          </div>

          {/* Jobs by Region */}
          <div>
            <h3 className="text-base font-semibold mb-2">Jobs</h3>
            <ul className="space-y-1 list-disc pl-4">
              <li><a href="/tanzania-jobs" className="hover:text-blue-500">Tanzania Jobs</a></li>
              <li><a href="/zambia-jobs" className="hover:text-blue-500">Jobs in Zambia</a></li>
              <li><a href="/kenya-jobs" className="hover:text-blue-500">Jobs in Kenya</a></li>
              <li><a href="/tenders" className="hover:text-blue-500">Tenders in Tanzania</a></li>
              <li><a href="/other-jobs" className="hover:text-blue-500">Other Countries Jobs</a></li>
              <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
              <li><a href="/driver-jobs" className="hover:text-blue-500">Driver Jobs</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div className="mt-6 text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-2 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaTwitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Legal and About Summary */}
          <section className="text-center text-gray-500 text-xs mt-12 pt-6 px-2">
            <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
              <hr className="border-t-2 border-blue-500 mb-4" />
            </div>
            <p className="mt-2 max-w-xl mx-auto">
              <strong>Privacy Policy:</strong> SmartFursa respects your privacy. We do not share personal information without your consent. Any data you submit is protected and used solely to improve your experience.
            </p>
            <p className="mt-2 max-w-xl mx-auto">
              <strong>About SmartFursa:</strong> SmartFursa is a community-driven blog and platform providing job updates, scholarship info, tenders, and professional development tools to empower Tanzanians. Our mission is to make opportunity accessible for everyone, regardless of their background or location.
            </p>
            <br />
            <p className="text-[10px] text-gray-400">&copy; 2025 Developed by SmartFursa: All Rights Reserved</p>
          </section>
        </div>
      </div>

      <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] bg-gray-300 mt-8">
        <img
          src="/images/1.png"
          alt="Ad Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
}

export default Footer;
