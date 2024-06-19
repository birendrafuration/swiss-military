import { FOOTERDATA, footerData } from "@/app/constant/drop-down";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="w-full h-[74px] py-[10px] flex items-center justify-center bg-[#FF0000] text-[#FFFFFF] text-4xl">
          Bringing Joy to Over 4 Million Satisfied Customers
        </h1>
      </div>
      <div className="flex justify-between w-[88%] mx-auto p-6">
        {/* this is left foooter part  */}
        <div className="flex flex-col w-[50%] space-y-4 text-start">
          <div className="flex  flex-col items-start ">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-[46px] w-[162px]"
            />
            <p className="text-[#FF0000]">The House of Affordable Luxury</p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-sm">
                Regd. Office : W-39, Okhla Industrial Area, Phase- II,
                <br />
                New Delhi- 110020
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-sm">
                Corporate Office : JMD Megapolis 621-624, 6th floor,
                <br />
                Sector 48, Sohna Road, Gurugram, 122001
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-sm">
                Phone : +91-9319234446
                <br />
                Contact Support
                <br />
                L51100DL1989PLC034797
              </p>
            </div>
          </div>
        </div>

        {/* this is right section */}
        <div className="flex  w-[50%] text-start justify-around items-start">
          {footerData.map((element: FOOTERDATA,index) => (
            <div key={index+1} className="w-[50%]">
              <p className="text-[#FF0000] text-base font-bold">
                {element.title}
              </p>
              <ul className="">
                {element.items.map((item) => (
                  <li key={item.id} className="my-3">
                    <Link
                      href=""
                      className="block text-[#000000] text-sm hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center bg-black text-center lg:text-left py-4">
        <p className="text-[#FFFFFFB2] text-xs">
          Designed & Developed by Furation.Tech
        </p>
      </div>
    </div>
  );
};

export default Footer;
