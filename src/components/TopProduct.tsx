"use client"
import { products } from '@/app/constant/types';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopProduct = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="w-[88%] mx-auto p-4 border rounded-lg shadow-lg relative my-5">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 relative">
        <h2 className="text-xl font-bold text-[#FF0000] custom-underline">Flavors Of Month</h2>
        <button onClick={handleViewAll} className="text-[#222222] text-base">
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>
      <Slider {...settings}>
        {products.slice(0, showAll ? products.length : 5).map((product) => (
          <div key={product.id} className="p-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h3 className="text-base text-[#666666] font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.discount}</p>
            </div>
            <div className="md:w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-48 rounded-lg" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopProduct;
