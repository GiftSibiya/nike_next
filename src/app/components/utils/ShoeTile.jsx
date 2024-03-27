import Image from "next/image";
import React from "react";

const ShoeTile = ({ img, onClick }) => {
  return (
    <section className="w-[200px]">
      <div
        className="w-[150px] border-orange-400 border-2 rounded-lg p-2 bg-slate-100 hover:bg-slate-300 duration-200 cursor-pointer"
        onClick={onClick}
      >
        <Image src={img} alt="" />
      </div>
    </section>
  );
};

export default ShoeTile;
