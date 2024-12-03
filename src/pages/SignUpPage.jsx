import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function SignUpPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-900 via-blue-500 to-purple-600 text-gray-800 lg:h-screen p-6">
        <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
          <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
            <div className="max-w-md space-y-12 mx-auto">
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Create Your Account
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Welcome to our registration page! Get started by creating your
                  account.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Simple & Secure Registration
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Our registration process is designed to be straightforward and
                  secure. We prioritize your privacy and data security.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Terms and Conditions Agreement
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Require users to accept the terms and conditions of your service
                  during registration.
                </p>
              </div>
            </div>
          </div>

          <form className="sm:p-8 p-4 w-full">
            <div className="mb-12">
              <h3 className="text-black text-3xl font-extrabold max-md:text-center">
                Register
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaUser className="text-black mr-3 text-lg" />
                <input
                  name="name"
                  type="text"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter name"
                />
              </div>

              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaUser className="text-black mr-3 text-lg" />
                <input
                  name="lname"
                  type="text"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter last name"
                />
              </div>

              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaEnvelope className="text-black mr-3 text-lg" />
                <input
                  name="email"
                  type="text"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter email"
                />
              </div>

              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaPhone className="text-black mr-3 text-lg" />
                <input
                  name="number"
                  type="text"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaLock className="text-black mr-3 text-lg" />
                <input
                  name="password"
                  type="password"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter password"
                />
              </div>

              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md">
                <FaLock className="text-black mr-3 text-lg" />
                <input
                  name="cpassword"
                  type="password"
                  className="w-full bg-gray-100 outline-none text-gray-800 text-sm"
                  placeholder="Enter confirm password"
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-black hover:bg-blue-700 focus:outline-none transition-all"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
