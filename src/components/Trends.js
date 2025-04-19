
import React from 'react';
// import { BookText } from "lucide-react";
import { Briefcase } from 'lucide-react';
import { Globe } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Eye } from "lucide-react";
// import { BookText } from "lucide-react";


function Trends() {


  return (
    <>
    
    <div className="flex items-center gap-2 text-base sm:text-lg font-medium flex-wrap sm:flex-nowrap">
  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300">
    <Briefcase className="w-5 h-5 text-blue-600" />
  </div>
  <p className="text-gray-800">Exploring The Trends using ProjectX</p>
</div>

<div className="w-full bg-[#FEF9C3] border border-blue-300 p-3 sm:p-4 my-4 rounded-md">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-lg sm:text-xl text-gray-700">
          <span className="text-blue-500 font-bold block">
          All The Trends Around The World
          </span>
        </p>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Browse opportunities across the entire continent.
        </p>
      </div>

      <button
        type="button"
        className="w-full sm:w-auto text-white bg-blue-500 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm sm:text-base px-6 py-3 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55"
      >
        Explore Now
        <svg
          className="rtl:rotate-180 w-4 h-3 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
</div>








<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
    {/* First Card */}
    <div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        HESLB
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <a href="/necta/form-two" className="text-blue-600 hover:underline">
          HESLB online Application
            </a>
          </div>


          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        TAMISEMI
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
            <Briefcase  className="w-4 h-4 text-blue-600" />
            <a href="/necta/diploma-secondary" className="text-blue-600 hover:underline">
            Tamisemi Selform Application
            </a>
          </div>
          <hr className="border-t border-blue-300 w-full mb-4" />

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Third Card */}
    <div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
        TAMISEMI
         </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-3 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-3">
          <Globe  className="w-5 h-5 text-blue-600" />
          <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
          Tamisemi Form five Selection
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />



          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Card */}
    <div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        ADMISSION
                </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-blue-600" />
          <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
          Tanzania All University Admission/online Application                        </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>



{/* Third Card */}
<div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
        University of Dodoma
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-3 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-blue-600" />
            <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
            About University of Dodoma            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

         
          
          

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Card */}
    <div className="bg-[#FEF9C3] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        University of Dar es Salaam
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-blue-600" />
            <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
            All about University of Dar es Salaam
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />


         
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    </>
    
  );
}

export default Trends;

