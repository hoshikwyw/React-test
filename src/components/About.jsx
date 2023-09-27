import React from "react";
import "./about.css";
import tablet from "../images/Tablet@2x.png";

const About = () => {
  return (
    <div className=" h-[524px] flex justify-center items-center gap-10 mx-auto">
      <div className=" w-[665px]">
        <h2 className=" text-[36px] font-bold pb-5">
          ABOUT <span className=" text-[#77D9F1]">TRIPPRO</span>
        </h2>
        <hr className=" w-[152px] h-[3px] bg-[#2DC4EA]" />
        <p className=" text-[18px] mt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita
        </p>
        <button className=" uppercase text-white font-semibold text-[20px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] px-10 py-3 rounded-full mt-5">
          tour to website
        </button>
      </div>
      <div className=" relative flex justify-center items-center">
        <div className=" w-[524px] container overflow-hidden">
          <div className=" box flex justify-center items-center">
            <div className="box1 flex justify-center items-center">
              <div className="box2 flex justify-center items-center">
                <div className="box3 flex justify-center items-center">
                  <div className="box4 flex justify-center items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={tablet}
          alt="tablet image"
          className=" w-[369px] h-[498px] z-50 absolute top-3 "
        />
      </div>
    </div>
  );
};

export default About;
