import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerTile = ({ pfp, testimony, star, name }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image src={pfp} alt="" className="rounded-full size-[100px]"></Image>
        <p className="w-[400px] text-center h-[90px] my-2">{testimony}</p>
        <h4 className="flex items-center  font-bold">
          {" "}
          <FaStar color="orange" /> {star}
        </h4>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CustomerTile;
