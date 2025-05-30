import literature from "../../assets/literature.png";
import literaturebg from "../../assets/literaturebg.png";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

const StatItem = ({ icon: Icon, text }) => (
  <div className="flex items-center mr-3 sm:mr-6 mb-2 md:mb-0">
    <Icon className="text-gray-500" size={16} />
    <span className="text-xs ml-1 text-gray-500">{text}</span>
  </div>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#49BBBD] hover:bg-[#3da7a9] flex items-center justify-center text-white transition-colors duration-300"
  >
    <Icon size={12} className="sm:text-sm" />
  </a>
);

const HeroSection = () => {
  return (
   <div
  className="max-w-8xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
  style={{
    backgroundImage: `url(${literaturebg})`,
    backgroundSize: "90% 70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderWidth: "10px",
    borderStyle: "solid",
    borderColor: "#ffffff",
    minHeight: "300px",
  }}
>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row relative mt-0">
        <div className="hidden md:block relative mr-4">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white mr-10">
            <img
              src={literature}
              alt="John Anderson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm flex-1 overflow-hidden">
          <div className="flex justify-center md:hidden pt-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white">
              <img
                src={literature}
                alt="John Anderson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full p-4 sm:p-6 md:p-8 flex flex-col justify-center relative">
            <button className="bg-[#49BBBD] hover:bg-[#3da7a9] text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md absolute top-4 sm:top-6 right-4 sm:right-6 hidden md:block">
              Enroll Now
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center md:text-left">John Anderson</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center md:text-left">
              Assistant Professor at McMaster University
            </p>

            <p className="text-xs sm:text-sm text-gray-600 mt-4 max-w-2xl text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start mt-4">
              <StatItem icon={AiFillStar} text="4.9 Instructor Rating" />
              <StatItem icon={BsPeople} text="1,592 Students" />
              <StatItem icon={IoBookOutline} text="5 Courses" />

              <div className="flex mt-4 md:mt-0 md:ml-auto gap-2 w-full md:w-auto justify-center md:justify-end">
                <SocialIcon href="#" icon={FaTwitter} />
                <SocialIcon href="#" icon={FaYoutube} />
                <SocialIcon href="#" icon={FaInstagram} />
              </div>
            </div>

            <button className="bg-[#49BBBD] hover:bg-[#3da7a9] text-white font-medium text-sm sm:text-base py-2 px-6 rounded-md mt-4 md:hidden w-full">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;