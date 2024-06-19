"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { dropdownData } from "@/app/constant/drop-down";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full">
      <div className=" navBarBackground w-full mx-auto bg-[#F5F5F5]">
        <div
          className={`hidden lg:flex py-3 w-full max-w-[91.66%] mx-auto text-[#666666] justify-between items-center`}
        >
          <div className="flex justify-between items-center gap-8 text-sm">
            <Link
              href={""}
              target="_blank"
              className="flex justify-between items-center gap-2"
            >
              <p>Welcome to Swiss Military </p>
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link href="" className="flex items-center text-[#666666]">
              <Image
                src="/location.png"
                alt="User"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>Deliver to 400025</p>
            </Link>
            <Link href="" className="flex items-center text-[#666666]">
              <Image
                src="/delivery-truck.png"
                alt="Cart"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>Track your order</p>
            </Link>
            <Link href="" className="flex items-center text-[#666666]">
              <Image
                src="/discount.png"
                alt="Discount"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>All Offers</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full px-[4%] py-1 mx-auto flex justify-between items-center  bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <div className=" navBarBackground flex justify-center items-center cursor-pointer w-12 h-12 text-2xl">
            ☰
          </div>

          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-[46px] w-[162px]"
          />
        </div>
        <div className=" flex-1 flex justify-center mx-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search essentials, groceries and more..."
            className="w-full navBarBackground max-w-md px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="flex items-center text-black">
            <Image
              src="/user-icon.png"
              alt="User"
              width={24}
              height={24}
              className="mr-2"
            />
            Sign In/Sign Up
          </Link>
          <Link href="/cart" className="flex items-center text-black">
            <Image
              src="/cart-icon.png"
              alt="Cart"
              width={24}
              height={24}
              className="mr-2"
            />
            Cart
          </Link>
        </div>
      </div>

      <div className="w-full bg-white shadow-md">
        <div className="w-full max-w-[87%] mx-auto flex justify-between items-center py-3">
          {dropdownData.map((element, index) => (
            <div key={index+1} className="navBarBackground relative group rounded-2xl py-2 px-3">

              <button className="flex items-center text-[#666666] text-sm">
                {element.title}
                <span className="ml-2">

                  <Image
                    src="/down.png"
                    alt="Cart"
                    width={12}
                    height={12}
                    className="mr-2"
                  />
                </span>
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 hidden group-hover:block">
               
                {
                    element.fields.map((element,index)=>(
                        <Link
                        key={index+1}
                        href=""
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {
                            element.title
                        }
                      </Link>
                    ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
