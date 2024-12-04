import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrain } from "react-icons/fa";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, Space } from "antd";
import { AiOutlineSwap } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";


import { Input } from "antd";

function SearchHomePage() {
  const { RangePicker } = DatePicker;
  const [locations, setLocations] = useState([]); // Danh sách tỉnh/thành phố
  const [filteredLocationsFrom, setFilteredLocationsFrom] = useState([]); // Gợi ý từ đâu
  const [filteredLocationsTo, setFilteredLocationsTo] = useState([]); // Gợi ý đến đâu
  const [fromLocation, setFromLocation] = useState(""); // Giá trị từ đâu
  const [toLocation, setToLocation] = useState(""); // Giá trị đến đâu
  const [selectedDate, setSelectedDate] = useState(new Date()); // Ngày

  // Lấy danh sách tỉnh/thành phố từ API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/provinces");
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  // Hàm xử lý gợi ý khi nhập địa điểm
  const handleInputChange = (input, setLocation, setFilteredLocations) => {
    setLocation(input);
    if (input.length > 0) {
      const filtered = locations.filter((location) =>
        location.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  // Hàm xử lý khi chọn tỉnh từ danh sách gợi ý
  const handleSelectLocation = (name, setLocation, setFilteredLocations) => {
    setLocation(name); // Gán tên tỉnh được chọn vào input
    setFilteredLocations([]); // Ẩn danh sách gợi ý
  };

  return (
    <div>
      {/* Search Section */}
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex justify-between gap-5">
          {/* Ô tìm kiếm địa điểm từ đâu */}
          <div className="relative flex-col w-full">
            <Input
              value={fromLocation}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,
                  setFromLocation,
                  setFilteredLocationsFrom
                )
              }
              placeholder="Thành Phố Hà Nội"
              prefix={
                <FaLocationDot
                  className="text-lg text-red-500"
                />
              }
              className="w-full outline-none text-base py-3"
              type="text"
            />
            {/* Gợi ý danh sách tỉnh */}
            {filteredLocationsFrom.length > 0 && (
              <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-full max-h-48 overflow-y-auto z-10">
                {filteredLocationsFrom.map((location) => (
                  <li
                    key={location.code}
                    onClick={() =>
                      handleSelectLocation(
                        location.name,
                        setFromLocation,
                        setFilteredLocationsFrom
                      )
                    }
                    className="py-2 px-4 hover:bg-blue-100 cursor-pointer"
                  >
                    {location.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center text-2xl text-blue-500">
            <AiOutlineSwap />
          </div>

          {/* Ô tìm kiếm địa điểm đến đâu */}
          <div className="relative items-center w-full">
            <Input
              value={toLocation}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,
                  setToLocation,
                  setFilteredLocationsTo
                )
              }
              placeholder="Thành Phố Hồ Chí Minh"
              prefix={
                <FaLocationDot
                  className="text-lg text-red-500"
                />
              }
              className="w-full outline-none text-base py-3"
              type="text"
            />
            {/* Gợi ý danh sách tỉnh */}
            {filteredLocationsTo.length > 0 && (
              <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 w-full max-h-48 overflow-y-auto z-10">
                {filteredLocationsTo.map((location) => (
                  <li
                    key={location.code}
                    onClick={() =>
                      handleSelectLocation(
                        location.name,
                        setToLocation,
                        setFilteredLocationsTo
                      )
                    }
                    className="py-2 px-4 hover:bg-blue-100 cursor-pointer"
                  >
                    {location.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Ô tìm kiếm ngày */}
        <div className="flex items-center">
          <RangePicker
            className="py-3 text-2xl"
            renderExtraFooter={() => "extra footer"}
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
