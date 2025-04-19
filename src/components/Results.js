import { Result } from 'postcss';
import React from 'react';
import { BookText } from "lucide-react";
import { Briefcase } from 'lucide-react';
import { FileCheck } from "lucide-react";
import { GraduationCap } from "lucide-react";


function Results() {


  return (
    <>
    
    <div className="flex items-center gap-2 text-lg font-medium  ">
  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center  border border-blue-300">
  <GraduationCap className="w-4 h-4 text-blue-600" />
  </div>
  <p>Examinations Result's & Admissions</p>
</div>

<div className="w-full bg-blue-50 border border-blue-300 p-1 my-3">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between gap-3 mb-1 py-1">
      <p className="text-lg md:text-xl text-gray-700">
        <span className="text-blue-500 font-bold">
        Examinations Results via projectX
        </span>
        <p className="text-gray-600 mt-2">
     Access All Examinations Results and Admissions in Tanzania and Africa.
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
          NECTA Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />

        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          {/* Form Two */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-two" className="text-blue-600 hover:underline">
              Form Two NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Form Four */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              Form Four NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Form Six */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="https://matokeo.necta.go.tz/results/2024/csee/CSEE2024/CSEE2024.htm" className="text-blue-600 hover:underline">
              Form Six NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Standard Seven */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/psle" className="text-blue-600 hover:underline">
              Primary School Leaving Exam (PSLE) Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* QT Results */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/qt" className="text-blue-600 hover:underline">
              Qualifying Test (QT) Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          More NECTA Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />

        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          {/* Diploma in Secondary Education */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/diploma-secondary" className="text-blue-600 hover:underline">
              Diploma in Secondary Education Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Diploma in Primary Education */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/diploma-primary" className="text-blue-600 hover:underline">
              Diploma in Primary Education Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Teacher Certificate Results */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/certificate-teacher" className="text-blue-600 hover:underline">
              Teacher Certificate Exam Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Technical Certificate Results */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/technical-certificate" className="text-blue-600 hover:underline">
              Technical Certificate Results (GATCE, GATSCCE)
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* Special Education Results */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/special-education" className="text-blue-600 hover:underline">
              Special Education Exam Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          {/* NACTE Results */}
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/nacte/results" className="text-blue-600 hover:underline">
              NACTE Results (Colleges & Institutes)
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />
        </div>

        
      </div>
      
    </div>
    
  </div>






  
  <div className="flex justify-center gap-2">
  {/* EAT Africa Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        EAT Africa Results
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* EAT Africa Form One */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
            EAT Africa Form One Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* EAT Africa Form Two */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/eat-africa/form-two" className="text-blue-600 hover:underline">
            EAT Africa Form Two Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* EAT Africa Form Three */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/eat-africa/form-three" className="text-blue-600 hover:underline">
            EAT Africa Form Three Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* EAT Africa Form Four */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/eat-africa/form-four" className="text-blue-600 hover:underline">
            EAT Africa Form Four Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* EAT Africa Special Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/eat-africa/special-results" className="text-blue-600 hover:underline">
            EAT Africa Special Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />
      </div>
    </div>
  </div>

  {/* Southern Africa Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Southern Africa Results
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* Southern Africa Form One */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
            Southern Africa Form One Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Southern Africa Form Two */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/southern-africa/form-two" className="text-blue-600 hover:underline">
            Southern Africa Form Two Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Southern Africa Form Three */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/southern-africa/form-three" className="text-blue-600 hover:underline">
            Southern Africa Form Three Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Southern Africa Form Four */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/southern-africa/form-four" className="text-blue-600 hover:underline">
            Southern Africa Form Four Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Southern Africa Special Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/southern-africa/special-results" className="text-blue-600 hover:underline">
            Southern Africa Special Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />
  
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
        Zanzibar Results
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* Zanzibar Form One Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/zanzibar/form-one" className="text-blue-600 hover:underline">
            Zanzibar Form One Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Zanzibar Form Two Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/zanzibar/form-two" className="text-blue-600 hover:underline">
            Zanzibar Form Two Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Zanzibar Form Three Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/zanzibar/form-three" className="text-blue-600 hover:underline">
            Zanzibar Form Three Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Zanzibar Form Four Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/zanzibar/form-four" className="text-blue-600 hover:underline">
            Zanzibar Form Four Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Zanzibar Special Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/zanzibar/special-results" className="text-blue-600 hover:underline">
            Zanzibar Special Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />
      </div>
    </div>
  </div>

  {/* Other Results Card */}
  <div className="w-1/3 bg-white border border-blue-300 rounded-xl p-4 my-5 shadow-sm">
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
        Other Results
      </h2>
      <hr className="border-t border-blue-300 w-full mb-4" />

      <div className="space-y-2 text-gray-700 text-base leading-relaxed">
        {/* National Examinations */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/other/national-examinations" className="text-blue-600 hover:underline">
            National Examinations Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* International Examinations */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/other/international-examinations" className="text-blue-600 hover:underline">
            International Examinations Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* University Entrance Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/other/university-entrance" className="text-blue-600 hover:underline">
            University Entrance Examination Results
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Professional Exam Results */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/other/professional-exams" className="text-blue-600 hover:underline">
            Professional Exam Results (e.g., Medical, Law)
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />

        {/* Specialized Fields */}
        <div className="flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-600" />
          <a href="/other/specialized-fields" className="text-blue-600 hover:underline">
            Specialized Fields Exam Results (e.g., Engineering, Art)
          </a>
        </div>
        <hr className="border-t border-blue-200 w-full" />
      </div>
    </div>
  </div>
</div>

    </>
    
  );
}

export default Results;
