import React from "react";
import image from "../assets/thumbnail.jpg";
const Hero = () => {
  return (
    <div>
      <img
        src={image}
        alt="hero"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default Hero;
