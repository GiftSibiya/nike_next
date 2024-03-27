import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export const PopShoeTile = ({ img, stars, name, price }) => {
  return (
    <div className="">
      <Image src={img} alt="" className="size-[200px] " />
      <div className=" relative bottom-[30px] left-[0px] rounded-lg bg-white p-1 flex items-center justify-between w-[55px] border-slate-400 border-1">
        <FaStar color="orange" />
        <h1>- {stars}</h1>
      </div>
      <div className=" relative bottom-[50px] my-5 flex flex-col items-center ">
        <h1 className="my-1 text-center">{name}</h1>
        <hr className="mb-3 border-slate-500 border-1 w-[100px]" />
        <h1 className="text-orange-400 font-bold">{price}</h1>
        {/* -- */}
      </div>
    </div>
  );
};
