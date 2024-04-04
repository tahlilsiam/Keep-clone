import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGooglekeep } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { IoMdRefresh, IoMdSettings } from "react-icons/io";
import { HiOutlineViewList, HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white-500 py-4 px-2">
      <div className="flex items-center space-x-2">
        <GiHamburgerMenu className="text-xl" />
        <SiGooglekeep className="text-yellow-500 text-xl h-8 w-10" />
        <h1 className="text-xl">keep</h1>
      </div>

      <div className="max-w-[720px] w-full flex bg-gray-100 rounded ml-5 mr-5">
        <form
          className="flex items-center flex-grow"
          method="get"
          role="search"
        >
          <button type="submit" className="ml-2">
            <FaSearch className="h-4 w-4 text-slate-500" />
          </button>
          <input
            className="bg-gray-100 rounded px-4 py-2 "
            aria-label="Search"
            autoComplete="off"
            placeholder="Search"
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role="combobox"
            value=""
            name="q"
            type="text"
            aria-hidden="false"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <IoMdRefresh className="text-xl" />
        <HiOutlineViewList className="text-xl" />
        <IoMdSettings className="text-xl" />
        <HiOutlineDotsHorizontal className="text-xl" />
        <CgProfile className="text-xl" />
      </div>
    </header>
  );
};

export default Header;
