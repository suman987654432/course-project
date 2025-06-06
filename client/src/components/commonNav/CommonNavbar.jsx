import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

const CommonNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/login");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
    const logogo = () => {
  
        if (window.location.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } 
       
        else {
            navigate("/");
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 100);
        }
    };

    return (
        <nav className="fixed top-0 bg-[#3EC3C1] left-0 right-0 z-50 flex items-center justify-between  py-3 px-4 md:px-8 text-white w-full">

            <div className="flex items-center">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-9 sm:h-11 w-auto cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={logogo} 
                />
            </div>

            <button
                className="md:hidden text-black focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

        
            <ul className="hidden md:flex gap-4 lg:gap-8 text-lg text-white">
                <li className=" cursor-pointer">
                    <Link to="/" className="block">Home</Link>
                </li>
                <li className=" cursor-pointer">
                    <Link to="/courses" className="block">Courses</Link>
                </li>
                <li className=" cursor-pointer">
                    <Link to="" className="block">Careers</Link>
                </li>
                <li className=" cursor-pointer">
                    <Link to="/blogspage" className="block">Blog</Link>
                </li>
                <li className=" cursor-pointer">
                    <Link to="/about" className="block">About Us</Link>
                </li>
            </ul>

            <div className="hidden md:flex gap-4 items-center">
                <Link 
                    to="/login"
                    className="bg-white text-[#3ccbc6] rounded-full px-6 py-1 font-semibold shadow hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                    Login
                </Link>
                <Link
                    to="/login"
                    className="bg-[#65d3ce] text-white rounded-full px-6 py-1 font-semibold shadow hover:bg-[#5bc2bd] transition-colors duration-300 flex items-center justify-center gap-1"
                >
                    Sign Up 
                </Link>
                <FaUserCircle className=" text-3xl ml-2 cursor-pointer " />
            </div>

       
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#3ccbc6] md:hidden shadow-lg z-50 py-4 px-4 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col gap-4 mb-4">
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="/" className="block">Home</Link>
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="/courses" className="block">Courses</Link>
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="" className="block">Careers</Link>
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="/blogspage" className="block">Blog</Link>
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="/about" className="block">About Us</Link>
                        </li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                            <Link to="/" className="flex items-center gap-2">
                                <FaUserCircle /> Profile
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-2">
                        <Link 
                            to="/login"
                            className="bg-white text-[#3ccbc6] rounded-full px-6 py-2 font-semibold shadow hover:bg-gray-100 transition-colors duration-300 text-center"
                        >
                            Login
                        </Link>
                        <Link
                            to="/login"
                            className="bg-[#65d3ce] text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-[#5bc2bd] transition-colors duration-300 flex items-center justify-center gap-1"
                        >
                            Sign Up 
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CommonNavbar;
