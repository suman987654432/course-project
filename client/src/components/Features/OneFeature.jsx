import feature2 from "../../assets/one.png";
import Button from "./Button";

const One = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-8 md:py-11 gap-6 md:gap-0">
      {/* Left Side: Image & Question Card */}
      <div className="relative w-full md:w-5/12 flex justify-center items-center mt-4 md:mt-0">
        <img src={feature2} alt="Assessment Quiz" className="w-full max-w-xs md:max-w-md rounded-xl" />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-5/12 text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B] leading-snug">
          One-on-One <span className="text-[#00C9C9]"> <br className="hidden sm:inline" /> Discussions</span>
        </h2>
        <p className="mt-4 text-[#6B6B6B] text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
        </p>
      </div>
    </div>
  );
};

export default One;
