import feature2 from "../../assets/Management.png";

const Management = () => {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-4 px-6 md:px-20 py-11 ">
            {/* Left Side: Text */}
            <div className="w-full md:w-5/12 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B]">
                    <span className="text-[#00C9C9]">Class Management <br /></span> Tools for Educators

                </h2>
                <p className="mt-4 text-[#6B6B6B] text-sm sm:text-base max-w-md mx-auto md:mx-0">
                    Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.

                </p>
            </div>

            <div className="relative w-full md:w-5/12 flex justify-center items-center mt-10 md:mt-0">
                <img
                    src={feature2}
                    alt="Student"
                    className="relative z-10 w-full max-w-lg object-contain"
                />
            </div>

        </div>
    );
};

export default Management;
