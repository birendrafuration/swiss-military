"use client"
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel-custom.css";

const images:string[]=[
  "/imageSlider.png",
  "/imageSlider.png",
  "/imageSlider.png",
  "/imageSlider.png",
  "/imageSlider.png",
  "/imageSlider.png",
];

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      transitionTime={500}
      interval={1500}
      className="h-[316px] w-[100%] mx-auto px-[6%] my-8"
      showThumbs={false} 
      rounded-lg
    >
      {images.map((item, index) => {
        return (
          <div key={index+1} className="w-[100%] mx-auto bg-[#2D2F36] rounded-lg">
            <Image
              src={item}
              height={1000}
              width={1000}
              alt={item}
              className="h-full w-full object-fill rounded-lg"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
