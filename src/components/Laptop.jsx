import React from "react";
import subImg from "../images/trippro.com.hk_cn_@2xside.png";
import mainImg from "../images/trippro.com.hk_cn_@2x.png";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./laptop.css";

const Laptop = ({click}) => {
  return (
    <div className=" flex">
      <div className=" h-[553px] flex relative -left-[356px]">
        <div className="">
          <img src={subImg} alt="" className=" w-[ 631px] h-[360px] " />
        </div>
        {/* laptop layout  */}
        <div className=" bg-transparent flex flex-col justify-center items-center z-50">
          <div className=" w-[679px] h-[405px] bg-[#58595B] relative rounded-t-2xl">
            <img
              src={mainImg}
              alt=""
              className=" absolute left-[23px] top-[20px] w-[631px] h-[360px]"
            />
          </div>
          <div className=" w-[679px] h-[63px] bg-[#C5CDD3] rounded-b-2xl flex justify-center items-center">
            <div className=" w-[24px] h-[24px] bg-[#58595B] rounded-full"></div>
          </div>
          <div className=" w-[172px] h-[74px] bg-[#6E7278] one bg-cover" >
            
          </div>
          <div className=" w-[233px] h-[7px] bg-[#C5CDD3] two"></div>
          <div className=" w-[233px] h-[4px] bg-[#6E7278] rounded"></div>
        </div>
      </div>
      <div className=" mainBg absolute ">
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
          <div onClick={click} className=" bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] w-[231px] h-[47px] rounded-full mt-5 border border-white ms-[28%] flex items-center justify-end pe-5 gap-3 cursor-pointer">
            <button className=" text-white font-semibold text-[18px] ">
              Desktop
            </button>
            <div className=" w-[26px] h-[26px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
