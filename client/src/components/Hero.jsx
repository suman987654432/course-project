import React from "react";
import Assisted from "./Assisted";
import Congratulation from "./CongratulationPage";
import Userexp from "./Userexp";
import girl from "../assets/girl.png";
import video from "../assets/video.png";

const Hero = () => {
    return (
        <div className="relative w-full bg-[#3EC3C1] h-screen md:h-[92vh] overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-11 py-8 md:py-12 lg:py-16">
                <div className="text-white max-w-xl mb-8 md:mb-0 z-10 space-y-6 md:space-y-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        <span className="text-orange-400">Studying</span> Online is now <br className="hidden sm:block" /> much easier
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
                        TOTC is an interesting platform that will teach you <br className="hidden sm:block" /> in more an interactive way
                    </p>
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10">
                        <button className="bg-white text-[#3EC3C1] font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
                            Join for free
                        </button>
                        <button className="flex items-center gap-2 text-sm sm:text-base md:text-lg group">
                            <div className="bg-white p-1.5 sm:p-2 rounded-full shadow-md group-hover:shadow-lg transition-all">
                                <img src={video} alt="Video" className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                            <span className="text-black">Watch how it works</span>
                        </button>
                    </div>
                </div>

                <div className="relative w-[85%] sm:w-[70%] md:w-[40%]">
                    <img src={girl} alt="hero-girl" className="w-full z-6 relative " />
                    <div className="absolute top-[18%] left-[-15%] md:left-[-20%] z-20 hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer hidden sm:block">
                        <Assisted/>
                    </div>

                    <div className="absolute top-[30%] right-[-10%] sm:top-[10%] sm:right-auto sm:left-[-20%] md:top-[65%] md:left-[-25%] z-20 hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer">
                        <Userexp />
                    </div>

                    <div className="absolute top-[30%] md:top-[52%] right-[-5%] md:right-[-10%] z-20 hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer hidden sm:block">
                        <Congratulation />
                    </div>
                </div>
            </div>

            {/* Bottom Curved SVG */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ display: 'block', marginBottom: '-1px' }}
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,160 C360,320 1080,320 1440,160 L1440,320 L0,320 Z"
                ></path>
            </svg>

        </div>
    );
};

export default Hero;