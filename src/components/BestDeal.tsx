"use client"
import { bestbags } from '@/app/constant/best-bag';

import { useState } from 'react';

const BestDeal = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-[88%] mx-auto p-4 border rounded-lg shadow-lg relative my-5">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 relative">
        <h2 className="text-xl font-bold text-[#FF0000] custom-underline">Grab the best deal on Bags</h2>
        <button onClick={handleViewAll} className="text-[#222222] text-base">
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {bestbags.slice(0, showAll ? bestbags.length : 5).map((product) => (
          <div key={product.id} className="relative">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-48 rounded-lg" />
              <div className=" w-14 h-14 flex items-center  text-center absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full ">
                ${product.discount}
              </div>
            </div>
            <div className="p-2">
              {/* <h3 className="text-base text-[#666666] font-semibold text-start">{product.name}</h3>
              <p className="text-gray-600 text-start">₹ {product.price}</p> */}
              <h3 className="text-base text-[#666666] font-semibold text-start">{product.name}</h3>
            

                 <div className="flex items-center space-x-2">
                    <p className="text-gray-600 text-start">₹{Math.floor(product.price*(0.44))}</p>
                    <p className="text-gray-600 text-start line-through">₹{product.price}</p>
                </div>
                <p className="text-[#249B3E] text-base text-start">Save - ₹{Math.ceil(product.price*(0.56))}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeal;
