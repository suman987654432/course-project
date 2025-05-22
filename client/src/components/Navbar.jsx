import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
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
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#3EC3C1]  py-4 px-4 md:px-8 text-white ">

            <div className="flex items-center">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-11 w-auto cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={logogo} 
                />
            </div>

            <button
                className="md:hidden text-white focus:outline-none"
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

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-4 lg:gap-8 text-lg">
                <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Courses</li>
                <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Careers</li>
                <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Blog</li>
                <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">About Us</li>
            </ul>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex gap-4">
                <button
                    onClick={handleLogin}
                    className="bg-white text-[#3ccbc6] rounded-full px-6 py-1 font-semibold shadow hover:bg-gray-100 transition-colors duration-300"
                >
                    Login
                </button>
                <button
                    onClick={handleSignUp}
                    className="bg-[#65d3ce] text-white rounded-full px-6 py-1 font-semibold shadow hover:bg-[#5bc2bd] transition-colors duration-300"
                >
                    Sign Up
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#3ccbc6] md:hidden shadow-lg z-50 py-4 px-4 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col gap-4 mb-4">
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Home</li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Courses</li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Careers</li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">Blog</li>
                        <li className="hover:text-gray-200 transition-colors duration-300 cursor-pointer">About Us</li>
                    </ul>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={handleLogin}
                            className="bg-white text-[#3ccbc6] rounded-full px-6 py-2 font-semibold shadow hover:bg-gray-100 transition-colors duration-300"
                        >
                            Login
                        </button>
                        <button
                            onClick={handleSignUp}
                            className="bg-[#65d3ce] text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-[#5bc2bd] transition-colors duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
