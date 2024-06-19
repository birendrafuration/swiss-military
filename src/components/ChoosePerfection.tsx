

"use client"
import React, { useState } from 'react';

const ProductDetail = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index:any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex h-[800px] w-[100%] mx-auto flex-row py-4 gap-6 items-center">
      {/* Left section with image */}
      <div className="w-1/2 ">
        <img src="/cms.png" alt="Product Image" className="w-full h-auto" />
      </div>

      {/* Right section */}
      <div className="w-[45%] flex flex-col justify-start px-8 space-y-4">
        {/* Heading */}
        <p className='text-base text-[#FF0000]' > STYLES COLLECTION</p>
        <h1 className="text-[32px] text-[#333333] font-bold">Choose perfection 
            <br/>
        as perfect as you are</h1>

        {/* Accordion 1 */}
        <div>
          <button 
            onClick={() => toggleAccordion(1)} 
            className="w-full text-left bg-gray-200 p-2 rounded-lg flex items-center justify-between"
          >
            <span>Safety Packaging</span>
            <span  className=' w-10 h-10 text-lg border border-[#FF0000] rounded-full flex justify-center items-center text-center'>{openAccordion === 1 ? '-' : '+'}</span>
          </button>
          {openAccordion === 1 && (
            <div className="bg-gray-100 p-4 mt-2 rounded-lg">
              <p>Ingridients undergo a rigorous scientific evaluation to meet our strict standards for purity, potency, and efficacy. We bring together the best of nature and science to create a truly harmonious and...</p>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div>
          <button 
            onClick={() => toggleAccordion(2)} 
            className="w-full text-left bg-gray-200 p-2 rounded-lg flex items-center justify-between"
          >
            <span>100% Warranty Product</span>
            <span className=' w-10 h-10 text-lg border border-[#FF0000] rounded-full flex justify-center items-center text-center'>{openAccordion === 2 ? '-' : '+'}</span>
          </button>
          {openAccordion === 2 && (
            <div className="bg-gray-100 p-4 mt-2 rounded-lg">
              <p>Ingridients undergo a rigorous scientific evaluation to meet our strict standards for purity, potency, and efficacy. We bring together the best of nature and science to create a truly harmonious and...</p>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div>
          <button 
            onClick={() => toggleAccordion(3)} 
            className="w-full text-left bg-gray-200 p-2 rounded-lg flex items-center justify-between"
          >
            <span>Premium Product</span>
            <span  className=' w-10 h-10 text-lg border border-[#FF0000] rounded-full flex justify-center items-center text-center'>{openAccordion === 3 ? '-' : '+'}</span>
          </button>
          {openAccordion === 3 && (
            <div className="bg-gray-100 p-4 mt-2 rounded-lg">
              <p>Ingridients undergo a rigorous scientific evaluation to meet our strict standards for purity, potency, and efficacy. We bring together the best of nature and science to create a truly harmonious and...</p>
            </div>
          )}
        </div>

      

        {/* Shop Now button */}
        <button className="bg-[#FF0000] w-[165px] h-[49px] text-white flex items-center justify-center rounded-md">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
