import classs from "../assets/classroom.png";
import video from "../assets/video.png";
const Classroom = () => {
    return (
        <div className="flex flex-col lg:flex-row text-white p-6 md:p-10 rounded-3xl overflow-hidden   mx-auto max-w-7xl my-12">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-6 lg:pr-10">
                <div className="relative">
                    <div className="w-10 h-10 bg-green-400 rounded-full absolute -top-2 -left-4 animate-pulse"></div>
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                        <span className="text-[#3E3E55]">Everything you can do in a physical classroom,</span>{" "}
                        <span className="text-[#00C9C9] font-semibold">you can do with TOTC</span>
                    </h2>
                </div>
                <p className="text-[#A1A1B0] text-base sm:text-lg px-2 ">
                    TOTC's school management software helps traditional and online schools manage scheduling,
                    attendance, payments and virtual classrooms all in one secure cloud-based system.
                </p>
                <a
                    href="#"
                    className="flex items-center gap-2 w-fit px-5 py-2.5  rounded-lg text-[#00C9C9] font-medium "
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 relative mt-8 lg:mt-0 transition-all duration-300 flex justify-center items-center">

                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00B5E2] rounded-tl-3xl -translate-x-4 -translate-y-4 z-0"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00E676] rounded-br-3xl translate-x-4 translate-y-4 z-0"></div>


                <div className="relative bg-white p-2 sm:p-3 rounded-3xl z-10">
                    <img
                        src={classs}
                        alt="Classroom"
                        className="rounded-2xl object-cover w-full h-full"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-1.5 sm:p-2 rounded-full transition-all cursor-pointer">
                            <img src={video} alt="Video" className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Classroom;