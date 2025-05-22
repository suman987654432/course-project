import feature1 from '../assets/feature1.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from "../assets/users 2.png";
import Feature1 from './Feature1';

const Features = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 text-center relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E4B]">
                Our <span className="text-[#00C9C9]">Features</span>
            </h1>
            <p className="max-w-xl sm:max-w-2xl md:max-w-3xl mt-3 sm:mt-4 text-[#6B6B6B] text-base sm:text-lg px-2">
                This very extraordinary feature, can make learning activities more efficient
            </p>

           <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mt-10 w-full max-w-6xl relative">

                <div className="relative w-full md:w-[90%] lg:w-[55%] mx-auto">
                    {/* Decorative circles - made responsive */}
                    <div className="absolute -top-5 sm:-top-8 left-3 sm:left-7 w-16 h-16 sm:w-24 sm:h-24 bg-[#00E091] rounded-full opacity-70 z-0" />
                    <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 bg-[#3C4BD8] rounded-full opacity-70 z-0" />

                    {/* Responsive image container */}
                    <div className="overflow-hidden rounded-xl relative z-10 shadow-lg">
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={feature1}
                                alt="Classroom UI"
                                className="w-full h-full object-cover rounded-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start gap-3 max-w-lg">
                    <h2 className="text-xl sm:text-xl md:text-3xl font-semibold text-left text-[#1E1E4B]">
                        A <span className="text-[#00C9C9]">user interface</span> designed <br className="hidden sm:block" />
                        for the classroom
                    </h2>

                    {/* Feature 1 */}
                    <div className="flex items-start gap-5 group hover:bg-white/80 p-3 rounded-xl transition-all duration-300 hover:shadow-md w-full">
                        <div className="p-3 rounded-xl flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
                            <img src={icon1} alt="Teacher Icon" className="w-9 h-9 md:w-8 md:h-8 object-contain" />
                        </div>
                        <p className="text-[#6B6B6B] text-left text-sm sm:text-base leading-relaxed">
                            Teachers don't get lost in the grid view and have a dedicated Podium space.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-5 group hover:bg-white/80 p-3 rounded-xl transition-all duration-300 hover:shadow-md w-full">
                        <div className="p-3 rounded-xl flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
                            <img src={icon2} alt="Student Icon" className="w-9 h-9 md:w-8 md:h-8 object-contain" />
                        </div>
                        <p className="text-[#6B6B6B] text-left text-sm sm:text-base leading-relaxed">
                            TA's and presenters can be moved to the front of the class for better visibility.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-5 group hover:bg-white/80 p-3 rounded-xl transition-all duration-300 hover:shadow-md w-full">
                        <div className="p-3 rounded-xl flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
                            <img src={icon3} alt="Users Icon" className="w-9 h-9 md:w-8 md:h-8 object-contain" />
                        </div>
                        <p className="text-[#6B6B6B] text-left text-sm sm:text-base leading-relaxed">
                            Teachers can easily see all students and class data at one time for better management.
                        </p>
                    </div>
                </div>
            </div>
            <Feature1/>
        </div>
        
    );
};

export default Features;
