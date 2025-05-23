import feature2 from "../../assets/assesment.png";

const Feature1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between  px-6 md:px-20 py-11 ">
      {/* Left Side: Image & Question Card */}
      <div className="relative w-full md:w-5/12 flex justify-center items-center">
        <img src={feature2} alt="Assessment Quiz" className="w-full max-w-md rounded-xl " />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-5/12 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B] leading-snug">
          Assessments,<span className="text-[#00C9C9]"> <br /> Quizzes</span>, Tests
        </h2>
        <p className="mt-4 text-[#6B6B6B] text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
};

export default Feature1;
