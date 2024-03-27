import React from "react";

export const Subscribe = () => {
  return (
    <section className="flex justify-center items-center my-10">
      <div className="flex w-[80%] justify-between items-center">
        <div className="">
          <h3 className="text-[30px] font-bold">
            {" "}
            Sign up for <span className="text-orange-400">
              Updates
            </span> <br /> & Newsletters
          </h3>
        </div>
        <div className="">
          <div className=" flex justify-between w-[400px] border-slate-500 border-2 rounded-3xl">
            <input
              placeholder="Enter Your Email"
              className="w-[70%] rounded-3xl focus:border-red-600"
            ></input>
            <button className="p-2 bg-orange-400 rounded-3xl m-1 text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
