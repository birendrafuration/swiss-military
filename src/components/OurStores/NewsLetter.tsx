'use client'


import React, { useState } from 'react'

const NewsLetter = () => {

  const [email, setEmail] = useState("");
  const sendEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };


  return (
    <div className="w-[70%] mx-auto py-8">
    <h1 className="text-[32px] font-bold mb-4 text-center text-[#333333]">
    Join our Newsletter now
    </h1>

    <div className="flex justify-center items-center space-x-4 ">
      
    <input
            type="email"
            value={email}
            onChange={sendEmail}
            placeholder="Your email address"
            className="w-full navBarBackground max-w-md px-4 py-3 border border-gray-300 rounded-md"
          />
      <button className="bg-[#FF0000] w-[165px] h-[49px] text-white flex items-center justify-center rounded-md">
      SIGN UP
      </button>
    </div>
    <p className="text-base text-[#666666] mt-6 text-center">
    Will be used in accordance with our Privacy Policy
    </p>
    
  
  </div>
  )
}

export default NewsLetter
