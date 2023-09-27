import React from "react";
import "./home.css";
import responsive from "../images/responsive.svg";
import wordPress from "../images/wordpress-development-logo-banner.svg";
import shopping from "../images/shopping-cart.svg";
import laptop from "../images/Laptop@2x.png";
import laptopImg from "../images/devwp.visibleone.net_tripprohk_@2x.png"

const Home = () => {
  return (
    <div className=" h-full ">
      <div className="  h-[637px] custom-bg bg-cover ">
        <div className=" h-[637px] bg-black/40">
          <div className=" w-full  flex flex-col gap-3 items-center pt-16">
            <h2 className=" text-[60px] text-[#FFFFFF]">
              TRIPPRO - AN ECOMMERCE SOLUTION
            </h2>
            <p className=" text-[#FFFFFF] text-center text-[18px] max-w-[1200px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div className=" mt-2 flex gap-2">
              <div className=" flex gap-2 items-center px-10">
                <h2 className=" text-white text-[24px] font-bold">
                  Built for:
                </h2>
                <img src={responsive} alt="" className=" w-[60px]" />
              </div>
              <div className=" flex gap-4 items-center border-s-4 border-e-4 px-10">
                <div>
                  <h2 className=" text-white text-[24px]">Technologies:</h2>
                  <h2 className=" text-white text-[24px] font-bold">
                    Wordpress
                  </h2>
                </div>
                <img src={wordPress} alt="" className=" w-[60px]" />
              </div>
              <div className=" flex gap-4 items-center px-10">
                <div>
                  <h2 className=" text-white text-[24px]">Industry:</h2>
                  <h2 className=" text-white text-[24px] font-bold">
                    Ecommerce
                  </h2>
                </div>
                <img src={shopping} alt="" className=" w-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center relative h-[280px]">
        <img src={laptop} alt="" className=" absolute w-[850px] h-[484px] -top-[289px]" />
        <img src={laptopImg} alt="" className=" absolute w-[644px] h-[404px] -top-[255px]" />
      </div>
    </div>
  );
};

export default Home;
