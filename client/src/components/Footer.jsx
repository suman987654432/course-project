import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="bg-[#232336] text-white py-14 flex flex-col items-center w-full">

            <div className="flex items-center gap-4 mb-12">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-9 sm:h-11 w-auto cursor-pointer hover:opacity-90 transition-opacity"

                        />
                    </div>
                </div>
                <div className="border-l border-gray-400 h-8 mx-2"></div>
                <div className="text-left">
                    <p className="font-semibold">Virtual Class</p>
                    <p className="text-sm">for Zoom</p>
                </div>
            </div>


            <div className="mb-16 flex flex-col items-center">
                <h2 className="text-xl font-medium mb-6">Subscribe to get our Newsletter</h2>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md px-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-5 py-3 rounded-full bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none w-full"
                    />
                    <button className="bg-[#00C9C9] hover:bg-[#00b5b5] text-white px-7 py-3 rounded-full font-medium w-full sm:w-auto mt-3 sm:mt-0">
                        Subscribe
                    </button>
                </div>
            </div>


            <div className="flex flex-wrap justify-center gap-5 mb-4">
                <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                <span className="text-gray-500">|</span>
                <a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a>
            </div>

            <p className="text-gray-500 text-sm">© 2021 Class Technologies Inc.</p>
        </div>
    );
};

export default Footer;