

"use client"
import { products } from '@/app/constant/types';
import { useState } from 'react';

const FavourOfMonth = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return  (
    <div className="w-[88%] mx-auto p-4 border rounded-lg shadow-lg relative my-5">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 relative">
        <h2 className="text-xl font-bold text-[#FF0000] custom-underline">Flavors Of Month</h2>
        <button onClick={handleViewAll} className="text-[#222222] text-base">
          {showAll ? 'Show Less' : 'View All >'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.slice(0, showAll ? products.length : 5).map((product) => (
          <div key={product.id} className="  ">
            <img src={product.image} alt={product.name} className="w-full h-48 rounded-lg" />
            <div className="p-2">
              <h3 className="text-base text-[#666666] font-semibold text-center">{product.name}</h3>
              <p className="text-gray-600 text-center">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavourOfMonth;
