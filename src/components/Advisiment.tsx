import React from "react";

const Advisiment = () => {
  return (
    <div className="w-[88%] h-[614px] mx-auto py-4  rounded-lg flex  justify-between gap-3">
      <div className="w-[49%] flex flex-col justify-between">
        <img src="/lastest.png" alt="name" className="w-full h-[48.5%] rounded-lg" />
        <img src="/branded.png" alt="name" className="w-full h-[48%] rounded-lg" />
      </div>
      <div className="w-[49%]">
        <img src="/season.png" alt="name" className="w-full h-[100%]  rounded-lg" />
      </div>
    </div>
  );
};

export default Advisiment;
