import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../public/ytlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Tooltip from "./Tooltip";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  if (searchbar) {
    return (
      <div className="flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white items-center">
        <IoArrowBack size={42} className="p-2 cursor-pointer rounded-full hover:bg-gray-200" onClick={() => setSearchbar(!searchbar)} />
        <div className="flex flex-grow max-w-96 mx-4 items-center">
        <div className="w-[80%] px-3 py-2 border border-gray-300 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none items-center"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-t border-r border-b  border-gray-300 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        </div>

        <Tooltip text="Search with your voice">
          <IoMdMic
          size={"42px"}
          className="ml-3 rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-gray-200 duration-200"
        />
        </Tooltip>

        
      </div>
    );
  }

  return (
    <div className="flex justify-between px-6 fixed top-0 w-[100%] bg-white">
      <div className="flex items-center space-x-4">
        <FiMenu
          className="text-xl cursor-pointer font-thin"
          onClick={handleSidebar}
        />
        
        <Link to="/">
        <img src={logo} alt="" className="w-28 cursor-pointer" />
        </Link>

        
      </div>
      <div className="hidden md:flex w-[45%] items-center">
        <div className="w-[80%] z-50 px-3 py-2 border border-gray-300 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full items-center"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-t border-r border-b  border-gray-300 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>

        <Tooltip text="Search with your voice">
          <IoMdMic
            size={"39px"}
            className="ml-3 rounded-full p-2 cursor-pointer bg-gray-100 hover:bg-gray-200 duration-200"
          />
        </Tooltip>
      </div>
      <div className="flex space-x-5 items-center">
        <Tooltip text="Search">
          <IoIosSearch
            size={"42px"}
            className="text-2xl md:hidden rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
            onClick={() => setSearchbar(!searchbar)}
          />
        </Tooltip>

        <Tooltip text="Create">
          <RiVideoAddLine
            size={"42px"}
            className="rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </Tooltip>

        <Tooltip text="Notifications">
          <AiOutlineBell
            size={"42px"}
            className=" rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        </Tooltip>

        <Tooltip text="You">
          <FaCircleUser className="text-2xl cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
}

export default Navbar;
