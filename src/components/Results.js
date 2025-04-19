// import { Result } from 'postcss';
import React from 'react';
import { BookText } from "lucide-react";
// import { Briefcase } from 'lucide-react';
// import { FileCheck } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Eye } from "lucide-react";

function Results() {


  return (
    <>
<div className="flex items-center gap-2 text-base sm:text-lg font-medium flex-wrap sm:flex-nowrap">
  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300">
    <GraduationCap className="w-4 h-4 text-blue-600" />
  </div>
  <p className="text-gray-800">Examinations Result's & Admissions</p>
</div>

<div className="w-full bg-[#DCFCE7] border border-blue-300 p-3 sm:p-4 my-4 rounded-md">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-lg sm:text-xl text-gray-700">
          <span className="text-blue-500 font-bold block">
            Examinations Results via ProjectX
          </span>
        </p>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Access All Examinations Results and Admissions in Tanzania and Africa.
        </p>
      </div>

      <button
        type="button"
        className="w-full sm:w-auto text-white bg-[#166534] hover:bg-[#14532d] focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm sm:text-base px-6 py-3 text-center inline-flex items-center justify-center"
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* First Card */}
    <div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          NECTA Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-two" className="text-blue-600 hover:underline">
              Form Two NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/form-four" className="text-blue-600 hover:underline">
              Form Four NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="https://matokeo.necta.go.tz/results/2024/csee/CSEE2024/CSEE2024.htm" className="text-blue-600 hover:underline">
              Form Six NECTA Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/psle" className="text-blue-600 hover:underline">
              Primary School Leaving Exam (PSLE) Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/qt" className="text-blue-600 hover:underline">
              Qualifying Test (QT) Results
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
    <div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          More NECTA Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/diploma-secondary" className="text-blue-600 hover:underline">
              Diploma in Secondary Education Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/diploma-primary" className="text-blue-600 hover:underline">
              Diploma in Primary Education Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/certificate-teacher" className="text-blue-600 hover:underline">
              Teacher Certificate Exam Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/technical-certificate" className="text-blue-600 hover:underline">
              Technical Certificate Results (GATCE, GATSCCE)
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/necta/special-education" className="text-blue-600 hover:underline">
              Special Education Exam Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/nacte/results" className="text-blue-600 hover:underline">
              NACTE Results (Colleges & Institutes)
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

    {/* Third Card */}
    <div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
          EAT Africa Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-3 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-3">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
              EAT Africa Form One Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-two" className="text-blue-600 hover:underline">
              EAT Africa Form Two Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-three" className="text-blue-600 hover:underline">
              EAT Africa Form Three Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-four" className="text-blue-600 hover:underline">
              EAT Africa Form Four Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/special-results" className="text-blue-600 hover:underline">
              EAT Africa Special Results
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
    <div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          Southern Africa Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
              Southern Africa Form One Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-two" className="text-blue-600 hover:underline">
              Southern Africa Form Two Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-three" className="text-blue-600 hover:underline">
              Southern Africa Form Three Results
            </a>
          </div>
        </div>
      </div>
    </div>



{/* Third Card */}
<div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
          EAT Africa Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-3 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-3">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-one" className="text-blue-600 hover:underline">
              EAT Africa Form One Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-two" className="text-blue-600 hover:underline">
              EAT Africa Form Two Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-three" className="text-blue-600 hover:underline">
              EAT Africa Form Three Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/form-four" className="text-blue-600 hover:underline">
              EAT Africa Form Four Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/eat-africa/special-results" className="text-blue-600 hover:underline">
              EAT Africa Special Results
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
    <div className="bg-[#DCFCE7] border border-blue-300 rounded-xl p-6 my-5">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
          Southern Africa Results
        </h2>
        <hr className="border-t border-blue-300 w-full mb-4" />
        <div className="space-y-2 text-gray-700 text-base leading-relaxed">
          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-one" className="text-blue-600 hover:underline">
              Southern Africa Form One Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-two" className="text-blue-600 hover:underline">
              Southern Africa Form Two Results
            </a>
          </div>
          <hr className="border-t border-blue-200 w-full" />

          <div className="flex items-center gap-2">
            <BookText className="w-4 h-4 text-blue-600" />
            <a href="/southern-africa/form-three" className="text-blue-600 hover:underline">
              Southern Africa Form Three Results
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

export default Results;
