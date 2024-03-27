//-- Imports
import React from "react";

// Images
import shoe1 from "../../../public/assets/images/shoe4.svg";
import shoe2 from "../../../public/assets/images/shoe5.svg";
import shoe3 from "../../../public/assets/images/shoe6.svg";
import shoe4 from "../../../public/assets/images/shoe7.svg";

// Components
import { PopShoeTile } from "./utils/PopShoeTile";
import { IoMdArrowDropright } from "react-icons/io";

export const PopularSec = () => {
  return (
    <section className="flex flex-col  items-center">
      {/* Popular Text */}
      <div className="w-[80%]">
        <h2 className="text-[30px] font-bold text-start">
          {" "}
          Our Most <span className="text-orange-400 ]">
            Popular
          </span> Products{" "}
        </h2>
        <p className="my-5 text-sm">
          Experience the latest and greatest. Find your perfect pair of our{" "}
          <br /> hand picked best sellers.
        </p>
      </div>
      {/* -- */}
      {/* Shoe Tiles */}
      <div className="flex justify-between w-[80%] mt-8 ">
        <PopShoeTile
          img={shoe1}
          stars="4"
          name="Nike Legend Essential-2"
          price="$200.20"
        />
        <PopShoeTile
          img={shoe2}
          stars="4"
          name="CR Terrati -1"
          price="$210.20"
        />
        <PopShoeTile
          img={shoe3}
          stars="4"
          name="Nike MD Runner 2"
          price="$180.70"
        />
        <PopShoeTile
          img={shoe4}
          stars="4"
          name="Nike Newbalace MRL247"
          price="$250.50"
        />
      </div>
      <button className=" flex w-[150px] justify-center items-center bg-orange-400 rounded-2xl text-white pl-[15px] py-2">
        See More{" "}
        <IoMdArrowDropright
          size={30}
          className="hover:rotate-180 duration-200"
        />
      </button>
      {/* -- */}
    </section>
  );
};
