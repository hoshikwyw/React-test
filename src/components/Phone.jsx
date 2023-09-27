import React from "react";
import subImg from "../images/trippro.com.hk_(iPhone X).png";
import subImg1 from "../images/trippro.com.hk_(iPhone X)@2xmd.png";
import subImg2 from "../images/trippro.com.hk_(iPhone X)@2x.png";
import mainImg from "../images/trippro.com.hk_(iPhone X)@2xph.png";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import mobile from "../images/smartphone (1).svg";
import { FaWifi, FaBatteryThreeQuarters } from "react-icons/fa";
import "./phone.css";

const Phone = ({ click }) => {
  return (
    <div className=" flex ">
      <div className=" z-50 h-[553px] flex gap-10 relative -left-[78px] items-center">
        <div className=" flex justify-center items-center gap-2 mx-5 z-50 h-full w-fit">
          <img src={subImg} alt="" className=" w-[241px] h-[407px] " />
          <img src={subImg1} alt="" className=" w-[241px] h-[407px] " />
          <img src={subImg2} alt="" className=" w-[241px] h-[407px] " />
        </div>
        <div className=" z-50 w-fit">
          <div className=" w-[271px] h-[556px] mainContainer flex justify-center items-center rounded-[25px]">
            <div className=" subContainer w-[265px] h-[547px] flex flex-col items-center rounded-[25px]">
              <div className=" camera py-[10px]">
                <div className=" w-full flex items-end justify-center gap-3">
                  <div className=" hole2"></div>
                  <div className=" flex flex-col justify-center items-center gap-3">
                    <div className=" hole1"></div>
                    <div className=" speaker rounded"></div>
                  </div>
                </div>
              </div>
              <div className=" screenContainer mt-5 flex justify-center items-center relative">
                <div className=" screen">
                  <img src={mainImg} alt="" className=" w-full h-full" />
                </div>
                <div className=" navContainer flex items-center justify-between h-[10px] w-[229px] absolute top-5">
                  <div className=" flex gap-[1px] items-center">
                    <div className=" w-[6px] h-[6px] rounded-full bg-black"></div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-black"></div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-black"></div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-black"></div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-black"></div>
                    <FaWifi className=" ms-1" />
                  </div>
                  <h2 className=" text-[7px]">11:45 AM</h2>
                  <div className=" flex gap-[3px] items-center">
                    <h2 className=" text-[7px]">80%</h2>
                    <h2>
                      <FaBatteryThreeQuarters />
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" homeBtnContainer bg-slate-500 rounded-full flex justify-center items-center cursor-pointer">
                <div className=" homeBtn bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mainBg2 absolute w-[60%]">
        <div className=" ps-20">
          <div className=" w-full h-full flex flex-col items-center py-5 mt-8">
            <h2 className=" text-white text-[36px] font-bold">
              Their Old Website & Problems
            </h2>
            <div className=" w-full flex flex-col gap-10 justify-center ps-[28%] mt-5">
              <p className=" text-white w-[720px] flex justify-center gap-5 text-[18px]">
                <span className=" text-[24px] font-bold">
                  <BsArrowRight />
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <p className=" text-white w-[720px] flex justify-center gap-5 text-[18px]">
                <span className=" text-[24px] font-bold">
                  <BsArrowRight />
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <p className=" text-white w-[720px] flex justify-center gap-5 text-[18px]">
                <span className=" text-[24px] font-bold">
                  <BsArrowRight />
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <div className=" text-white flex gap-10 pt-10">
                <button className=" text-xl">
                  <MdArrowBackIosNew />
                </button>
                <button className=" text-xl">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={click}
            className=" bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] w-[231px] h-[47px] rounded-full mt-5 border border-white ms-[28%] flex items-center justify-start ps-5 gap-3 cursor-pointer">
            <div className=" w-[26px] h-[26px] rounded-full bg-white"></div>
            <img src={mobile} alt="" />
            <button className=" text-white font-semibold text-[18px] ">
              Mobile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
