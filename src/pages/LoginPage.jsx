import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import các icon cần dùng

function LoginPage() {
  return (
    <div className="font-[sans-serif] bg-gradient-to-r from-blue-900 via-blue-500 to-purple-600 text-gray-800">
      <div className="min-h-screen flex flex-col items-center justify-center lg:p-6 p-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <a href="javascript:void(0)">
              <img
                src="https://readymadeui.com/readymadeui-white.svg"
                alt="logo"
                className="w-52 mb-12 inline-block"
              />
            </a>
            <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
              Seamless Login for Exclusive Access
            </h2>
            <p className="text-sm mt-6 text-white">
              Immerse yourself in a hassle-free login journey with our intuitively
              designed login form. Effortlessly access your account.
            </p>
            <p className="text-sm mt-6 text-white">
              Don't have an account
              <a href="/signup" className="text-white font-semibold underline ml-1">
                Register here
              </a>
            </p>
          </div>

          <form className="bg-white rounded-2xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
            <h3 className="text-3xl font-extrabold mb-12">Sign in</h3>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaEnvelope size={20} />
              </span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-gray-100 focus:bg-transparent w-full text-base px-10 py-3.5 rounded-md outline-gray-800"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaLock size={20} />
              </span>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="bg-gray-100 focus:bg-transparent w-full text-base px-10 py-3.5 rounded-md outline-gray-800"
                placeholder="Password"
              />
            </div>

            <div className="text-sm text-right">
              <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline">
                Forgot your password?
              </a>
            </div>

            <div>
              <button
                type="button"
                className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
              >
                Log in
              </button>
            </div>

            <p className="my-6 text-sm text-gray-400 text-center">or continue with</p>

            <div className="space-x-6 flex justify-center">
              {/* Social buttons */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
