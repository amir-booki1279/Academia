import React from "react";

const BoxHeader = ({title,number,icon}) => {
  return (
    <div className="flex flex-col gap-y-4 items-center h-52.5 bg-white/60 border-4 border-white py-6 px-10 rounded-2xl">
      <div className="w-16 h-16 flex justify-center items-center rounded-2xl bg-[#2196F3]">
        {icon}
      </div>
      <span className="text-4xl font-bold">{number}</span>
      <p className="font-medium text-xl">{title} </p>
    </div>
  );
};

export default BoxHeader;
