import React, { useState } from "react";
import { FaTrain, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchHomePage() {
  // Đặt giá trị mặc định là ngày hôm nay
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      {/* Search Section */}
      <div className="flex flex-col gap-5 mt-10">
        {/* Ô tìm kiếm địa điểm */}
        <div className="flex justify-between gap-10">
          <div className="flex items-center w-full border-b-2 py-3 px-4">
            <FaMapMarkerAlt className="mr-3 text-blue-500 text-xl" />
            <input
              placeholder="NDLS, New Delhi Railway Station"
              className="w-full outline-none text-base"
              type="text"
            />
          </div>

          <div className="flex items-center w-full border-b-2 py-3 px-4">
            <FaMapMarkerAlt className="mr-3 text-blue-500 text-xl" />
            <input
              placeholder="LJN, Lucknow Junction"
              className="w-full outline-none text-base"
              type="text"
            />
          </div>
        </div>

        {/* Ô tìm kiếm ngày */}
        <div className="flex items-center w-1/2 border-b-2 py-3 px-4">
          <FaCalendarAlt className="mr-3 text-blue-500 text-xl" />
          <DatePicker
            selected={selectedDate} // Giá trị mặc định là ngày hôm nay
            onChange={(date) => setSelectedDate(date)} // Hàm xử lý khi chọn ngày
            dateFormat="EEEE, dd MMM yyyy" // Định dạng ngày hiển thị
            className="w-full outline-none text-base"
          />
        </div>

        {/* Nút tìm kiếm */}
        <button className="bg-blue-600 mt-3 text-white py-3 rounded-xl flex items-center justify-center gap-3">
          <FaTrain />
          Search for trains
        </button>
      </div>
    </div>
  );
}

export default SearchHomePage;
