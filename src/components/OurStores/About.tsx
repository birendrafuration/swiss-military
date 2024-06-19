import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-[70%] mx-auto py-8">
      <h1 className="text-[32px] font-bold mb-4 text-center text-[#333333]">
        About Swiss Military
      </h1>
      <p className="text-base text-[#666666] mb-4 text-center">
        The House of Affordable Luxury
      </p>
      <p className="text-base text-[#666666] mb-6 px-2 text-center">
        Swiss Military is a medium to connect our customers to the world of
        Premium Lifestyle Products bearing the highest quality standards at
        surprisingly affordable prices. We call it “Affordable Luxury”
      </p>
      <div className="flex justify-center items-center space-x-4 ">
        <button className="bg-[#FF0000] w-[165px] h-[49px] text-white flex items-center justify-center rounded-md">
          Shop now
        </button>
        <button className="w-[165px] h-[49px] text-[#FF0000] flex items-center justify-center rounded-md border-[1px] border-[#FF0000]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default About;
