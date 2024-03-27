import React from "react";

const QualTile = ({ icon, title, descr }) => {
  return (
    <div className="w-[350px] rounded-3xl h-[200px] p-5 shadow-2xl ">
      <div className="bg-orange-400 w-[50px] h-[50px] rounded-full flex justify-center items-center">
        {icon}
      </div>
      <h4 className="font-bold my-2">{title}</h4>
      <p className=" w-[280px] text-slate-600">{descr}</p>
    </div>
  );
};

export default QualTile;
