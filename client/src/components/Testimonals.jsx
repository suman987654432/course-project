import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import testimonal from "../assets/testimonal.png";

const testimonialData = [
    {
        name: "Gloria Rose",
        text: `"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."`,
        stars: 5,
        reviews: "12 reviews at Yelp",
        image: testimonal,
    },
];

const Testimonals = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonialData.length);
    };

    const { name, text, stars, reviews, image } = testimonialData[index];

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-8 md:py-16 bg-white mx-0 md:ml-7">

            <div className="w-full md:w-5/12 text-center md:text-left md:mr-8 mb-8 md:mb-0">
                <p className="text-sm tracking-wider text-[#6B6B6B] mb-3 uppercase border-l-4 border-[#00C9C9] pl-2">Testimonial</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E4B] mb-5">What They Say?</h2>
                <p className="text-[#6B6B6B] mb-2 leading-relaxed text-sm sm:text-base">
                    TOTC has got more than 100k positive ratings from our users around the world.
                </p>
                <p className="text-[#6B6B6B] mb-2 leading-relaxed text-sm sm:text-base">
                    Some of the students and teachers were greatly helped by the Skilline.
                </p>
                <p className="text-[#6B6B6B] mb-6 leading-relaxed text-sm sm:text-base">
                    Are you too? Please give your assessment
                </p>
                <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-[#00C9C9] text-[#00C9C9] rounded-full font-medium hover:bg-[#00C9C9] hover:text-white transition-all duration-300 shadow-sm text-sm sm:text-base">
                    Write your assessment
                </button>
            </div>

            <div className="relative md:w-7/12 flex flex-col items-center mt-12 md:mt-0">
                <div className="relative w-full flex justify-center">
                    <img
                        src={image}
                        alt="Testimonial"
                        className="w-4/5 sm:w-full max-w-[250px] sm:max-w-xs md:max-w-sm rounded-xl object-cover"
                    />

                    {/* <button
                        onClick={handleNext}
                        className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-[#00C9C9]"
                    >
                        <FaArrowRight />
                    </button> */}
                </div>

                <div className="bg-white shadow-lg rounded-xl p-4 md:absolute md:bottom-0 md:right-0 md:w-3/5 md:translate-y-1/3 w-full max-w-sm z-10 relative md:mt-0 border-l-5 border-l-[#F67766] border-l-[10px] md:mr-[100px] mx-auto mt-[-20px]">
                    <p className="text-[#6B6B6B] text-base leading-relaxed">{text}</p>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-[#1E1E4B] text-sm md:text-base">{name}</p>
                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                            {[...Array(stars)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            <span className="ml-2 text-xs text-[#6B6B6B]">{reviews}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonals;