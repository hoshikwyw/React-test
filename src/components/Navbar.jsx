import React from "react";
import { BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { BiSolidDownArrow,BiSearch } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import brand from "../images/brand.png"

const Navbar = () => {
  return (
    <div className=" h-[80px] relative shadow-md">
      <img src={brand} alt="logo-image" className=" w-fit h-[80px] absolute top-0 left-[100px] cursor-pointer" />
      <div className=" bg-[#EBEBEB] h-[40px] flex justify-end items-center gap-5 pe-[100px]">
        <h2 className=" flex items-center gap-2 cursor-pointer font-semibold">
          <span className=" text-sm text-[#30ADE1]">
            <BsTelephoneFill />
          </span>
          6248 0838
        </h2>
        <h2 className=" flex items-center gap-2 cursor-pointer font-semibold">
          <span className=" text-sm text-[#30ADE1]">
            <BsWhatsapp />
          </span>
          8484 9948
        </h2>
        <h2 className=" flex items-center gap-2 cursor-pointer font-semibold">
          <span className=" text-[#30ADE1]">
            <MdEmail />
          </span>
          info@visibleone.com
        </h2>
        <button className=" bg-[#37B34A] flex items-center gap-2 rounded px-2 text-white text-sm py-1">
          <span className=" text-white">
            <IoDocumentText />
          </span>
          QUOTE
        </button>
        <div className=" border border-[#88CAE5] flex items-center gap-2 px-2 py-1">
          <button className=" text-sm">SG EN </button>
          <span className=" text-[#30ADE1] text-sm">
            <BiSolidDownArrow />
          </span>
        </div>
      </div>
      <div className=" w-full bg-transparent h-[40px] flex justify-end items-center gap-20 pe-[100px]">
        <div className=" flex gap-5">
          <button className=" hover:text-[#30ADE1]">Home</button>
          <button className=" flex gap-2 items-center hover:text-[#30ADE1]">
            Services
            <span className=" text-[#30ADE1] text-sm">
              <IoIosArrowDown />
            </span>
          </button>
          <button className=" flex gap-2 items-center hover:text-[#30ADE1]">
            Company
            <span className=" text-[#30ADE1] text-sm">
              <IoIosArrowDown />
            </span>
          </button>
          <button className=" hover:text-[#30ADE1]">Blog</button>
          <button className=" flex gap-2 items-center hover:text-[#30ADE1]">
            Contact Us
            <span className=" text-[#30ADE1] text-sm">
              <IoIosArrowDown />
            </span>
          </button>
        </div>
        <button className=" hover:text-[#30ADE1] text-lg"><BiSearch /></button>
      </div>
    </div>
  );
};

export default Navbar;
