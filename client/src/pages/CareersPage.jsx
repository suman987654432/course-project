import CommonNavbar from '../components/commonNav/CommonNavbar'

const CareersPage = () => {
  return (
   <>
   <CommonNavbar/>

   <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 mt-16">
     <div className="container mx-auto px-4">
       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
         <div className="md:flex">
           <div className="md:shrink-0 bg-blue-600 md:w-24 flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
               <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
             </svg>
           </div>
           <div className="p-8">
             <h1 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h1>
             <p className="text-gray-600">
               We're looking for talented individuals to help us build the future of education.
               Join our diverse team and make an impact on how people learn worldwide.
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="py-8 sm:py-12 md:py-16 container mx-auto px-3 sm:px-4">
     <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">Open Positions</h2>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
       {[
         {
           title: "Software Developer",
           type: "Full-time | Remote",
           description: "Build and maintain web applications with React, Node.js and modern frameworks.",
           color: "blue"
         },
         {
           title: "Content Writer",
           type: "Full-time | Remote",
           description: "Create engaging educational content for our platform's courses and marketing materials.",
           color: "green"
         },
         {
           title: "UI/UX Designer",
           type: "Full-time | Remote",
           description: "Design beautiful, intuitive interfaces for our web and mobile applications.",
           color: "purple"
         }
       ].map((position, index) => (
         <div key={index} className="rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md sm:shadow-md sm:hover:shadow-lg transition-shadow bg-white border border-gray-100">
           <div className={`h-1 sm:h-2 bg-${position.color}-500`}></div>
           <div className="p-3 sm:p-4 md:p-6">
             <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between mb-2 sm:mb-4">
               <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 w-full sm:w-auto mb-1 sm:mb-0">{position.title}</h3>
               <span className={`px-2 sm:px-3 py-0.5 sm:py-1 bg-${position.color}-50 text-${position.color}-700 text-xs rounded-full mt-1 sm:mt-0 whitespace-nowrap`}>New</span>
             </div>
             <p className="text-gray-500 text-sm mb-4">{position.type}</p>
             <p className="text-gray-600 mb-6">{position.description}</p>
             <div className="flex justify-between items-center">
               <span className="text-sm text-gray-500">Posted 2 days ago</span>
               <button className={`px-4 py-2 bg-${position.color}-600 text-white rounded-lg hover:bg-${position.color}-700 transition-colors`}>
                 Apply Now
               </button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>

   <div className="bg-gray-50 py-8 sm:py-12 md:py-16">
     <div className="container mx-auto px-3 sm:px-4">
       <div className="max-w-xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden">
         <div className="w-full">
           <div className="p-4 sm:p-6 md:p-8 w-full">
             <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-6">Apply Now</h2>
             <div className="border border-gray-200 rounded-md sm:rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 bg-gray-50">
               <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-4">
                 <div className="bg-blue-100 rounded-full p-2 mr-0 sm:mr-4 mb-3 sm:mb-0 flex items-center justify-center w-10 h-10">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-medium text-base sm:text-lg">Email Us</h3>
                   <p className="text-gray-600 text-sm sm:text-base break-words">Send your resume to <a href="mailto:careers@example.com" className="text-blue-600 font-medium">careers@example.com</a></p>
                 </div>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center">
                 <div className="bg-green-100 rounded-full p-2 mr-0 sm:mr-4 mb-3 sm:mb-0 flex items-center justify-center w-10 h-10">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="font-medium text-base sm:text-lg">Call Us</h3>
                   <p className="text-gray-600 text-sm sm:text-base">For questions: +1 (123) 456-7890</p>
                 </div>
               </div>
             </div>
             <div className="flex justify-center">
               <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                 Contact Us
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default CareersPage