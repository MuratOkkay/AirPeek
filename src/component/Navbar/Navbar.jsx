import Logo from "../../assets/icon/A modern, clean logo.png";

import { Link, useNavigate } from "react-router";
import { CiSearch } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weather/${city}`);
      setCity("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative top-0 right-0 w-full z-[99] py-4 sm:py-4 poppins-thin">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-1">
          <div className="flex justify-start items-center font-bold text-xl sm:text-3xl">
            <img className="w-30" src={Logo} alt="Logo" />
            <Link className="text-[#001F3F] cursor-pointer" to="/">
              AirPeek
            </Link>
          </div>
          <div className="relative w-[300px] lg:w-[600px]">
            <input
              type="text"
              placeholder="Search city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyPress}
              className={
                darkMode
                  ? "border-2 border-[#001F3F] bg-black/10 w-full rounded-3xl pl-5 pr-12 py-2 shadow-md shadow-[#001F3F] text-white focus:outline-none focus:border-[#EAD8B1] focus:ring-0"
                  : "border-2 border-[#EAD8B1] bg-black/10 w-full rounded-3xl pl-5 pr-12 py-2 shadow-md shadow-[#EAD8B1] text-white focus:outline-none focus:border-[#001F3F] focus:ring-0"
              }
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer hover:text-[#EEEEEE]"
            >
              <CiSearch size={24} />
            </button>
          </div>
          <div>
            <FaCloudMoon
              onClick={toggleDarkMode}
              className={
                darkMode
                  ? "text-black cursor-pointer text-3xl"
                  : "text-yellow-400 cursor-pointer text-3xl"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
