import image2 from "../assets/Group 22.png";
import image3 from "../assets/Group 23.png";

const Totc = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center mt-12 sm:mt-16 md:mt-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B]">
        What is <span className="text-[#00C9C9]">TOTC?</span>
      </h1>
      <p className="max-w-xl sm:max-w-2xl md:max-w-3xl mt-3 sm:mt-4 text-[#6B6B6B] text-base sm:text-lg px-2">
        TOTC is a platform that allows educators to create online classes whereby they can
        store the course materials online; manage assignments, quizzes and exams;
        monitor due dates; grade results and provide students with feedback all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 mt-8 sm:mt-10 w-full max-w-6xl px-0 sm:px-4">
        {/* Instructors Card */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mx-auto">
          <img src={image2} alt="For Instructors" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center">
            <h2 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">FOR INSTRUCTORS</h2>
            <button className="border border-white text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base">
              Start a class today
            </button>
          </div>
        </div>

        {/* Students Card */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg mx-auto">
          <img src={image3} alt="For Students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
            <h2 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">FOR STUDENTS</h2>
            <button className="bg-[#00C9C9] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-[#00b3b3] transition text-sm sm:text-base">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totc;