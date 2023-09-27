import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Slider from "./components/Slider";
import footer from "./images/Footer@2x.png";

const App = () => {
  return (
    <div className=" flex flex-col gap-10">
      <Navbar />
      <div className=" h-fit">
        <Home />
      </div>
      <About />
      <Challenges />
      <div>
        <Slider />
        <img src={footer} alt="footer-image" />
      </div>
    </div>
  );
};

export default App;
