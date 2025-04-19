import { Result } from 'postcss';
import React from 'react';
import { BookText } from "lucide-react";
import { Briefcase } from 'lucide-react';
import { Globe } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Eye } from "lucide-react";


function Jobs() {


  return (
    <>
    
    <div className="flex items-center gap-2 text-lg font-medium  ">
  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center  border border-blue-300">
    <Briefcase className="w-5 h-5 text-blue-600" />
  </div>
  <p>Exploring Job Opportunity using ProjectX</p>
</div>

<div className="w-full bg-blue-50 border border-blue-300 p-1 my-3">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between gap-3 mb-1 py-1">
      <p className="text-lg md:text-xl text-gray-700">
        <span className="text-blue-500 font-bold">
          Jobs in All African Countries
        </span>
        <p className="text-gray-600 mt-2">
      Browse opportunities across  the entire continent.
    </p>
      </p>

      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-[#1da1f2]/90 focus:ring-4 gap-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55"
      >
        Explore Now
        <svg
          className="rtl:rotate-180 w-3.5 h-2.5 ms-2"
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
  <div className="flex justify-center gap-4">
    {/* First Card */}
    <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          Tanzania
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />

        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          {/* Form Two */}

            <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-two" className="text-blue-600 hover:underline">
                Jobs in Tanzania
            </a>
            </div>

          <hr className="border-t border-blue-200 w-full" />

          {/* Form Four */}
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
    <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          Kenya 
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />

        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          {/* Diploma in Secondary Education */}
          <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-blue-600" />
          <a href="/necta/diploma-secondary" className="text-blue-600 hover:underline">
              Jobs in Kenya
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Diploma in Primary Education */}
          <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-600" />

            <a href="/necta/diploma-primary" className="text-blue-600 hover:underline">
              View More
            </a>
          </div>
        

          
          

        </div>

        
      </div>
      
    </div>
    
  </div>






  
  <div className="flex justify-center gap-2">
  {/* EAT Africa Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Job Portal
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* EAT Africa Form One */}
                    <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
                For All Jobs Click Here
            </a>
            </div>
        <hr className="border-t border-blue-200 w-full" />

       
       

       
        {/* EAT Africa Special Results */}
        <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-600" />

          <a href="/eat-africa/special-results" className="text-blue-600 hover:underline">
            View More
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Southern Africa Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Interviews
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* Southern Africa Form One */}
        <div className="flex items-center gap-2">
        <UserCheck className="w-4 h-4 text-blue-600" />
        <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
            Call for interviews
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Southern Africa Form Two */}
        <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-600" />
        <a href="/southern-africa/form-two" className="text-blue-600 hover:underline">
            View More
          </a>
        </div>
       
      
  
      </div>
      
    </div>
  </div>  
</div>













</div>





<div className="flex justify-center gap-2">
  {/* Zanzibar Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Placements
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* Zanzibar Form One Results */}
        <div className="flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-blue-600" />
        <a href="/zanzibar/form-one" className="text-blue-600 hover:underline">
            Call for Work (Placements)
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Zanzibar Form Two Results */}
        <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-600" />

          <a href="/zanzibar/form-two" className="text-blue-600 hover:underline">
            View More
          </a>
        </div>
        
      </div>
    </div>
  </div>

  {/* Other Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Government
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* National Examinations */}
        <div className="flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-blue-600" />
        <a href="/other/national-examinations" className="text-blue-600 hover:underline">
            Halmashauri Jobs
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* International Examinations */}
        <div className="flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-blue-600" />
        <a href="/other/international-examinations" className="text-blue-600 hover:underline">
            Ajira Portal Latest Jobs
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* University Entrance Results */}
        <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-600" />
        <a href="/other/university-entrance" className="text-blue-600 hover:underline">
            View More
          </a>
        </div>
      
      </div>
    </div>
  </div>
</div>

    </>
    
  );
}

export default Jobs;

