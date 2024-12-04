import React from "react";
import Footer from "../components/Footer";
import BannerHome from "../assets/images/BannerHome.png";
import SearchHomePage from "../components/SearchHomePage";
import { FaTrainSubway } from "react-icons/fa6";

function HomePage() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="w-full">
            <div className="px-20 py-10 h-full flex flex-col">
              {/* Logo */}
              <a href="/" className=" flex items-center text-blue-500 font-extrabold text-2xl">
                Metro<span className="text-black mr-2">way</span>
                <FaTrainSubway />
              </a>

              {/* Nội dung chính */}
              <div className="flex flex-col gap-6 mt-32">
                <p className="text-xl  font-semibold py-2 rounded-3xl">
                  <span className="bg-blue-600 fle px-4 py-3 rounded-3xl text-white">
                    Hello Travellers 

                  </span>

                </p>
                <p className="text-5xl font-normal">
                  Made your booking experience easy!
                </p>
                <p className="text-base text-gray-400">
                  Train booking is a process of choosing and purchasing train
                  seats online. It is an easy process but we are here to make
                  it much better & simple.
                </p>


                <SearchHomePage/>

                
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="w-full">
            <img className="w-full h-full" src={BannerHome} alt="Banner Home" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
