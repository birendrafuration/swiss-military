import Image from 'next/image';
import React from 'react';

const storeLogos = [
  { src: '/amazon.png', alt: 'Store 1',width: '196px',height: '59px' },
  { src: '/mantra.png', alt: 'Store 2',width: '192px',height: '51px' },
  { src: '/croma.png', alt: 'Store 3' ,width: '197.21px',height: '44px'},
  { src: '/flipcart.png', alt: 'Store 4',width: '193px',height: '51px' },
  { src: '/flipcart.png', alt: 'Store 5',width: '193px',height: '51px' },
  { src: '/snapdeal.png', alt: 'Store 6',width: '195px',height: '48px' },
  { src: '/tata.png', alt: 'Store 7',width: '185px',height: '65.84px' },
  { src: '/mantra.png', alt: 'Store 8',width: '192px',height: '51px' },
  // Add more logos as needed
];



const OurEcommerceStore = () => {
  return (
    <div className="w-[87%] mx-auto py-8">
      <h1 className="text-[32px] font-bold mb-4 text-center text-[#333333]">Our Ecommerce Stores</h1>
      <p className="text-base text-[#666666] mb-8 text-center">
        You can also buy Swiss Military products on
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
        {storeLogos.map((logo, index) => (
          <div
          key={index}
          className="flex justify-center items-center rounded-[8px] mx-3 py-1 px-2 border-[1px] border-[#C9C9C9]"
        >
             {/* <Image
                  src={logo.src}
                 alt= {logo.alt}
                  className="w-full"
                  width={1440}
                  height={2}
                /> */}
            <img src={logo.src} alt={logo.alt} className={`w-[${logo.width}] h-[${logo.height}]` }/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEcommerceStore;
