import feature2 from "../assets/feature2.png";

const Feature1 = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-4 px-6 md:px-16 py-10 md:py-20 bg-white">
      {/* Left Side: Text */}
      <div className="w-full md:w-5/12 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B]">
          <span className="text-[#00C9C9]">Tools</span> For Teachers <br />
          And Learners
        </h2>
        <p className="mt-4 text-[#6B6B6B] text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Class has a dynamic set of teaching tools built to be deployed and used during class.
          Teachers can handout assignments in real-time for students to complete and submit.
        </p>
      </div>

      <div className="relative w-full md:w-5/12 flex justify-center items-center mt-10 md:mt-0">
        <img src={feature2} alt="Student" className="relative z-10 w-full max-w-sm object-contain" />
      </div>
    </div>
  );
};

export default Feature1;
