import { useState } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import image from "../assets/login.png";
import image1 from "../assets/signup.png";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl overflow-hidden h-[650px]  rounded-lg">

        <div className="hidden md:block w-3/5 relative h-full border-r ">
          <img
            src={isRegister ? image1 : image}
            alt={isRegister ? "Register" : "Login"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-4xl font-bold text-white mb-3">Lorem Ipsum is simply</h2>
          </div>
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center md:pl-20">
          <h2 className="text-xl text-center font-semibold mb-4">Welcome to lorem..!</h2>

          {/* Toggle Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-teal-100 rounded-full p-1 flex w-full max-w-xs">
              <button
                onClick={() => setIsRegister(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium w-1/2 transition-all ${!isRegister ? 'bg-teal-500 text-white' : 'text-gray-700'
                  }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsRegister(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium w-1/2 transition-all ${isRegister ? 'bg-teal-500 text-white' : 'text-gray-700'
                  }`}
              >
                Register
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Form Fields */}
          <form className="space-y-5">

            {isRegister && (
              <div>
                <label className="block text-gray-600 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full border border-teal-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-600 text-sm mb-2">User name</label>
              <input
                type="text"
                placeholder="Enter your User name"
                className="w-full border border-teal-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full border border-teal-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-800"
                >
                  <AiFillEyeInvisible />
                </button>
              </div>
            </div>

            {isRegister && (
              <div>


              </div>
            )}

            {!isRegister && (
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-teal-500 rounded" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-teal-500 hover:underline">Forgot Password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-full transition-colors"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;