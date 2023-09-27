import React, { useState } from "react";
import Laptop from "./Laptop";
import Phone from "./Phone";

const Slider = () => {
  const [screen, setScreen] = useState("laptop");

  const clickMobileHandler = () => {
    setScreen("mobile");
  };

  const clickLaptopHandler = () => {
    setScreen("laptop");
  };

  return (
    <div className="">
      {screen === "laptop" ? (
        <div className="">
          <Laptop click={clickMobileHandler} />
        </div>
      ) : (
        <div className="">
          <Phone click={clickLaptopHandler} />
        </div>
      )}
    </div>
  );
};

export default Slider;
