import React from "react";
import image from "../assets/thumbnail.jpg";
const Hero = () => {
  return (
    <div>
      <img
        src={image}
        alt="hero"
        className="w-full h-[80vh] object-cover rounded-2xl"
      />
    </div>
  );
};

export default Hero;
