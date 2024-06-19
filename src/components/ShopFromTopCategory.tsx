"use client";
import { category } from "@/app/constant/types";
import { useState } from "react";

const ShopFromTopCategory = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-[88%] mx-auto p-1 border rounded-lg shadow-lg relative my-5">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 relative">
        <h2 className="text-xl font-bold text-[#FF0000] custom-underline">
          Shop From Top Categories
        </h2>
        <button onClick={handleViewAll} className="text-[#222222] text-base">
          {showAll ? "Show Less" : "View All >"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {category.slice(0, showAll ? category.length : 7).map((product) => (
          <div key={product.id} className="h-[172px] w-[156px] flex flex-col items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[132px] h-[132px] object-contain"
            />
            <p className="text-base text-[#666666] text-center ">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFromTopCategory;
